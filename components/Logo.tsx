'use client'

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="8" fill="#00ABA8" />
        <line x1="50" y1="42" x2="50" y2="10" stroke="#00ABA8" strokeWidth="2" />
        <circle cx="50" cy="8" r="4" fill="#00ABA8" />
        <line x1="50" y1="42" x2="20" y2="20" stroke="#00ABA8" strokeWidth="2" />
        <circle cx="18" cy="18" r="4" fill="#00ABA8" />
        <line x1="50" y1="42" x2="80" y2="20" stroke="#00ABA8" strokeWidth="2" />
        <circle cx="82" cy="18" r="4" fill="#00ABA8" />
        <line x1="50" y1="42" x2="15" y2="45" stroke="#00ABA8" strokeWidth="2" />
        <circle cx="13" cy="45" r="4" fill="#00ABA8" />
        <line x1="50" y1="42" x2="85" y2="45" stroke="#00ABA8" strokeWidth="2" />
        <circle cx="87" cy="45" r="4" fill="#00ABA8" />
        <line x1="50" y1="58" x2="50" y2="95" stroke="#00ABA8" strokeWidth="3" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span style={{ fontStyle: 'italic', fontSize: '1.4rem', color: '#2D2D2D', lineHeight: 1.1 }}>airflow</span>
        <span style={{ fontSize: '0.9rem', color: '#00ABA8', fontWeight: 700, lineHeight: 1.1 }}>Fachpflegedienst</span>
      </div>
    </div>
  )
}
