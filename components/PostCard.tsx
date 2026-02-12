'use client';

import { ArrowUp, ArrowDown, MessageCircle, Share2, Bookmark, Star, GitFork } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import clsx from 'clsx';

interface PostCardProps {
  title: string;
  description: string;
  repoName: string;
  repoLanguage: string;
  repoStars: number;
  repoForks: number;
  tags: string[];
  votes: number;
  comments: number;
  author: string;
  timeAgo: string;
}

export default function PostCard({
  title,
  description,
  repoName,
  repoLanguage,
  repoStars,
  repoForks,
  tags,
  votes,
  comments,
  author,
  timeAgo,
}: PostCardProps) {
  const [voteState, setVoteState] = useState<'up' | 'down' | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-xl p-5 hover:border-[#8b5cf6] hover:border-opacity-30 transition-all"
    >
      <div className="flex gap-4">
        {/* Vote Section */}
        <div className="flex flex-col items-center gap-1">
          <button
            onClick={() => setVoteState(voteState === 'up' ? null : 'up')}
            className={clsx(
              'p-1.5 rounded-md transition-all',
              voteState === 'up'
                ? 'bg-[#8b5cf6] text-white'
                : 'text-gray-400 hover:bg-[#18181b] hover:text-[#8b5cf6]'
            )}
          >
            <ArrowUp className="w-5 h-5" strokeWidth={2} />
          </button>
          <span
            className={clsx(
              'text-sm font-semibold',
              voteState === 'up'
                ? 'text-[#8b5cf6]'
                : voteState === 'down'
                ? 'text-red-500'
                : 'text-gray-300'
            )}
          >
            {votes + (voteState === 'up' ? 1 : voteState === 'down' ? -1 : 0)}
          </span>
          <button
            onClick={() => setVoteState(voteState === 'down' ? null : 'down')}
            className={clsx(
              'p-1.5 rounded-md transition-all',
              voteState === 'down'
                ? 'bg-red-500 text-white'
                : 'text-gray-400 hover:bg-[#18181b] hover:text-red-500'
            )}
          >
            <ArrowDown className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
            <span className="font-medium text-gray-300 hover:text-[#8b5cf6] cursor-pointer">
              {author}
            </span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>

          {/* Title & Description */}
          <h2 className="text-lg font-semibold text-gray-100 mb-2 hover:text-[#8b5cf6] cursor-pointer transition-colors">
            {title}
          </h2>
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>

          {/* GitHub Repo Card */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-lg p-4 mb-4">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-200 mb-1 hover:text-[#8b5cf6] cursor-pointer">
                  {repoName}
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#3178c6]" />
                    <span>{repoLanguage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" strokeWidth={2} />
                    <span>{repoStars.toLocaleString('en-US')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" strokeWidth={2} />
                    <span>{repoForks}</span>
                  </div>
                </div>
              </div>
              <button className="px-3 py-1.5 bg-[#8b5cf6] text-white text-xs font-medium rounded-md hover:bg-[#7c3aed] transition-colors">
                Ver Repo
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#18181b] border border-[#27272a] rounded-md text-xs text-gray-300 hover:border-[#8b5cf6] hover:text-[#8b5cf6] cursor-pointer transition-all"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#8b5cf6] transition-colors">
              <MessageCircle className="w-4 h-4" strokeWidth={2} />
              <span>{comments} comentários</span>
            </button>
            <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-[#8b5cf6] transition-colors">
              <Share2 className="w-4 h-4" strokeWidth={2} />
              <span>Compartilhar</span>
            </button>
            <button
              onClick={() => setIsSaved(!isSaved)}
              className={clsx(
                'flex items-center gap-1.5 text-sm transition-colors',
                isSaved ? 'text-[#fbbf24]' : 'text-gray-400 hover:text-[#fbbf24]'
              )}
            >
              <Bookmark className={clsx('w-4 h-4', isSaved && 'fill-[#fbbf24]')} strokeWidth={2} />
              <span>{isSaved ? 'Salvo' : 'Salvar'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
