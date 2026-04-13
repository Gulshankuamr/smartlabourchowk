import { useState } from 'react'
import Link from 'next/link'

// ─── Filtered Data (Top Only) ────────────────────────────────────────────────

const academics = [
  { label: 'Attendance Tracking',          path: '/features/attendance' },
  { label: 'Exams & Results',              path: '/features/exams' },
  { label: 'Timetable Management',         path: '/features/timetable' },
  { label: 'Student Performance Tracking', path: '/features/performance' },
  { label: 'Online Exams',                 path: '/features/online-exams' },
]

const admins = [
  { label: 'Fee Management',                path: '/features/fee' },
  { label: 'Admission Workflow',            path: '/features/admission' },
  { label: 'Communication System',          path: '/features/communication' },
  { label: 'Data Analytics',                path: '/features/analytics' },
  { label: 'QR Code Document Verification', path: '/features/qr', badge: 'Hot' },
]

// Icons matched to specific labels
const academicIcons = [
  <svg key="att"  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="exam" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  <svg key="tt"   width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
  <svg key="perf" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  <svg key="oe"   width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1D9E75" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
]

const adminIcons = [
  <svg key="fee"   width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  <svg key="adm"   width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>,
  <svg key="comm"  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  <svg key="anal"  width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  <svg key="qr"    width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#534AB7" strokeWidth="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
]

// ─── Single item ──────────────────────────────────────────────────────────────

function Item({ item, icon, badgeColor, onClick }) {
  const [hovered, setHovered] = useState(false)
  return (
    <li>
      <Link
        href={item.path}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '7px 8px',
          fontSize: 13.5,
          color: '#111',
          textDecoration: 'none',
          borderRadius: 7,
          background: hovered ? '#f5f5f5' : 'transparent',
          transition: 'background 0.12s',
        }}
      >
        {icon}
        {item.label}
        {item.badge && (
          <span style={{
            marginLeft: 'auto',
            fontSize: 10,
            fontWeight: 600,
            padding: '2px 7px',
            borderRadius: 99,
            background: badgeColor === 'teal' ? '#E1F5EE' : '#EEEDFE',
            color:      badgeColor === 'teal' ? '#0F6E56'  : '#534AB7',
          }}>
            {item.badge}
          </span>
        )}
      </Link>
    </li>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function FeatureDropdownComponent({ mobileMode = false, onClose }) {
  const panelStyle = mobileMode
    ? { background: '#fff', padding: '16px', display: 'flex', flexDirection: 'column', gap: 24 }
    : {
        background: '#fff',
        border: '0.5px solid rgba(0,0,0,0.10)',
        borderRadius: 14,
        boxShadow: '0 12px 40px rgba(0,0,0,0.10)',
        padding: '22px 24px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0 28px',
        minWidth: 560,
      }

  const sectionLabel = {
    fontSize: 11, fontWeight: 600, letterSpacing: '0.07em',
    textTransform: 'uppercase', color: '#999', marginBottom: 10, marginTop: 0,
  }

  const dividerStyle = mobileMode
    ? { borderTop: '0.5px solid rgba(0,0,0,0.08)', paddingTop: 16 }
    : { borderLeft: '0.5px solid rgba(0,0,0,0.08)', paddingLeft: 28 }

  return (
    <div style={panelStyle}>
      <div>
        <p style={sectionLabel}>For Academics</p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {academics.map((item, i) => (
            <Item key={item.path} item={item} icon={academicIcons[i]} badgeColor="teal" onClick={onClose} />
          ))}
        </ul>
      </div>
      <div style={dividerStyle}>
        <p style={sectionLabel}>For Admin</p>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {admins.map((item, i) => (
            <Item key={item.path} item={item} icon={adminIcons[i]} badgeColor="purple" onClick={onClose} />
          ))}
        </ul>
      </div>
    </div>
  )
}