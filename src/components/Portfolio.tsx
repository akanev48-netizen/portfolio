import { motion } from 'framer-motion'

const cases = [
  {
    title: 'NordFlow Tasks',
    tag: 'Веб-приложение',
    description: 'Трекер задач для команд с ролевой системой и Kanban-доской',
    pain: 'Команда из 5 человек теряла задачи в мессенджерах, не видела статусы',
    solution: 'Веб-приложение с авторизацией, ролями, Kanban с drag-and-drop, уведомлениями, комментариями и историей',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    link: 'https://akanev48-netizen.github.io/nordflow-tasks/',
    github: 'https://github.com/akanev48-netizen/nordflow-tasks',
    features: ['🔐 Ролевая система', '📋 Kanban drag-and-drop', '🔔 Уведомления', '🌙 Тёмная тема'],
  },
  {
    title: 'Карточки маркетплейсов',
    tag: 'Контент',
    description: 'Продающие карточки для WB, Ozon, Яндекс.Маркет',
    pain: 'Продавцы не умеют оформлять карточки —低转化, плохой SEO',
    solution: 'Анализ конкурентов, продающие тексты, визуальное оформление, шаблон под любой маркетплейс',
    tech: ['Canva', 'ChatGPT', 'Qwen'],
    link: null,
    github: null,
    features: ['🏷️ WB / Ozon / Яндекс.Маркет', '📝 Продающие тексты', '🎨 Визуал', '🔍 SEO-оптимизация'],
  },
  {
    title: 'SMM-контент и презентации',
    tag: 'Маркетинг',
    description: 'Посты, копирайтинг, презентации для бизнеса',
    pain: 'Бизнес не может качественно вести соцсети и готовить презентации',
    solution: 'Контент для соцсетей, продающие тексты, деловые презентации',
    tech: ['Canva', 'Gamma', 'Google Presentations', 'ChatGPT'],
    link: null,
    github: null,
    features: ['📱 Посты для соцсетей', '💼 Презентации', '✍️ Копирайтинг', '📊 Визуальный контент'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-4">
            Портфолио
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Мои кейсы
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Каждый проект — решение реальной проблемы клиента
          </p>
        </motion.div>

        <div className="space-y-8">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-100 p-8 md:p-10 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0f172a]">
                    {item.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-500 transition-colors"
                    >
                      Live →
                    </a>
                  )}
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-slate-200 text-slate-600 text-sm font-medium rounded-lg hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-500 mb-6 max-w-3xl">{item.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="p-4 bg-red-50 rounded-xl">
                  <p className="text-sm font-medium text-red-600 mb-1">Боль клиента</p>
                  <p className="text-slate-700">{item.pain}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <p className="text-sm font-medium text-green-600 mb-1">Решение</p>
                  <p className="text-slate-700">{item.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                {item.features.map((f) => (
                  <span key={f} className="text-sm text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg">
                    {f}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
