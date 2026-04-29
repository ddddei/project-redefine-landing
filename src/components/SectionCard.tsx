import { type ReactNode } from 'react'

type SectionCardProps = {
  title: string
  description?: string
  children: ReactNode
  id?: string
}

export default function SectionCard({ title, description, children, id }: SectionCardProps) {
  return (
    <section id={id} className="rounded-3xl bg-redefine-card p-6 shadow-card sm:p-10">
      <h2 className="text-2xl font-bold text-redefine-text sm:text-3xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-stone-700">{description}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}
