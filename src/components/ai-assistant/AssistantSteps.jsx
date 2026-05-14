'use client'

export default function AssistantSteps({ stage }) {
  const steps = [
    { key: 'ask_name', label: 'Name' },
    { key: 'ask_role', label: 'Role' },
    { key: 'role_flow', label: 'Guide' },
    { key: 'feedback', label: 'Feedback' },
  ]

  const activeIndex = Math.max(0, steps.findIndex((s) => s.key === stage))

  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {steps.map((step, i) => (
        <div
          key={step.key}
          className={`rounded-full px-3 py-1 text-[11px] font-bold ${
            i <= activeIndex ? 'bg-[#FF6B00] text-white' : 'bg-white text-neutral-500 ring-1 ring-neutral-200'
          }`}
        >
          {step.label}
        </div>
      ))}
    </div>
  )
}

