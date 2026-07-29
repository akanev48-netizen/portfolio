import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-6">
            Vibe-кодер • Fullstack разработчик
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Создаю <span className="whitespace-nowrap">веб-приложения,</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              которые снимают рутину
            </span>
            <br />
            с вашей команды
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            От идеи до готового продукта — через ИИ за <span className="whitespace-nowrap">дни, а не месяцы.</span>
            <br />
            Трекеры задач, CRM-системы, админ-панели, чат-боты.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacts"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 text-lg"
            >
              Обсудить проект
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-500 hover:border-blue-400 text-slate-300 hover:text-white font-semibold rounded-xl transition-all duration-300 text-lg"
            >
              Смотреть кейсы
            </a>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              React + TypeScript
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Node.js + Express
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              AI-powered разработка
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
