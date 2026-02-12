'use client';

import { Crown, TrendingUp, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const topContributors = [
  { name: 'Sarah Chen', stars: 15234, avatar: 'SC' },
  { name: 'Marcus Silva', stars: 12891, avatar: 'MS' },
  { name: 'Alex Kim', stars: 11456, avatar: 'AK' },
  { name: 'Julia Souza', stars: 10223, avatar: 'JS' },
  { name: 'David Park', stars: 9876, avatar: 'DP' },
];

export default function RightSidebar() {
  return (
    <aside className="hidden xl:block w-80 fixed right-0 top-16 bottom-0 pt-6 px-4 overflow-y-auto">
      {/* Top Contributors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-4 mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-[#fbbf24]" strokeWidth={2} />
          <h3 className="font-semibold text-sm">Top Contribuidores</h3>
        </div>
        <ul className="space-y-3">
          {topContributors.map((user, index) => (
            <motion.li
              key={user.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#18181b] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2 flex-1">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center text-xs font-semibold text-white">
                  {user.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-200 truncate">
                    {user.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-[#fbbf24] fill-[#fbbf24]" strokeWidth={2} />
                    <span className="text-xs text-gray-400">
                      {user.stars.toLocaleString('en-US')}
                    </span>
                  </div>
                </div>
              </div>
              <span className="text-xs font-semibold text-gray-500">
                #{index + 1}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Promotional Widget */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="gradient-purple rounded-xl p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16" />
        <div className="relative z-10">
          <TrendingUp className="w-8 h-8 text-white mb-3" strokeWidth={2} />
          <h3 className="text-lg font-bold text-white mb-2">
            Promova seu Projeto
          </h3>
          <p className="text-sm text-purple-100 mb-4">
            Use suas estrelas para destacar seus repositórios e alcançar mais desenvolvedores.
          </p>
          <button className="w-full px-4 py-2 bg-white text-[#8b5cf6] rounded-lg font-medium text-sm hover:bg-opacity-90 transition-opacity">
            Começar Agora
          </button>
        </div>
      </motion.div>
    </aside>
  );
}
