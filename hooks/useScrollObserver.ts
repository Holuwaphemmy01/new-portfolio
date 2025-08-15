import { useEffect, useRef } from "react"

export default function useScrollObserver() {
  const ref = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    ref.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => ref.current?.observe(el))

    return () => ref.current?.disconnect()
  }, [])
}