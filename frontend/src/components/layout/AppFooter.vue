<template>
    <footer class="w-full bg-[#050505] border-t border-white/5 py-10 mt-auto">
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h3 class="text-white font-bold mb-4 italic text-lg">Scoutech Analysis</h3>
                     <p class="text-gray-500 text-sm leading-relaxed">
                        Advanced PSL data metrics and value-pick identification for professional football scouting.
                     </p>
                </div>

                <div class="md:text-center">
                    <h4 class="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-widest">Platform</h4>
                     <ul class="text-gray-500 text-sm space-y-2">
                        <li><a href="#" class="hover:text-purple-400">Documentation</a></li>
                        <li><a href="#" class="hover:text-purple-400">API Status</a></li>
                     </ul>
                </div>

                <div class="md:text-right flex flex-col items-end">
                    <h4 class="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-widest">Status</h4>
                    <div class="flex items-center space-x-2 text-green-500 text-xs">
                        <span class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>MongoDB Connected</span>
                    </div>
                </div>
            </div>

            <div class="pt-8 border-t border-white/5 text-center">
                <p class="text-gray-600 text-[10px] uppercase tracking-tighter">
                 &copy; 2026 Tevin Dirks | Full-Stack Cloud Architect Portfolio
                </p>
            </div>
        </div>
    </footer>
</template>