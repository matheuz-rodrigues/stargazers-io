'use client';

import { Star, ExternalLink, Layout, FileText, Users, Settings, Home as HomeIcon, Palette, Type, Sparkles, Eye, Search } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function IndexPage() {
  const pages = [
    {
      title: 'Home / Feed',
      path: '/feed',
      description: 'Página principal com feed de posts, sidebars e header',
      icon: HomeIcon,
    },
    {
      title: 'Login',
      path: '/login',
      description: 'Página de autenticação com GitHub OAuth e email/senha',
      icon: Users,
    },
    {
      title: 'Cadastro',
      path: '/register',
      description: 'Registro em 2 steps: informações básicas e credenciais',
      icon: FileText,
    },
  ];

  const components = [
    {
      name: 'Header',
      path: '/feed',
      description: 'Cabeçalho fixo com logo, busca, contador de estrelas e avatar',
      features: ['Search bar', 'Star counter', 'Create post button', 'User avatar'],
      variants: ['Fixed position', 'Glassmorphism effect', 'Sticky behavior'],
    },
    {
      name: 'Sidebar (Left)',
      path: '/feed',
      description: 'Navegação lateral esquerda com menu e tags populares',
      features: ['Navigation menu', 'Popular tags', 'Responsive (hidden < lg)'],
      variants: ['Active state highlighting', 'Hover effects', 'Staggered animations'],
    },
    {
      name: 'RightSidebar',
      path: '/feed',
      description: 'Barra lateral direita com top contributors e promo',
      features: ['Top contributors list', 'Promotional widget', 'Responsive (hidden < xl)'],
      variants: ['Gradient widget', 'Avatar gradients', 'Number formatting'],
    },
    {
      name: 'PostCard',
      path: '/feed',
      description: 'Card interativo de post com repo GitHub',
      features: ['Voting system', 'GitHub repo preview', 'Tags', 'Actions (comment, share, save)'],
      variants: ['Upvote/Downvote states', 'Save state toggle', 'Hover effects'],
    },
    {
      name: 'Login Form',
      path: '/login',
      description: 'Formulário de autenticação com split-screen',
      features: ['GitHub OAuth button', 'Email/Password inputs', 'Remember me checkbox'],
      variants: ['Password visibility toggle', 'Input focus states', 'Branding panel'],
    },
    {
      name: 'Register Form',
      path: '/register',
      description: 'Cadastro multi-step com validações',
      features: ['2-step process', 'Password strength indicator', 'Terms acceptance'],
      variants: ['Step transitions', 'Progress indicator', 'Input validation'],
    },
  ];

  const colorPalette = [
    { name: 'Background', hex: '#0a0b0e', var: '--background' },
    { name: 'Card Background', hex: '#13151a', var: '--card-bg' },
    { name: 'Border', hex: '#27272a', var: '--border' },
    { name: 'Primary Purple', hex: '#8b5cf6', var: '--primary-purple' },
    { name: 'Primary Purple Dark', hex: '#7c3aed', var: '--primary-purple-dark' },
    { name: 'Auth Purple Start', hex: '#6d28d9', var: 'N/A' },
    { name: 'Auth Purple End', hex: '#5b21b6', var: 'N/A' },
    { name: 'Accent Gold', hex: '#fbbf24', var: '--accent-gold' },
    { name: 'Accent Gold Dark', hex: '#f59e0b', var: '--accent-gold-dark' },
    { name: 'Foreground', hex: '#e4e4e7', var: '--foreground' },
    { name: 'Gray 100', hex: '#f4f4f5', var: 'N/A' },
    { name: 'Gray 200', hex: '#e4e4e7', var: 'N/A' },
    { name: 'Gray 300', hex: '#d4d4d8', var: 'N/A' },
    { name: 'Gray 400', hex: '#a1a1aa', var: 'N/A' },
  ];

  const gradients = [
    {
      name: 'Primary Purple',
      class: 'gradient-purple',
      css: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      usage: 'Buttons, Logo background, Highlights',
    },
    {
      name: 'Accent Gold',
      class: 'gradient-gold',
      css: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
      usage: 'Star icons, Special highlights',
    },
    {
      name: 'Auth Dark Purple',
      class: 'N/A',
      css: 'linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%)',
      usage: 'Login/Register left panel',
    },
    {
      name: 'Text Gradient',
      class: 'N/A',
      css: 'linear-gradient(to right, #8b5cf6, #7c3aed)',
      usage: 'Logo text, Special headings',
    },
  ];

  const effects = [
    {
      name: 'Glassmorphism',
      description: 'Efeito de vidro fosco com backdrop blur',
      css: 'background: rgba(19, 21, 26, 0.8); backdrop-filter: blur(12px);',
      usage: 'Cards, Header, Sidebars',
    },
    {
      name: 'Fade In Animation',
      description: 'Animação de entrada suave com translateY',
      css: '@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } }',
      usage: 'Initial page load, Component mounting',
    },
    {
      name: 'Border Glow',
      description: 'Borda iluminada em hover',
      css: 'hover:border-[#8b5cf6]',
      usage: 'Cards hover, Input focus states',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0b0e]">
      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="border-b border-[#27272a] bg-[#13151a] sticky top-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                <Star className="w-6 h-6 text-[#fbbf24] fill-[#fbbf24]" strokeWidth={2} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-100">Stargazers.io</h1>
                <p className="text-xs text-gray-400">Design System & Component Map</p>
              </div>
            </div>
            <Link href="/feed" className="px-4 py-2 gradient-purple rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Ver Prototype
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Pages Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Layout className="w-6 h-6 text-[#8b5cf6]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Páginas Disponíveis</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {pages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link href={page.path}>
                  <div className="glass rounded-xl p-5 hover:border-[#8b5cf6] transition-all group cursor-pointer h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8b5cf6] bg-opacity-10 flex items-center justify-center">
                        <page.icon className="w-5 h-5 text-[#8b5cf6]" strokeWidth={2} />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#8b5cf6] transition-colors" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-2 group-hover:text-[#8b5cf6] transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                      <code className="px-2 py-1 bg-[#18181b] rounded border border-[#27272a]">
                        {page.path}
                      </code>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Components Section */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Settings className="w-6 h-6 text-[#fbbf24]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Componentes & Variações</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {components.map((component, index) => (
              <motion.div
                key={component.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                <Link href={component.path}>
                  <div className="glass rounded-xl p-5 hover:border-[#fbbf24] hover:border-opacity-30 transition-all group cursor-pointer">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#fbbf24] mt-2"></div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-100 mb-1 group-hover:text-[#fbbf24] transition-colors">
                          {component.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-3">
                          {component.description}
                        </p>
                        
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Features</p>
                          <div className="flex flex-wrap gap-2">
                            {component.features.map((feature) => (
                              <span
                                key={feature}
                                className="px-2 py-1 bg-[#18181b] border border-[#27272a] rounded text-xs text-gray-300"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Variants</p>
                          <div className="flex flex-wrap gap-2">
                            {component.variants.map((variant) => (
                              <span
                                key={variant}
                                className="px-2 py-1 bg-[#8b5cf6] bg-opacity-10 border border-[#8b5cf6] border-opacity-20 rounded text-xs text-white"
                              >
                                {variant}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* UI Elements - Buttons & Inputs */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#8b5cf6]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">UI Elements</h2>
          </div>

          {/* Buttons */}
          <div className="glass rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Buttons</h3>
            <div className="space-y-6">
              {/* Primary Buttons */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Primary</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 gradient-purple rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 gradient-purple rounded-lg text-white font-medium opacity-50 cursor-not-allowed">
                    Disabled
                  </button>
                  <button className="px-4 py-2 gradient-purple rounded-lg text-white font-medium flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Loading
                  </button>
                </div>
              </div>

              {/* Secondary Buttons */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Secondary</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 font-medium hover:border-[#8b5cf6] transition-all">
                    Secondary Button
                  </button>
                  <button className="px-4 py-2 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-500 font-medium cursor-not-allowed opacity-50">
                    Disabled
                  </button>
                </div>
              </div>

              {/* Outline Buttons */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Outline</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 border-2 border-[#8b5cf6] rounded-lg text-[#8b5cf6] font-medium hover:bg-[#8b5cf6] hover:text-white transition-all">
                    Outline Button
                  </button>
                  <button className="px-4 py-2 border-2 border-[#27272a] rounded-lg text-gray-500 font-medium cursor-not-allowed">
                    Disabled
                  </button>
                </div>
              </div>

              {/* Status Buttons */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Status Variants</p>
                <div className="flex flex-wrap gap-3">
                  <button className="px-4 py-2 bg-green-600 rounded-lg text-white font-medium hover:bg-green-700 transition-colors">
                    Success
                  </button>
                  <button className="px-4 py-2 bg-yellow-600 rounded-lg text-white font-medium hover:bg-yellow-700 transition-colors">
                    Warning
                  </button>
                  <button className="px-4 py-2 bg-red-600 rounded-lg text-white font-medium hover:bg-red-700 transition-colors">
                    Danger
                  </button>
                  <button className="px-4 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors">
                    Info
                  </button>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Sizes</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <button className="px-3 py-1 gradient-purple rounded text-white text-xs font-medium hover:opacity-90">
                    Small
                  </button>
                  <button className="px-4 py-2 gradient-purple rounded-lg text-white text-sm font-medium hover:opacity-90">
                    Medium
                  </button>
                  <button className="px-6 py-3 gradient-purple rounded-lg text-white text-base font-medium hover:opacity-90">
                    Large
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Inputs */}
          <div className="glass rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Input Fields</h3>
            <div className="space-y-6">
              {/* Default & States */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">States</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Default</label>
                    <input
                      type="text"
                      placeholder="Enter text..."
                      className="w-full h-11 px-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Focused</label>
                    <input
                      type="text"
                      placeholder="Focused state"
                      className="w-full h-11 px-4 bg-[#18181b] border border-[#8b5cf6] rounded-lg text-gray-200 placeholder-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Disabled</label>
                    <input
                      type="text"
                      placeholder="Disabled"
                      disabled
                      className="w-full h-11 px-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-500 placeholder-gray-600 cursor-not-allowed opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Read Only</label>
                    <input
                      type="text"
                      value="Read only value"
                      readOnly
                      className="w-full h-11 px-4 bg-[#13151a] border border-[#27272a] rounded-lg text-gray-400 cursor-default"
                    />
                  </div>
                </div>
              </div>

              {/* Validation States */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Validation States</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Success</label>
                    <input
                      type="text"
                      placeholder="Valid input"
                      className="w-full h-11 px-4 bg-[#18181b] border border-green-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500"
                    />
                    <p className="text-xs text-green-400 mt-1">✓ Input is valid</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-red-400 mb-2">Error</label>
                    <input
                      type="text"
                      placeholder="Invalid input"
                      className="w-full h-11 px-4 bg-[#18181b] border border-red-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-red-500"
                    />
                    <p className="text-xs text-red-400 mt-1">✗ This field is required</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-yellow-400 mb-2">Warning</label>
                    <input
                      type="text"
                      placeholder="Warning state"
                      className="w-full h-11 px-4 bg-[#18181b] border border-yellow-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                    />
                    <p className="text-xs text-yellow-400 mt-1">⚠ Please verify this input</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-400 mb-2">Info</label>
                    <input
                      type="text"
                      placeholder="Info state"
                      className="w-full h-11 px-4 bg-[#18181b] border border-blue-600 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    <p className="text-xs text-blue-400 mt-1">ℹ Additional information here</p>
                  </div>
                </div>
              </div>

              {/* With Icons */}
              <div>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">With Icons</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full h-11 pl-11 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">With Button</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter value..."
                        className="flex-1 h-11 px-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                      />
                      <button className="px-4 gradient-purple rounded-lg text-white font-medium hover:opacity-90">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* More UI Components - Cards, Badges, Alerts, etc */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.28 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Layout className="w-6 h-6 text-[#fbbf24]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Mais Componentes UI</h2>
          </div>

          <div className="space-y-6">
            {/* Cards */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Cards</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Basic Card */}
                <div className="glass rounded-xl p-4 hover:border-[#8b5cf6] transition-all cursor-pointer">
                  <h4 className="text-base font-semibold text-gray-100 mb-2">Basic Card</h4>
                  <p className="text-sm text-gray-400 mb-3">
                    Simple card with title and description. Perfect for content display.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-[#8b5cf6] bg-opacity-10 text-[#8b5cf6] rounded text-xs">Tag</span>
                  </div>
                </div>

                {/* Card with Stats */}
                <div className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-base font-semibold text-gray-100">Stats Card</h4>
                    <Star className="w-5 h-5 text-[#fbbf24]" strokeWidth={2} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Projects</span>
                      <span className="text-gray-200 font-semibold">42</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Stars</span>
                      <span className="text-gray-200 font-semibold">1.2k</span>
                    </div>
                  </div>
                </div>

                {/* Highlighted Card */}
                <div className="glass rounded-xl p-4 !border-2 !border-[#fbbf24]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="px-2 py-0.5 gradient-gold rounded text-xs font-semibold text-white">
                      Premium
                    </div>
                  </div>
                  <h4 className="text-base font-semibold text-gray-100 mb-2">Featured Card</h4>
                  <p className="text-sm text-gray-400">
                    Special card with golden border for premium content.
                  </p>
                </div>
              </div>
            </div>

            {/* Badges & Tags */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Badges & Tags</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Status Badges</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600 rounded-full text-white text-xs font-medium">Active</span>
                    <span className="px-3 py-1 bg-yellow-600 rounded-full text-white text-xs font-medium">Pending</span>
                    <span className="px-3 py-1 bg-red-600 rounded-full text-white text-xs font-medium">Inactive</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-white text-xs font-medium">New</span>
                    <span className="px-3 py-1 bg-gray-600 rounded-full text-white text-xs font-medium">Draft</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Category Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-[#8b5cf6] bg-opacity-10 border border-[#8b5cf6] border-opacity-20 rounded text-xs text-white">React</span>
                    <span className="px-2 py-1 bg-[#fbbf24] bg-opacity-10 border border-[#fbbf24] border-opacity-20 rounded text-xs text-white">TypeScript</span>
                    <span className="px-2 py-1 bg-[#18181b] border border-[#27272a] rounded text-xs text-gray-300">Next.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Alerts */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Alerts</h3>
              <div className="space-y-3">
                <div className="p-4 bg-blue-600 bg-opacity-10 border border-blue-600 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-blue-400 font-bold">ℹ</div>
                    <div>
                      <p className="text-sm font-medium text-blue-300 mb-1">Information</p>
                      <p className="text-xs text-blue-200">This is an informational alert message.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-green-600 bg-opacity-10 border border-green-600 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-green-400 font-bold">✓</div>
                    <div>
                      <p className="text-sm font-medium text-green-300 mb-1">Success</p>
                      <p className="text-xs text-green-200">Your action completed successfully!</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-yellow-600 bg-opacity-10 border border-yellow-600 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-yellow-400 font-bold">⚠</div>
                    <div>
                      <p className="text-sm font-medium text-yellow-300 mb-1">Warning</p>
                      <p className="text-xs text-yellow-200">Please review this before continuing.</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-red-600 bg-opacity-10 border border-red-600 rounded-lg">
                  <div className="flex gap-3">
                    <div className="text-red-400 font-bold">✗</div>
                    <div>
                      <p className="text-sm font-medium text-red-300 mb-1">Error</p>
                      <p className="text-xs text-red-200">An error occurred. Please try again.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Controls */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-100 mb-4">Form Controls</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Checkboxes & Radio */}
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Checkboxes & Radio</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0" defaultChecked />
                      <span className="text-sm text-gray-300">Checkbox selected</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0" />
                      <span className="text-sm text-gray-300">Checkbox unselected</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="radio-demo" className="w-4 h-4 border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0" defaultChecked />
                      <span className="text-sm text-gray-300">Radio selected</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="radio-demo" className="w-4 h-4 border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0" />
                      <span className="text-sm text-gray-300">Radio unselected</span>
                    </label>
                  </div>
                </div>

                {/* Toggle Switches */}
                <div>
                  <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Switches</p>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-gray-300">Enable notifications</span>
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-[#27272a] rounded-full peer peer-checked:bg-[#8b5cf6] transition-colors"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                      </div>
                    </label>
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-sm text-gray-300">Dark mode</span>
                      <div className="relative">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-[#27272a] rounded-full peer peer-checked:bg-[#8b5cf6] transition-colors"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress & Avatars */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Progress Bars */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Progress Bars</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Default</span>
                      <span>75%</span>
                    </div>
                    <div className="h-2 bg-[#27272a] rounded-full overflow-hidden">
                      <div className="h-full gradient-purple rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Success</span>
                      <span>100%</span>
                    </div>
                    <div className="h-2 bg-[#27272a] rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-400 mb-2">
                      <span>Warning</span>
                      <span>45%</span>
                    </div>
                    <div className="h-2 bg-[#27272a] rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-600 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatars */}
              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Avatars</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Sizes</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full gradient-purple flex items-center justify-center text-white text-xs font-semibold">S</div>
                      <div className="w-10 h-10 rounded-full gradient-purple flex items-center justify-center text-white text-sm font-semibold">M</div>
                      <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center text-white text-base font-semibold">L</div>
                      <div className="w-16 h-16 rounded-full gradient-purple flex items-center justify-center text-white text-xl font-semibold">XL</div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">With Status</p>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-white text-sm font-semibold">JS</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#13151a]"></div>
                      </div>
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#27272a] flex items-center justify-center text-gray-400 text-sm font-semibold">AB</div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-500 rounded-full border-2 border-[#13151a]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Color Palette */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Palette className="w-6 h-6 text-[#8b5cf6]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Paleta de Cores</h2>
          </div>
          
          <div className="glass rounded-xl p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {colorPalette.map((color) => (
                <div key={color.name} className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-lg border border-[#27272a] flex-shrink-0"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-200 truncate">{color.name}</p>
                    <p className="text-xs text-gray-400 font-mono">{color.hex}</p>
                    {color.var !== 'N/A' && (
                      <p className="text-xs text-gray-500 font-mono truncate">{color.var}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Gradients */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#fbbf24]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Gradientes</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {gradients.map((gradient) => (
              <div key={gradient.name} className="glass rounded-xl p-5">
                <div
                  className="w-full h-24 rounded-lg mb-4"
                  style={{ background: gradient.css }}
                ></div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{gradient.name}</h3>
                <div className="space-y-2">
                  {gradient.class !== 'N/A' && (
                    <p className="text-xs text-gray-400">
                      <span className="text-gray-500">Class:</span>{' '}
                      <code className="px-2 py-0.5 bg-[#18181b] rounded border border-[#27272a] text-[#8b5cf6]">
                        {gradient.class}
                      </code>
                    </p>
                  )}
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-500">CSS:</span>{' '}
                    <code className="px-2 py-0.5 bg-[#18181b] rounded border border-[#27272a] text-gray-300 text-[10px]">
                      {gradient.css}
                    </code>
                  </p>
                  <p className="text-xs text-gray-400">
                    <span className="text-gray-500">Uso:</span> {gradient.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Typography */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Type className="w-6 h-6 text-[#8b5cf6]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Tipografia</h2>
          </div>
          
          <div className="glass rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">Font Family</p>
                <p className="text-gray-300 text-sm font-mono">
                  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif
                </p>
              </div>
              
              <div className="border-t border-[#27272a] pt-6">
                <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Hierarchy Examples</p>
                <div className="space-y-3">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-100">Heading 1 - 4xl Bold</h1>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-100">Heading 2 - 3xl Bold</h2>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">Heading 3 - 2xl Bold</h3>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-2xl font-bold</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-100">Heading 4 - xl Semibold</h4>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-xl font-semibold</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-300">Body Text - Base Regular</p>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-base text-gray-300</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Small Text - SM Regular</p>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-sm text-gray-400</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Caption - XS Regular</p>
                    <p className="text-xs text-gray-500 font-mono mt-1">text-xs text-gray-500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Visual Effects */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-6">
            <Eye className="w-6 h-6 text-[#fbbf24]" strokeWidth={2} />
            <h2 className="text-2xl font-bold text-gray-100">Efeitos Visuais</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {effects.map((effect) => (
              <div key={effect.name} className="glass rounded-xl p-5">
                <h3 className="text-lg font-semibold text-gray-100 mb-2">{effect.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{effect.description}</p>
                <code className="text-xs text-gray-500 bg-[#18181b] px-2 py-1 rounded border border-[#27272a] block">
                  {effect.css}
                </code>
                <p className="text-xs text-gray-500 mt-3">
                  <span className="text-gray-400">Uso:</span> {effect.usage}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-gray-100 mb-6">Stack Tecnológico</h2>
          <div className="glass rounded-xl p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Next.js 16', desc: 'App Router, Server Components' },
                { name: 'TypeScript', desc: 'Type safety, Better DX' },
                { name: 'Tailwind CSS v4', desc: 'Utility-first styling' },
                { name: 'Framer Motion', desc: 'Smooth animations' },
                { name: 'Lucide React', desc: 'Beautiful icons' },
                { name: 'clsx', desc: 'Conditional classNames' },
              ].map((tech) => (
                <div key={tech.name}>
                  <h3 className="text-sm font-semibold text-gray-200 mb-1">{tech.name}</h3>
                  <p className="text-xs text-gray-400">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#27272a] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          Stargazers.io Prototype • Complete Design System Documentation
        </div>
      </footer>
    </div>
  );
}
