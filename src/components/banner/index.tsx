export default function Banner() {
  function scrollNext() {
    const sections = document.querySelectorAll('section.snap-start');
    const currentScroll = window.scrollY;
    let nextSection: Element | null = null;

    for (let i = 0; i < sections.length; i++) {
      const top = (sections[i] as HTMLElement).offsetTop;
      if (top > currentScroll + 10) {
        nextSection = sections[i];
        break;
      }
    }

    if (nextSection) {
      (nextSection as HTMLElement).scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className="snap-start min-h-screen w-full relative bg-black/5 flex items-center justify-center bg-beige-50 text-white overflow-hidden">
      {/* Conteúdo central */}
      <div className="z-20 relative inset-0 flex flex-col items-center justify-center px-6 text-center">
        
        <div className="absolute h-full right-48 md:right-130 -top-110 md:-top-140 bg-blue-950 p-110 md:p-160 circleToSquare"></div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-950 mb-4 z-10">
          Mude com o mundo.
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-blue-950/80 max-w-xl leading-relaxed mb-6 z-10">
          Pare de perder vendas online por falta de tempo e conhecimento técnico.
          Esta é a maneira mais fácil de atrair clientes, aumentar sua receita e expandir seus negócios online.
        </p>

        <div className="flex gap-3">
          <button
            onClick={scrollNext}
            className="bg-blue-950 text-white px-5 py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md hover:scale-[1.02] transition-transform z-10"
            aria-label="Ir para a próxima seção"
          >
            Impulsionar
          </button>
        </div>
      </div>

      {/* Seta rolável inferior */}
      <button
        onClick={scrollNext}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 p-2"
        aria-label="Rolar para baixo"
      >
        <img src={'/arrow.png'} alt="Scroll down" className="w-6 h-4 opacity-40" />
      </button>

      {/* Decoração: formas fixas de fundo (círculo girando à direita) */}
      <div
        aria-hidden
        className="absolute -right-20 top-3.5 -translate-y-1/2 z-10 pointer-events-none"
      >
        {/* Círculo principal giratório */}
      <div className="circleToSquareMoon rounded-full bg-blue-900/90 dark:bg-blue-800/10 w-[360px] h-[360px] md:w-[500px] md:h-[500px] lg:w-[340px] lg:h-[340px]"></div>
      </div>

      {/* Forma escura lateral (ajusta contraste no mobile) */}
      <div
        aria-hidden
        className="absolute right-0 top-0 h-full w-[20vw] min-w-[120px] max-w-[320px] bg-blue-900/5 z-0"
      />
    </section>
  );
}
