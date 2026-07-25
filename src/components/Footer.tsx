export default function Footer() {
  return (
    <footer className="py-8 bg-[#0f172a] text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© 2026 Аким. Создано с помощью ИИ.</p>
        <div className="mt-3 flex justify-center gap-4">
          <a
            href="https://github.com/akanev48-netizen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a href="#contacts" className="hover:text-white transition-colors">
            Контакты
          </a>
        </div>
      </div>
    </footer>
  )
}
