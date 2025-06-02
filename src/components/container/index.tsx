import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 pt-20 fadeIn">
      {children}
    </section>
  )
}
