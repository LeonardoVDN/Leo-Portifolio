import { useCallback, useEffect, useState } from 'react'

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
}: UseScrollRevealOptions = {}) {
  const [element, setElement] = useState<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  const ref = useCallback((node: HTMLElement | null) => {
    setElement(node)
  }, [])

  useEffect(() => {
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [element, threshold, rootMargin])

  return [ref, isVisible] as const
}
