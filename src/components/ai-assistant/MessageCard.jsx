'use client'

export default function MessageCard({ options = [], onChoose }) {
  if (!options.length) return null

  return (
    <div className="ml-11 mt-2 flex flex-wrap gap-2">
      {options.map((opt) => {
        if (opt.action === 'link') {
          return (
            <a
              key={opt.label}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#FF9A00] px-3 py-2 text-xs font-bold text-white shadow-md transition hover:brightness-105"
            >
              {opt.label}
            </a>
          )
        }

        return (
          <button
            key={opt.label}
            type="button"
            onClick={() => onChoose(opt)}
            className="rounded-xl bg-white px-3 py-2 text-xs font-bold text-[#FF6B00] ring-1 ring-[#FF6B00]/25 transition hover:bg-[#FFF7F2]"
          >
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}

