<script setup>
 defineProps({
    match: Object
 })
</script>

<template>
    <div class="bg-[#121212] border border-white/5 rounded-2xl 
         p-6 hover:border-purple-500/40 transition-all group">

       <div class="flex justify-between items-start mb-6">

        <span class="text-[10px] font-bold tracking-widest text-
         purple-400 bg-purple-500/10 px-2 rounded uppercase">
           {{ match.league }}
        </span>

        <div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
       </div>

       <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-gray-100">{{ match.homeTeam }}</span>
            <span class="text-2xl font-black text-purple-500 font-mono">
              {{ match.homeXG?.toFixed(2) ?? '0.00' }}
            </span>
          </div>

          <div class="flex justify-between items-center">
            <span class="text-lg font-semibold text-gray-100">{{ match.awayTeam }}</span>
            <span class="text-2xl font-black text-gray-400 font-mono">
              {{ match.awayXG?.toFixed(2) ?? '0.00' }}
            </span>
            </div>
          </div>
        
        <div class="mt-8 pt-4 border-t border-white/5">
          <button class="w-full py-2 rounded-lg bg-white/5 hover:bg-white/10 
            text-xs font-medium text-gray-400 hover:text-white transition-all">
            Analyze Match
          </button>
        </div>

    </div>
</template>