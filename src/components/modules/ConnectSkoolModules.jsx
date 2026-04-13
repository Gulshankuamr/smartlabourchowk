
"use client";
import { useEffect, useRef, useState } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────
// Status values: "yes" | "no" | "basic" | "advanced" | "multi"
const modules = [
  {
    id: "platform",
    label: "Platform",
    icon: "☁️",
    features: [
      { name: "Cloud-Based Online System",                          next: "yes",      other: "yes"      },
      { name: "Secure & Reliable (99.78% Uptime) with 256-Bit Encryption", next: "yes", other: "basic" },
      { name: "No Physical Server Needed",                          next: "yes",      other: "no"       },
      { name: "Single Platform for all School Operations",          next: "yes",      other: "multi"    },
      { name: "Future-Ready Architecture",                          next: "yes",      other: "basic"    },
      { name: "Expert-Driven R&D for Continuous Innovation",        next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "support",
    label: "Support",
    icon: "🎧",
    features: [
      { name: "Dedicated Support Team",                             next: "yes",      other: "yes"      },
      { name: "Toll-Free, Email, and WhatsApp Support",             next: "yes",      other: "yes"      },
      { name: "In-App Ticketing System for Quick Issue Resolution",  next: "yes",      other: "basic"    },
      { name: "Continuous Training & Guidance",                     next: "yes",      other: "basic"    },
      { name: "QC-Assured Implementation",                          next: "yes",      other: "no"       },
      { name: "Comprehensive Knowledge Base & FAQs",                next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "common",
    label: "Common Features",
    icon: "⚙️",
    features: [
      { name: "Self-Configuration System with 24/7 Help Center Access", next: "yes",  other: "basic"    },
      { name: "Comprehensive Reports Across All Modules",           next: "yes",      other: "basic"    },
      { name: "Secure & Dedicated Allocation for Settings & Transactions", next: "yes", other: "basic"  },
    ],
  },
  {
    id: "admission",
    label: "Admission",
    icon: "🚪",
    features: [
      { name: "Multi-Tier Admission Process with Year-Round Sequence", next: "yes",   other: "basic"    },
      { name: "Walk-In & Online Admissions Assistance",             next: "yes",      other: "yes"      },
      { name: "Centralised Admissions Support for Multi-Branch Institutions", next: "yes", other: "no"  },
      { name: "Smart Follow-up and Lead Tracking",                  next: "yes",      other: "basic"    },
      { name: "Admission Counsellor Tracking",                      next: "yes",      other: "basic"    },
      { name: "Customised Admission Forms for Flexibility",         next: "yes",      other: "basic"    },
      { name: "Effective Bulk Admissions Upload for Efficiency",    next: "yes",      other: "no"       },
      { name: "Advance Fee Collection during Admission",            next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "fee",
    label: "Fee",
    icon: "💳",
    features: [
      { name: "Flexible Fee Structures",                            next: "yes",      other: "basic"    },
      { name: "Online & Offline Fee Collection",                    next: "yes",      other: "yes"      },
      { name: "Concessions, Fines & Adjustments",                   next: "yes",      other: "basic"    },
      { name: "Custom Receipts & Challans",                         next: "yes",      other: "basic"    },
      { name: "Multi-Bank Payment Split",                           next: "yes",      other: "no"       },
      { name: "Defaulter Tracking & Reminders",                     next: "yes",      other: "basic"    },
      { name: "Refund Processing",                                  next: "yes",      other: "basic"    },
      { name: "Sibling Discounts Management",                       next: "yes",      other: "basic"    },
      { name: "45+ Fee Reports",                                    next: "yes",      other: "basic"    },
      { name: "Integration with Accounts & Payroll",                next: "yes",      other: "no"       },
    ],
  },
  {
    id: "transport",
    label: "Transport",
    icon: "🚌",
    features: [
      { name: "Multi-Route Management",                             next: "yes",      other: "basic"    },
      { name: "GPS Tracking Integration",                           next: "yes",      other: "advanced" },
      { name: "NFC Attendance on Bus",                              next: "yes",      other: "no"       },
      { name: "Fuel & Maintenance Logs",                            next: "yes",      other: "basic"    },
      { name: "Parent Notifications for Bus Tracking",              next: "yes",      other: "basic"    },
      { name: "Unified Transport App",                              next: "yes",      other: "multi"    },
    ],
  },
  {
    id: "accounts",
    label: "Accounts",
    icon: "📊",
    features: [
      { name: "Chart of Accounts (COA)",                            next: "yes",      other: "basic"    },
      { name: "Voucher Management",                                 next: "yes",      other: "basic"    },
      { name: "Daybook & P&L Reports",                              next: "yes",      other: "basic"    },
      { name: "Tally Integration",                                  next: "yes",      other: "no"       },
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    icon: "💰",
    features: [
      { name: "Custom Salary Structure",                            next: "yes",      other: "basic"    },
      { name: "Attendance-Linked Payroll",                          next: "yes",      other: "basic"    },
      { name: "PF & ESIC Automation",                               next: "yes",      other: "no"       },
      { name: "Salary Lock System",                                 next: "yes",      other: "no"       },
      { name: "Payslip Generation",                                 next: "yes",      other: "basic"    },
      { name: "Loan & Advance Tracking",                            next: "yes",      other: "basic"    },
      { name: "Full & Final Settlement",                            next: "yes",      other: "no"       },
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    icon: "📦",
    features: [
      { name: "Asset & Service Management",                         next: "yes",      other: "basic"    },
      { name: "Multi-Store Handling",                               next: "yes",      other: "no"       },
      { name: "Purchase to Payment Tracking",                       next: "yes",      other: "basic"    },
      { name: "Sales & Returns Management",                         next: "yes",      other: "basic"    },
      { name: "Stock Transfers & Adjustments",                      next: "yes",      other: "basic"    },
      { name: "School Kit Management",                              next: "yes",      other: "no"       },
      { name: "Item Tracking System",                               next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "examination",
    label: "Examination",
    icon: "📝",
    features: [
      { name: "Smart Academic Management",                          next: "yes",      other: "basic"    },
      { name: "Custom Grading System",                              next: "yes",      other: "basic"    },
      { name: "Instant Report Cards",                               next: "yes",      other: "basic"    },
      { name: "100+ Report Card Templates",                         next: "yes",      other: "no"       },
      { name: "Automated Supplementary Exams",                      next: "yes",      other: "no"       },
      { name: "Year-wise Performance Tracking",                     next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "communication",
    label: "Communication",
    icon: "💬",
    features: [
      { name: "SMS / Email / WhatsApp / Push Notifications",        next: "yes",      other: "basic"    },
      { name: "DLT Enabled Messaging",                              next: "yes",      other: "no"       },
      { name: "Smart Compose with 100+ Templates",                  next: "yes",      other: "basic"    },
      { name: "Custom Forms Builder",                               next: "yes",      other: "no"       },
      { name: "Surveys & Feedback System",                          next: "yes",      other: "basic"    },
      { name: "Route-Based Messaging",                              next: "yes",      other: "no"       },
    ],
  },
  {
    id: "student",
    label: "Student",
    icon: "🎓",
    features: [
      { name: "360° Student Profile (Academic + Personal)",         next: "yes",      other: "basic"    },
      { name: "QR/Barcode ID Cards",                                next: "yes",      other: "basic"    },
      { name: "Document Storage",                                   next: "yes",      other: "basic"    },
      { name: "Discipline & Incident Tracking",                     next: "yes",      other: "no"       },
      { name: "Wellness Records",                                   next: "yes",      other: "no"       },
      { name: "Sibling Mapping",                                    next: "yes",      other: "no"       },
    ],
  },
  {
    id: "staff",
    label: "Staff",
    icon: "👩‍🏫",
    features: [
      { name: "360° Staff Profile",                                 next: "yes",      other: "basic"    },
      { name: "Barcode ID Cards",                                   next: "yes",      other: "basic"    },
      { name: "HRMS Portal",                                        next: "yes",      other: "no"       },
      { name: "Competency Mapping",                                 next: "yes",      other: "no"       },
      { name: "Hierarchy Management",                               next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    icon: "📋",
    features: [
      { name: "Mobile-Based Attendance",                            next: "yes",      other: "basic"    },
      { name: "Biometric / RFID / Gate Integration",                next: "yes",      other: "advanced" },
      { name: "Geo-Facial Attendance",                              next: "yes",      other: "no"       },
      { name: "Period-Wise Tracking",                               next: "yes",      other: "basic"    },
      { name: "Automated Calculations",                             next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "leave",
    label: "Leave",
    icon: "🏖️",
    features: [
      { name: "Custom Leave Policies",                              next: "yes",      other: "basic"    },
      { name: "Leave Encashment",                                   next: "yes",      other: "no"       },
      { name: "App-Based Approval System",                          next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "frontoffice",
    label: "Front Office",
    icon: "🏢",
    features: [
      { name: "Visitor Management",                                 next: "yes",      other: "basic"    },
      { name: "OTP-Based Entry/Exit",                               next: "yes",      other: "no"       },
      { name: "Security Guard Mobile App",                          next: "yes",      other: "no"       },
    ],
  },
  {
    id: "library",
    label: "Library",
    icon: "📚",
    features: [
      { name: "Barcode-Based Book Management",                      next: "yes",      other: "basic"    },
      { name: "Issue & Return Tracking",                            next: "yes",      other: "basic"    },
      { name: "ISBN Auto Fetch",                                    next: "yes",      other: "no"       },
      { name: "Online Library Access",                              next: "yes",      other: "no"       },
    ],
  },
  {
    id: "timetable",
    label: "Timetable",
    icon: "📅",
    features: [
      { name: "Auto & Manual Timetable Generation",                 next: "yes",      other: "basic"    },
      { name: "aSc Integration",                                    next: "yes",      other: "no"       },
      { name: "Proxy / Substitution Management",                    next: "yes",      other: "no"       },
      { name: "Permanent & Adhoc Adjustments",                      next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "projectmgmt",
    label: "Project Management",
    icon: "📌",
    features: [
      { name: "Task Management",                                    next: "yes",      other: "basic"    },
      { name: "Project Tracking",                                   next: "yes",      other: "basic"    },
      { name: "Role Assignment",                                    next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "ticketmgmt",
    label: "Ticket Management",
    icon: "🎫",
    features: [
      { name: "Complaint Management",                               next: "yes",      other: "basic"    },
      { name: "Issue Tracking",                                     next: "yes",      other: "basic"    },
      { name: "Feedback System",                                    next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "addon",
    label: "Add-On Integration",
    icon: "🔌",
    features: [
      { name: "RFID / Biometric / Face Recognition",                next: "yes",      other: "advanced" },
      { name: "GPS Tracking Integration",                           next: "yes",      other: "advanced" },
      { name: "Payment Gateway Integration",                        next: "yes",      other: "basic"    },
      { name: "Tally Integration",                                  next: "yes",      other: "no"       },
      { name: "Geo-Facial Attendance",                              next: "yes",      other: "no"       },
    ],
  },
  {
    id: "nextassessment",
    label: "NextAssessment",
    icon: "🧠",
    features: [
      { name: "6.5L+ Question Bank",                                next: "yes",      other: "no"       },
      { name: "Assessment Generator",                               next: "yes",      other: "basic"    },
      { name: "Adaptive Testing",                                   next: "yes",      other: "no"       },
      { name: "Online Proctoring",                                  next: "yes",      other: "advanced" },
      { name: "Evaluation System",                                  next: "yes",      other: "basic"    },
      { name: "Analytics Dashboard",                                next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "workspace",
    label: "Teacher & Student Workspace",
    icon: "💻",
    features: [
      { name: "Course & Lesson Planning",                           next: "yes",      other: "basic"    },
      { name: "Resource Library",                                   next: "yes",      other: "basic"    },
      { name: "Homework Tracking",                                  next: "yes",      other: "basic"    },
      { name: "Live Classes (Meet, Zoom, Teams)",                   next: "yes",      other: "multi"    },
      { name: "Auto Lecture Recording",                             next: "yes",      other: "no"       },
      { name: "SCORM / LTI / G-Suite Integration",                  next: "yes",      other: "no"       },
      { name: "Q&A Forum",                                          next: "yes",      other: "basic"    },
      { name: "Academic Reports",                                   next: "yes",      other: "basic"    },
    ],
  },
  {
    id: "teachnext",
    label: "TeachNext",
    icon: "🎯",
    features: [
      { name: "Interactive AV Content",                             next: "yes",      other: "no"       },
      { name: "Lesson Plans & Simulations",                         next: "yes",      other: "no"       },
      { name: "E-Books & Digital Whiteboard",                       next: "yes",      other: "basic"    },
      { name: "Anatomy Visualizer",                                 next: "yes",      other: "no"       },
      { name: "Scientific Tools & Graph Plotter",                   next: "yes",      other: "no"       },
      { name: "NextMaps & Phonetics Trainer",                       next: "yes",      other: "no"       },
      { name: "Office Tools Integration",                           next: "yes",      other: "multi"    },
    ],
  },
];

// ── STATUS DOT ────────────────────────────────────────────────────────────────
const statusConfig = {
  yes:      { bg: "bg-emerald-500",  label: "Available"       },
  no:       { bg: "bg-rose-400",     label: "Not Available"   },
  basic:    { bg: "bg-amber-500",    label: "Basic Version"   },
  advanced: { bg: "bg-sky-500",      label: "Advanced Version"},
  multi:    { bg: "bg-violet-500",   label: "Multiple Apps"   },
};

function Dot({ status }) {
  const cfg = statusConfig[status] || statusConfig.no;
  return (
    <span
      className={`inline-block w-2.5 h-2.5 rounded-full ${cfg.bg} shadow-sm`}
      title={cfg.label}
    />
  );
}

// ── SECTION TABLE ──
function ModuleSection({ mod }) {
  return (
    <div id={`section-${mod.id}`} className="mb-8 scroll-mt-20">
      {/* Section header */}
      <div className="flex items-center gap-2.5 mb-4 pb-1 border-b border-amber-200/50">
        <span className="text-3xl">{mod.icon}</span>
        <h2 className="text-base font-bold text-[#f0970a] tracking-tight">
          {mod.label}
        </h2>
        <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full ml-2">
          {mod.features.length}
        </span>
      </div>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-amber-100 bg-white shadow-sm">
        {/* Table header */}
        <div className="grid grid-cols-[1fr_90px_90px] bg-amber-50/80 border-b border-amber-100">
          <div className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider">
            Feature Name
          </div>
          <div className="px-3 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">
            ConnectSkool
          </div>
          {/* <div className="px-3 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider text-center">
              Others
          </div> */}
        </div>

        {/* Rows */}
        {mod.features.map((feat, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_90px_90px] border-b border-amber-50 last:border-0 transition-colors ${
              i % 2 === 0 ? "bg-white" : "bg-amber- 0/30"
            } hover:bg-amber-50/60`}
          >
            <div className="px-4 py-2.5 text-[13px] text-gray-700 flex items-center">
              {feat.name}
            </div>
            <div className="px-3 py-2.5 flex items-center justify-center">
              <Dot status={feat.next} />
            </div>
            <div className="px-3 py-2.5 flex items-center justify-center">
              {/* <Dot status={feat.other} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── MAIN COMPONENT ──
export default function ConnectSkoolModules() {
  const [activeId, setActiveId] = useState(modules[0].id);
  const contentRef = useRef(null);
  const sidebarRef = useRef(null);
  const isClickScrolling = useRef(false);

  // Scroll spy — tracks which section is in view
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isClickScrolling.current) return;

      let current = modules[0].id;
      let minDistance = Infinity;
      const scrollTop = container.scrollTop;
      
      for (const mod of modules) {
        const el = document.getElementById(`section-${mod.id}`);
        if (!el) continue;
        const offsetTop = el.offsetTop;
        const distance = Math.abs(offsetTop - scrollTop);
        if (distance < minDistance) {
          minDistance = distance;
          current = mod.id;
        }
      }
      setActiveId(current);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep active sidebar item visible
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const activeBtn = sidebar.querySelector(`[data-id="${activeId}"]`);
    if (activeBtn) {
      activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeId]);

  // Click sidebar → smooth scroll to section
  const scrollTo = (id) => {
    const container = contentRef.current;
    const el = document.getElementById(`section-${id}`);
    if (!container || !el) return;

    isClickScrolling.current = true;
    setActiveId(id);

    container.scrollTo({
      top: el.offsetTop - 24,
      behavior: "smooth"
    });

    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  const totalFeatures = modules.reduce((s, m) => s + m.features.length, 0);

  return (
    <div className="min-h-screen bg-[#F7F8FB] font-['Inter',system-ui,sans-serif]">
      {/* Header */}
     <header className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
  <div className="max-w-7xl mx-auto px-6 py-6 text-center">

    {/* Heading */}
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
      ConnectSkool <span className="text-[#F0A80A]">ERP</span>
    </h1>

    {/* Tagline */}
    <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
      and 200+ Curated Features — All in One Unified Platform.
    </p>

    {/* Stats */}
    <div className="flex justify-center items-center gap-3 mt-4 text-xs text-gray-400 bg-gray-50 px-4 py-2 rounded-full w-fit mx-auto">
      <span className="font-medium text-gray-600">{totalFeatures} features</span>
      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
      <span>{modules.length} modules</span>
    </div>

    {/* Legend */}
   

  </div>
</header>

      {/* Main 2-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* LEFT SIDEBAR — sticky + independent scroll */}
          <aside
            ref={sidebarRef}
            className="w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-120px)] overflow-y-auto rounded-xl bg-[#F8F9FC] border border-gray-100 shadow-sm"
          >
            <div className="p-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 pt-2 pb-3">
                Module Names
              </div>
              <nav className="space-y-0.5">
                {modules.map((mod) => {
                  const isActive = activeId === mod.id;
                  return (
                    <button
                      key={mod.id}
                      data-id={mod.id}
                      onClick={() => scrollTo(mod.id)}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-left transition-all duration-200 text-sm font-medium ${
                        isActive
                          ? "bg-amber-100 text-amber-800 shadow-sm ring-1 ring-amber-200"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <span className="text-lg leading-none">{mod.icon}</span>
                      <span className="leading-tight">{mod.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* RIGHT CONTENT — scrollable area */}
          <main
            ref={contentRef}
            className="flex-1 overflow-y-auto h-[calc(100vh-120px)] pr-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="bg-[#204E6C] rounded-xl border border-amber-100 p-6 shadow-sm">
              {modules.map((mod) => (
                <ModuleSection key={mod.id} mod={mod} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}