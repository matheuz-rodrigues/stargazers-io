'use client';

import { Search, Star, Plus, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-[#27272a]"
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-purple flex items-center justify-center">
            <Star className="w-5 h-5 text-[#fbbf24] fill-[#fbbf24]" strokeWidth={2} />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
            Stargazers.io
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
            <input
              type="text"
              placeholder="Buscar projetos, desenvolvedores, tags..."
              className="w-full h-10 pl-11 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Star Counter */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#18181b] rounded-lg border border-[#27272a]">
            <Star className="w-4 h-4 text-[#fbbf24] fill-[#fbbf24]" strokeWidth={2} />
            <span className="text-sm font-semibold text-[#fbbf24]">1,247</span>
          </div>

          {/* Create Post Button */}
          <button className="flex items-center gap-2 px-4 py-2 gradient-purple rounded-lg text-white font-medium text-sm hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" strokeWidth={2} />
            Criar Post
          </button>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center cursor-pointer hover:ring-2 ring-[#8b5cf6] transition-all">
            <User className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
