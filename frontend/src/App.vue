<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'

const matches = ref([])

const getDataFromBackend = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/matches')
    matches.value = response.data
    console.log("Data received:", matches.value)
  } catch (error) {
    console.error("The backend is ignoring me!", error)
  }
}

onMounted(() => {
  getDataFromBackend()
})
</script>

<template>
<div class="min-h-screen bg-[#0a0a0a] flex flex-col selection:bg-purple-500/30">
  <AppNavbar />

  <AppFooter/>
</div>
</template>
