import { type ReactNode } from 'react'

type SectionCardProps = {
  title: string
  description?: string
  children: ReactNode
  id?: string
  caption?: string
}

export default function SectionCard({ title, description, children, id, caption }: SectionCardProps) {
  return (
    <section
      id={id}
      className="rounded-3xl border border-white/70 bg-redefine-card/95 p-6 shadow-[0_8px_28px_rgba(70,55,39,0.08)] backdrop-blur-[2px] sm:p-10"
    >
      {caption && (
        <p className="mb-3 inline-flex rounded-full bg-[#eef5f1] px-3 py-1 text-xs font-semibold tracking-[0.08em] text-redefine-green">
          {caption}
        </p>
      )}
      <h2 className="text-2xl font-bold text-redefine-text sm:text-3xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-stone-700">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}
