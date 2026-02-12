'use client';

import { Star, Github, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden flex-col justify-center items-center p-12"
        style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #5b21b6 100%)' }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -ml-32 -mb-32" />

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-14 h-14 rounded-xl bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
              <Star className="w-8 h-8 text-[#fbbf24] fill-[#fbbf24]" strokeWidth={2} />
            </div>
            <span className="text-3xl font-bold text-white">Stargazers.io</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Descubra os melhores projetos Open Source
          </h1>
          <p className="text-lg text-purple-100 mb-12">
            Conecte-se com desenvolvedores, compartilhe seus projetos e ganhe estrelas
            interagindo com a comunidade.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-sm text-purple-200">Desenvolvedores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">125K+</div>
              <div className="text-sm text-purple-200">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1M+</div>
              <div className="text-sm text-purple-200">Estrelas</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex-1 flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-2">Bem-vindo de volta!</h2>
            <p className="text-gray-400">Entre para continuar sua jornada</p>
          </div>

          <div className="space-y-6">
            {/* GitHub Button */}
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 font-medium hover:border-[#8b5cf6] transition-all">
              <Github className="w-5 h-5" strokeWidth={2} />
              Continuar com GitHub
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#27272a]"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#0a0b0e] text-gray-500">ou continue com email</span>
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full h-12 pl-11 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full h-12 pl-11 pr-11 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" strokeWidth={2} />
                  ) : (
                    <Eye className="w-5 h-5" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0"
                />
                <span className="text-sm text-gray-300">Lembrar de mim</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-[#8b5cf6] hover:text-[#7c3aed] transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* Login Button */}
            <button className="w-full h-12 gradient-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
              Entrar
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-sm text-gray-400">
              Não tem uma conta?{' '}
              <Link
                href="/register"
                className="text-[#8b5cf6] font-medium hover:text-[#7c3aed] transition-colors"
              >
                Cadastre-se gratuitamente
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
