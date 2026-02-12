'use client';

import { Star, Github, Mail, Lock, Eye, EyeOff, User, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pwd: string) => {
    let strength = 0;
    if (pwd.length >= 8) strength++;
    if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++;
    if (/\d/.test(pwd)) strength++;
    if (/[^a-zA-Z\d]/.test(pwd)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ['Muito fraca', 'Fraca', 'Média', 'Forte', 'Muito forte'];
  const strengthColors = ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e'];

  const benefits = [
    'Compartilhe seus projetos GitHub',
    'Descubra repositórios incríveis',
    'Ganhe estrelas e promova seus projetos',
    'Conecte-se com outros desenvolvedores',
  ];

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
            Junte-se à maior comunidade de desenvolvedores
          </h1>
          <p className="text-lg text-purple-100 mb-12">
            Crie sua conta em 2 passos simples e comece a compartilhar seus projetos.
          </p>

          {/* Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <span className="text-purple-100">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-purple-200">Passo {currentStep} de 2</span>
            </div>
            <div className="flex gap-2">
              <div className={clsx(
                'h-1 flex-1 rounded-full transition-all',
                currentStep >= 1 ? 'bg-white' : 'bg-white bg-opacity-30'
              )} />
              <div className={clsx(
                'h-1 flex-1 rounded-full transition-all',
                currentStep >= 2 ? 'bg-white' : 'bg-white bg-opacity-30'
              )} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-100 mb-2">Crie sua conta</h2>
            <p className="text-gray-400">
              {currentStep === 1 ? 'Informações básicas' : 'Dados de acesso'}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                {/* GitHub Button */}
                <button className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 font-medium hover:border-[#8b5cf6] transition-all">
                  <Github className="w-5 h-5" strokeWidth={2} />
                  Cadastrar com GitHub
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#27272a]"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#0a0b0e] text-gray-500">ou preencha manualmente</span>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome Completo
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                    <input
                      type="text"
                      placeholder="João Silva"
                      className="w-full h-11 pl-11 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                  </div>
                </div>

                {/* Username */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome de Usuário
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                    <input
                      type="text"
                      placeholder="joaosilva"
                      className="w-full h-11 pl-9 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentStep(2)}
                  className="w-full h-11 gradient-purple rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Continuar
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </button>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-400">
                  Já tem uma conta?{' '}
                  <Link
                    href="/login"
                    className="text-[#8b5cf6] font-medium hover:text-[#7c3aed] transition-colors"
                  >
                    Faça login
                  </Link>
                </p>
              </motion.div>
            )}

            {/* Step 2: Credentials */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                    <input
                      type="email"
                      placeholder="joao@email.com"
                      className="w-full h-11 pl-11 pr-4 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-11 pl-11 pr-11 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
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

                  {/* Password Strength Indicator */}
                  {password && (
                    <div className="mt-2">
                      <div className="flex gap-1 mb-1">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={clsx(
                              'h-1 flex-1 rounded-full transition-all',
                              i < passwordStrength
                                ? 'opacity-100'
                                : 'bg-[#27272a] opacity-30'
                            )}
                            style={{
                              backgroundColor:
                                i < passwordStrength ? strengthColors[passwordStrength - 1] : undefined,
                            }}
                          />
                        ))}
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: strengthColors[passwordStrength - 1] }}
                      >
                        {strengthLabels[passwordStrength - 1]}
                      </span>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full h-11 pl-11 pr-11 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-[#8b5cf6] transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" strokeWidth={2} />
                      ) : (
                        <Eye className="w-5 h-5" strokeWidth={2} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Terms Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded border-[#27272a] bg-[#18181b] text-[#8b5cf6] focus:ring-[#8b5cf6] focus:ring-offset-0"
                  />
                  <span className="text-sm text-gray-300">
                    Eu concordo com os{' '}
                    <Link href="/terms" className="text-[#8b5cf6] hover:text-[#7c3aed]">
                      Termos de Uso
                    </Link>{' '}
                    e{' '}
                    <Link href="/privacy" className="text-[#8b5cf6] hover:text-[#7c3aed]">
                      Política de Privacidade
                    </Link>
                  </span>
                </label>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 h-11 bg-[#18181b] border border-[#27272a] rounded-lg text-gray-200 font-semibold hover:bg-[#27272a] transition-colors flex items-center justify-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                    Voltar
                  </button>
                  <button
                    disabled={!agreedToTerms}
                    className={clsx(
                      'flex-1 h-11 rounded-lg text-white font-semibold transition-opacity',
                      agreedToTerms
                        ? 'gradient-purple hover:opacity-90'
                        : 'bg-[#27272a] cursor-not-allowed opacity-50'
                    )}
                  >
                    Criar Conta
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
