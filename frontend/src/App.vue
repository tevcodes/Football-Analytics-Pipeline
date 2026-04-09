<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import Dashboard from './views/DashboardView.vue'
</script>

<template>
<div class="min-h-screen bg-[#0a0a0a] flex flex-col selection:bg-purple-500/30">
  <AppNavbar />
  <Dashboard />
  <AppFooter/>
</div>
</template>
