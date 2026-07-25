import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Бриф',
    description: 'Выясняю задачу, бюджет, сроки. Просто разговариваю и записываю.',
  },
  {
    number: '02',
    title: 'ТЗ',
    description: 'Формирую техническое задание, согласовываю с вами. Вы точно знаете, что получите.',
  },
  {
    number: '03',
    title: 'Разработка',
    description: 'Создаю продукт через ИИ, показываю промежуточные результаты на каждом этапе.',
  },
  {
    number: '04',
    title: 'Правки',
    description: '3 раунда правок включены в стоимость. Довожу до идеала.',
  },
  {
    number: '05',
    title: 'Деплой',
    description: 'Размещаю готовый продукт, передаю исходный код и документацию.',
  },
  {
    number: '06',
    title: 'Поддержка',
    description: 'При необходимости: доработки, консультации, новые фичи.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm mb-4">
            Процесс
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6">
            Как я работаю
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Прозрачный процесс от первого контакта до сдачи проекта
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-all duration-300"
            >
              <span className="text-5xl font-bold text-blue-50 opacity-0 absolute top-4 right-6 select-none">
                {step.number}
              </span>
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mb-5">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
