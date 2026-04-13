"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const achievements = [
  { title: "10th BOARDS", score: "90%", subtitle: "Outstanding Performance", color: 0xffcc00, hex: "#ffcc00" },
  { title: "12th BOARDS", score: "93%", subtitle: "Academic Excellence", color: 0xff6600, hex: "#ff6600" },
  { title: "JEE MAINS", score: "94%ile", subtitle: "Qualified • Kota, Rajasthan", color: 0x00ccff, hex: "#00ccff" },
  { title: "GATE EXAM", score: "QUALIFIED", subtitle: "National Level Achievement", color: 0x00ff88, hex: "#00ff88" },
  { title: "SEMESTER SGPA", score: "10.0", subtitle: "Perfect Score", color: 0xff00ff, hex: "#ff00ff" },
  { title: "B.TECH", score: "PURSUING", subtitle: "Uttaranchal University, Dehradun", color: 0x8844ff, hex: "#8844ff" },
];

const timelineBars = [90, 93, 94, 80, 100, 70];

export default function HeroSectionRight() {
  const mountRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // ── SETUP ──
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.FogExp2(0x000000, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      500
    );
    camera.position.set(0, 2, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 8;
    controls.maxDistance = 35;
    controls.maxPolarAngle = Math.PI * 0.85;

    // ── LIGHTS ──
    scene.add(new THREE.AmbientLight(0x222233, 0.5));
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5);
    mainLight.position.set(10, 20, 10);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.set(2048, 2048);
    scene.add(mainLight);
    const fillLight = new THREE.DirectionalLight(0x4488ff, 0.4);
    fillLight.position.set(-10, 5, -10);
    scene.add(fillLight);
    const pointLight1 = new THREE.PointLight(0xffcc00, 2, 30);
    pointLight1.position.set(5, 8, 5);
    scene.add(pointLight1);
    const pointLight2 = new THREE.PointLight(0x00aaff, 1.5, 30);
    pointLight2.position.set(-5, 3, -5);
    scene.add(pointLight2);
    const spotLight = new THREE.SpotLight(0xffffff, 3, 50, Math.PI / 6, 0.5);
    spotLight.position.set(0, 20, 0);
    spotLight.castShadow = true;
    scene.add(spotLight);

    // ── MATERIALS ──
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xffcc00, metalness: 0.9, roughness: 0.1,
      emissive: 0xffaa00, emissiveIntensity: 0.3,
    });
    const glowMaterial = new THREE.MeshStandardMaterial({
      color: 0x00aaff, emissive: 0x0066ff, emissiveIntensity: 1,
      transparent: true, opacity: 0.8,
    });

    // ── GROUND GRID ──
    const gridSize = 100;
    const gridGeometry = new THREE.BufferGeometry();
    const gridPositions = [];
    for (let i = -gridSize / 2; i <= gridSize / 2; i += 2) {
      gridPositions.push(-gridSize / 2, -3, i, gridSize / 2, -3, i);
      gridPositions.push(i, -3, -gridSize / 2, i, -3, gridSize / 2);
    }
    gridGeometry.setAttribute("position", new THREE.Float32BufferAttribute(gridPositions, 3));
    scene.add(new THREE.LineSegments(gridGeometry, new THREE.LineBasicMaterial({ color: 0x1a1a2e, transparent: true, opacity: 0.4 })));

    // ── PARTICLES ──
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 80;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    particleGeometry.setAttribute("position", new THREE.Float32BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({ color: 0x4488ff, size: 0.08, transparent: true, opacity: 0.6, sizeAttenuation: true })
    );
    scene.add(particles);

    // ── BARCODE STRIPS ──
    const barcodeGroup = new THREE.Group();
    for (let i = 0; i < 30; i++) {
      const width = Math.random() * 0.15 + 0.05;
      const height = Math.random() * 8 + 4;
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, 0.1),
        new THREE.MeshStandardMaterial({
          color: Math.random() > 0.3 ? 0x222222 : 0x444444,
          metalness: 0.7, roughness: 0.3,
          emissive: Math.random() > 0.8 ? 0x111122 : 0x000000,
          emissiveIntensity: 0.5,
        })
      );
      bar.position.set(i * 0.35 - 5, 0, 0);
      barcodeGroup.add(bar);
    }
    barcodeGroup.position.set(14, 2, -5);
    barcodeGroup.rotation.y = -0.3;
    scene.add(barcodeGroup);

    // ── PLATFORM ──
    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(3, 3.5, 0.3, 64),
      new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.1 })
    );
    platform.position.y = -2.5;
    platform.castShadow = true;
    platform.receiveShadow = true;
    scene.add(platform);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.05, 16, 100), goldMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -2.35;
    scene.add(ring);
    const outerRing = new THREE.Mesh(new THREE.TorusGeometry(4, 0.03, 16, 100), glowMaterial);
    outerRing.rotation.x = Math.PI / 2;
    outerRing.position.y = -2.4;
    scene.add(outerRing);

    // ── AVATAR ──
    const avatarGroup = new THREE.Group();

    // ✅ FIXED: use position.set() instead of Object.assign with new Vector3
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.5, 1.2, 16, 32),
      new THREE.MeshStandardMaterial({ color: 0x1a1a2e, metalness: 0.6, roughness: 0.3 })
    );
    body.position.set(0, 0, 0);
    avatarGroup.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshStandardMaterial({ color: 0xf4c078, metalness: 0.1, roughness: 0.6 }));
    head.position.y = 1.3;
    avatarGroup.add(head);
    const eyeGeo = new THREE.SphereGeometry(0.06, 16, 16);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x4488ff, emissiveIntensity: 0.5 });
    [-0.15, 0.15].forEach((x) => {
      const eye = new THREE.Mesh(eyeGeo, eyeMat);
      eye.position.set(x, 1.35, 0.45);
      avatarGroup.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.03, 16, 16), new THREE.MeshStandardMaterial({ color: 0x000000 }));
      pupil.position.set(x, 1.35, 0.5);
      avatarGroup.add(pupil);
    });
    const hair = new THREE.Mesh(new THREE.SphereGeometry(0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55), new THREE.MeshStandardMaterial({ color: 0x1a1a1a, metalness: 0.3, roughness: 0.7 }));
    hair.position.y = 1.35;
    avatarGroup.add(hair);
    const capBase = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.05, 0.9), new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.5 }));
    capBase.position.y = 1.82;
    capBase.rotation.y = Math.PI / 4;
    avatarGroup.add(capBase);
    const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.15, 8), goldMaterial.clone());
    capTop.position.y = 1.92;
    avatarGroup.add(capTop);
    const tassel = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), goldMaterial);
    tassel.position.set(0.3, 1.85, 0.3);
    avatarGroup.add(tassel);
    avatarGroup.position.y = -1.2;
    scene.add(avatarGroup);

    // ── ACHIEVEMENT CARDS ──
    const cardGroups = [];
    const cardRadius = 7;

    achievements.forEach((data, i) => {
      const group = new THREE.Group();
      const card = new THREE.Mesh(
        new THREE.BoxGeometry(3.2, 2, 0.08),
        new THREE.MeshPhysicalMaterial({ color: 0x0a0a12, metalness: 0.8, roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.1 })
      );
      card.castShadow = true;
      group.add(card);
      const border = new THREE.Mesh(
        new THREE.BoxGeometry(3.3, 2.1, 0.06),
        new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 0.5, transparent: true, opacity: 0.3 })
      );
      border.position.z = -0.02;
      group.add(border);
      const line = new THREE.Mesh(
        new THREE.BoxGeometry(3.0, 0.04, 0.09),
        new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 1 })
      );
      line.position.set(0, 0.9, 0.01);
      group.add(line);
      for (let d = 0; d < 3; d++) {
        const dot = new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 8), new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 2 }));
        dot.position.set(-1.2 + d * 0.15, 0.75, 0.05);
        group.add(dot);
      }
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.25, 32, 32),
        new THREE.MeshPhysicalMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 0.8, metalness: 0.9, roughness: 0.1, clearcoat: 1 })
      );
      orb.position.set(1.2, 0.4, 0.2);
      group.add(orb);
      group.userData = { ...data, index: i };
      const angle = (i / achievements.length) * Math.PI * 2 - Math.PI / 2;
      group.position.set(Math.cos(angle) * cardRadius, 0.5 + Math.sin(i * 0.5) * 0.3, Math.sin(angle) * cardRadius);
      group.lookAt(0, 0.5, 0);
      cardGroups.push(group);
      scene.add(group);
    });

    // ── CONNECTING CURVES ──
    achievements.forEach((data, i) => {
      const angle = (i / achievements.length) * Math.PI * 2 - Math.PI / 2;
      const endX = Math.cos(angle) * cardRadius;
      const endZ = Math.sin(angle) * cardRadius;
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(endX * 0.5, 3 + Math.random() * 2, endZ * 0.5),
        new THREE.Vector3(endX * 0.85, 0.5, endZ * 0.85)
      );
      scene.add(new THREE.Mesh(
        new THREE.TubeGeometry(curve, 30, 0.015, 8, false),
        new THREE.MeshStandardMaterial({ color: data.color, emissive: data.color, emissiveIntensity: 0.6, transparent: true, opacity: 0.5 })
      ));
    });

    // ── TEXT RING ──
    const textRingGroup = new THREE.Group();
    const ringText = "  ATUL VERMA • B.TECH STUDENT • UTTARANCHAL UNIVERSITY • DEHRADUN • GATE QUALIFIED • JEE MAINS 94%ile • 10 SGPA • ACADEMIC EXCELLENCE •";
    const textRadiusVal = 5;
    for (let i = 0; i < ringText.length; i++) {
      const canvas = document.createElement("canvas");
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 40px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(ringText[i], 32, 32);
      const texture = new THREE.CanvasTexture(canvas);
      const charMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.3, 0.3),
        new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.7, side: THREE.DoubleSide })
      );
      const angle = (i / ringText.length) * Math.PI * 2;
      charMesh.position.set(Math.cos(angle) * textRadiusVal, -2.2, Math.sin(angle) * textRadiusVal);
      charMesh.rotation.y = -angle + Math.PI / 2;
      charMesh.rotation.x = -Math.PI / 6;
      textRingGroup.add(charMesh);
    }
    scene.add(textRingGroup);

    // ── BANNER TEXTS ──
    const bannerTexts = ["INTERNET BUILDER", "CREATIVE CODER", "TECH DABBLER"];
    bannerTexts.forEach((text, bi) => {
      const bannerGroup = new THREE.Group();
      const spacing = 0.5;
      for (let i = 0; i < text.length; i++) {
        const canvas = document.createElement("canvas");
        canvas.width = 64; canvas.height = 80;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 56px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text[i], 32, 40);
        const texture = new THREE.CanvasTexture(canvas);
        const mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(0.45, 0.55),
          new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.15, side: THREE.DoubleSide })
        );
        mesh.position.x = i * spacing - (text.length * spacing) / 2;
        bannerGroup.add(mesh);
      }
      bannerGroup.position.set(5, -1 + bi * 2.5, -8);
      bannerGroup.rotation.z = -Math.PI / 6;
      bannerGroup.rotation.y = -0.3;
      scene.add(bannerGroup);
    });

    // ── RAYCASTER ──
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    container.addEventListener("mousemove", handleMouseMove);

    // ── ANIMATION ──
    const clock = new THREE.Clock();
    let autoRotate = true;
    let autoRotateAngle = 0;
    let animId;

    controls.addEventListener("start", () => { autoRotate = false; });
    controls.addEventListener("end", () => { setTimeout(() => { autoRotate = true; }, 3000); });

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      clock.getDelta();

      if (autoRotate) {
        autoRotateAngle += 0.001;
        camera.position.x = Math.sin(autoRotateAngle) * 18;
        camera.position.z = Math.cos(autoRotateAngle) * 18;
        camera.position.y = 2 + Math.sin(t * 0.2) * 1;
        camera.lookAt(0, 0, 0);
      }

      avatarGroup.position.y = -1.2 + Math.sin(t * 1.5) * 0.15;
      avatarGroup.rotation.y = Math.sin(t * 0.5) * 0.2;

      cardGroups.forEach((card, i) => {
        const angle = (i / achievements.length) * Math.PI * 2 - Math.PI / 2 + t * 0.1;
        card.position.x = Math.cos(angle) * cardRadius;
        card.position.z = Math.sin(angle) * cardRadius;
        card.position.y = 0.5 + Math.sin(t * 0.8 + i) * 0.3;
        card.lookAt(0, 0.5, 0);
      });

      textRingGroup.rotation.y = t * 0.15;
      outerRing.scale.setScalar(1 + Math.sin(t * 2) * 0.02);
      outerRing.material.opacity = 0.5 + Math.sin(t * 3) * 0.3;

      const posArr = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += Math.sin(t + i * 0.1) * 0.002;
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particles.rotation.y = t * 0.02;

      pointLight1.position.x = Math.sin(t * 0.5) * 8;
      pointLight1.position.z = Math.cos(t * 0.5) * 8;
      pointLight2.position.x = Math.cos(t * 0.3) * 6;
      pointLight2.position.z = Math.sin(t * 0.3) * 6;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(cardGroups, true);
      if (intersects.length > 0) {
        let parent = intersects[0].object;
        while (parent.parent && !parent.userData.title) parent = parent.parent;
        if (parent.userData.title) {
          setHoveredCard({ title: parent.userData.title, score: parent.userData.score, subtitle: parent.userData.subtitle, hex: parent.userData.hex });
        }
      } else {
        setHoveredCard(null);
      }

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ── RESIZE ──
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">

      {/* Three.js Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full" />

      {/* Vertical Decorative Line */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

      {/* Side Text */}
      <div
        className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 text-[8px] text-white/20 tracking-[4px] uppercase whitespace-nowrap pointer-events-none"
        style={{ fontFamily: "Space Mono, monospace" }}
      >
        Atul Verma — Portfolio 2024
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 px-7 py-5 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10">
        <div className="flex items-center gap-2.5" style={{ fontFamily: "Space Mono, monospace" }}>
          <div className="w-6 h-6 border-2 border-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">
            ∞
          </div>
          <span className="text-white text-sm tracking-[3px] uppercase">AV</span>
        </div>
        <div
          className="flex flex-col gap-1 text-right text-[10px] text-white/40 tracking-[2px] uppercase"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          {["EMAIL", "LINKEDIN", "GITHUB", "RESUME"].map((link) => (
            <span key={link} className="hover:text-yellow-400 cursor-pointer transition-colors hidden md:block">
              {link}
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section — Left */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 max-w-xs z-10 pointer-events-none">
        <p
          className="text-[9px] text-yellow-400 tracking-[4px] uppercase mb-2"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          ⚡ B.Tech Student
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-none tracking-tight mb-1.5">
          ATUL<br />VERMA
        </h1>
        <p className="text-sm text-white/50 font-light tracking-wide mb-4 leading-relaxed">
          Uttaranchal University, Dehradun<br />
          GATE Qualified • JEE Mains Qualified
        </p>
        <div className="flex gap-5">
          {[
            { value: "10.0", label: "SGPA" },
            { value: "94%", label: "JEE Mains" },
            { value: "93%", label: "12th Board" },
            { value: "90%", label: "10th Board" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-bold text-yellow-400"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {stat.value}
              </div>
              <div
                className="text-[8px] text-white/30 tracking-[2px] uppercase mt-0.5"
                style={{ fontFamily: "Space Mono, monospace" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Card Info — Right */}
      <div
        className={`absolute right-7 top-1/2 -translate-y-1/2 max-w-[280px] w-full bg-[rgba(10,10,18,0.85)] border rounded-lg p-5 backdrop-blur-md z-10 transition-all duration-400 ${
          hoveredCard ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          borderColor: hoveredCard ? `${hoveredCard.hex}4d` : "rgba(255,204,0,0.15)",
        }}
      >
        <div
          className="text-[10px] text-yellow-400 tracking-[3px] uppercase mb-1"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          {hoveredCard?.title || "ACHIEVEMENT"}
        </div>
        <div
          className="text-4xl font-black text-white mb-1"
          style={{ color: hoveredCard?.hex || "#ffffff" }}
        >
          {hoveredCard?.score || "--"}
        </div>
        <div className="text-[11px] text-white/40 tracking-wide">
          {hoveredCard?.subtitle || "Hover over a card"}
        </div>
      </div>

      {/* Achievement Timeline Bars — Bottom Left */}
      <div className="absolute left-7 bottom-20 flex gap-2 items-end z-10 pointer-events-none">
        {timelineBars.map((h, i) => (
          <div
            key={i}
            className="w-1 rounded-sm opacity-40"
            style={{
              height: `${h * 0.5}px`,
              background: "linear-gradient(180deg, #ffcc00 0%, #ff6600 100%)",
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 px-7 py-5 flex justify-between items-end bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none">
        <span
          className="text-[8px] text-white/20 tracking-[2px]"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          © 2024 ATUL VERMA — ALL RIGHTS RESERVED
        </span>
        <span
          className="text-[9px] text-white/25 tracking-[2px] [writing-mode:vertical-lr] animate-pulse"
          style={{ fontFamily: "Space Mono, monospace" }}
        >
          DRAG TO EXPLORE ↓
        </span>
      </div>
    </div>
  );
}