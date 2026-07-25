import { motion } from 'framer-motion'

const testimonials = [
  {
    text: 'Аким создал трекер задач для нашей команды за 2 недели. Раньше всё было в переписках — теперь видно каждый статус. Рекомендую!',
    author: 'Руководитель команды',
    team: '5 человек',
  },
  {
    text: 'Быстро, качественно, доступно. ИИ-подход реально работает — проект готов быстрее, чем у других исполнителей.',
    author: 'Стартап',
    team: 'MVP приложение',
  },
  {
    text: 'Презентация для инвесторов была готова за 3 дня. Профессиональный подход, всё по делу.',
    author: 'Владелец бизнеса',
    team: 'Презентация',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-4">
            Отзывы
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Что говорят клиенты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl text-blue-200 mb-4">"</div>
              <p className="text-slate-600 leading-relaxed mb-6 italic">
                {item.text}
              </p>
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-[#0f172a]">{item.author}</p>
                <p className="text-sm text-slate-400">{item.team}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
