export function useScrollReveal(root: Ref<HTMLElement | null>) {
  let context: { revert: () => void } | null = null

  onMounted(async () => {
    if (!root.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    context = gsap.context(() => {
      const groups = gsap.utils.toArray<HTMLElement>('[data-reveal-group]')

      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>('[data-reveal]')
        if (!items.length) return

        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.07,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 84%',
            once: true,
          },
          onComplete() {
            gsap.set(items, { clearProps: 'opacity,transform' })
          },
        })
      })
    }, root.value)
  })

  onUnmounted(() => {
    context?.revert()
  })
}
