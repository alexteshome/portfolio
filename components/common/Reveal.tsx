import { FC, ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

export const Reveal: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
      } ${className}`}
    >
      {children}
    </div>
  )
}
