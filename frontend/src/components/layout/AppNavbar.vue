<template>
    <nav class="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10 shadow-xl">
    <div class="container mx-auto px-6 h-16 flex items-center justify-between">
        <div class="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
        <span class="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          SCOUTECH
        </span>
        </div>

        <div class="hidden md:flex items-center space-x-10 text-sm font-medium">
            <a href="#" class="relative pb-1 text-gray-400 hover:text-white transition-all duration-300 group">
               Dashboard
              <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#" class="relative pb-1 text-gray-400 hover:text-white transition-all duration-300 group">
            Analysis
            <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a href="#" class="relative pb-1 text-gray-400 hover:text-white transition-all duration-300 group">
            PSL Data
            <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            </div>

            <button class="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold rounded-full shadow-[0_0_20px_rgba(168, 85, 247, 0.4)] hover:scale-105 active:scale-95 transition-all">
            LIVE UPDATES
            </button>
        </div>

    </nav>
</template>