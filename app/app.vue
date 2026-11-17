<template>
  <VueLenis root :auto-raf="false" :options="lenisOptions">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#d9a441" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </VueLenis>
</template>

<script setup lang="ts">
import { useLenis, VueLenis } from 'lenis/vue'

const lenisOptions = {
  autoRaf: false,
  anchors: true,
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
  lerp: 0.09,
}

const lenis = useLenis()
const router = useRouter()
let stopTicker: (() => void) | null = null

watch(lenis, (instance) => {
  stopTicker?.()
  stopTicker = null
  if (!instance) return

  let cancelled = false
  void (async () => {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    if (cancelled) return
    gsap.registerPlugin(ScrollTrigger)
    const update = () => ScrollTrigger.update()
    instance.on('scroll', update)
    const tick = (time: number) => instance.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    stopTicker = () => {
      cancelled = true
      instance.off('scroll', update)
      gsap.ticker.remove(tick)
    }
  })()
}, { immediate: true })

onUnmounted(() => stopTicker?.())

router.afterEach((to, from) => {
  if (to.path === from.path || to.hash) return
  lenis.value?.scrollTo(0, { immediate: true })
})
</script>
