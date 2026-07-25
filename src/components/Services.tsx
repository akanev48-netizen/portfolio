import { motion } from 'framer-motion'

const services = [
  {
    icon: '🌐',
    title: 'Веб-приложения',
    description: 'Трекеры задач, CRM-системы, дашборды — от MVP до полноценного продукта',
  },
  {
    icon: '⚙️',
    title: 'Админ-панели',
    description: 'Панели управления для бизнеса: пользователи, статистика, отчёты',
  },
  {
    icon: '💬',
    title: 'Чат-боты',
    description: 'Telegram-боты, боты для автоматизации заявок и рассылок',
  },
  {
    icon: '🏷️',
    title: 'Карточки маркетплейсов',
    description: 'Оформление карточек для WB, Ozon, Яндекс.Маркет — тексты, визуал, SEO',
  },
  {
    icon: '📱',
    title: 'SMM и контент',
    description: 'Посты, копирайтинг, презентации для продвижения бизнеса',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-4">
            Услуги
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Что я делаю
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Полный цикл разработки: от идеи и ТЗ до готового продукта с деплоем
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 bg-white"
            >
              <div className="text-4xl mb-5">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
