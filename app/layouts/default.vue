<template>
  <div class="flex min-h-screen flex-col overflow-x-clip bg-cream">
    <a href="#main" class="skip-link">Skip to content</a>
    <AppNavbar />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
