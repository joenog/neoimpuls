export default function Header() {
  const checkoutUrl = "_black";

  return (
    <header className="fixed top-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-black/30 backdrop-blur-md rounded-2xl shadow-md p-2">
          {/* Logo + Tagline */}
          <div className="flex items-center gap-3 px-2">
            <a
              aria-label="Home - Neo"
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-900 rounded cursor-pointer"
            >
              <img src={'/neoimpuls.png'} alt="Logo Alexandria" className="h-18 w-auto" />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-sm font-semibold text-blue-950">Neo Impuls</span>
                <span className="text-xs text-gray-300">Seu negócio no topo</span>
              </div>
            </a>
          </div>

          {/* CTA (sempre visível, discreto) */}
          <div className="flex items-center gap-3">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/80 text-black px-4 mr-2 py-2 rounded-full font-semibold text-sm hover:bg-gray-300 focus:outline-none transition-shadow shadow-sm"
              aria-label="Comprar eBook - A Última Geração"
            >
              Entrar
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
