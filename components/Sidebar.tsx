'use client';

import { Home, TrendingUp, Clock, Bookmark, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navItems = [
  { icon: Home, label: 'Feed', active: true },
  { icon: TrendingUp, label: 'Em Alta', active: false },
  { icon: Clock, label: 'Recentes', active: false },
  { icon: Bookmark, label: 'Salvos', active: false },
];

const popularTags = [
  'react',
  'typescript',
  'nextjs',
  'python',
  'machine-learning',
  'web3',
  'devops',
  'mobile',
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-64 fixed left-0 top-16 bottom-0 pt-6 px-4 overflow-y-auto">
      {/* Navigation */}
      <nav className="mb-8">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Navegação
        </h3>
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href="#"
                className={clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all',
                  item.active
                    ? 'bg-[#8b5cf6] bg-opacity-10 text-white font-medium'
                    : 'text-gray-400 hover:bg-[#18181b] hover:text-gray-200'
                )}
              >
                <item.icon className="w-5 h-5" strokeWidth={2} />
                <span className="text-sm">{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Popular Tags */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Hash className="w-3.5 h-3.5" strokeWidth={2} />
          Tags Populares
        </h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <motion.button
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] rounded-md text-xs text-gray-300 hover:border-[#8b5cf6] hover:text-[#8b5cf6] transition-all"
            >
              #{tag}
            </motion.button>
          ))}
        </div>
      </div>
    </aside>
  );
}
