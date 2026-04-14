<script setup>
import { ref, onMounted } from 'vue'
import { matchService } from '../services/matchService' 
import MatchTicket from '../components/matches/MatchTicket.vue'

const matches = ref([])
const loading = ref(true)

const loadMatches = async () => {
    try {
        matches.value = await matchService.getMatches()
    } catch (error) {
        errorMessage.value = "We're having trouble reaching the scouts. Please try again later."
    } finally {
        loading.value = false
    }
}

onMounted(loadMatches)
</script>
<template>
    <main class="flex-grow container mx-auto px-6 py-10">
     <div class="mb-10">
        <h1 class="text-3xl font-bold text-white tracking-tight">
           PSL <span class="text-purple-500">Value Picks</span>
        </h1>
        <p class="text-gray-400 mt-2 font-mono text-sm uppercase tracking-widest">
            Live from MongoDB Atlas
        </p>
     </div>

    <div v-if="loading" class="flex justify-center items-center h-64">
         <div class="animate-spin rounded-full h-10 w-10 border-t-2 border-purple-500"></div>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <MatchTicket
        v-for="match in matches"
        :key="match._id"
        :match="match"
        />
    </div>
    </main>
</template>