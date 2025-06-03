export default function Banner() {
  function scrollNext() {
    if (window.innerWidth <= 720) {
      window.scrollTo({ top: 880, behavior: 'smooth' })
      return
    }
    if (window.innerWidth <= 1000) {
      window.scrollTo({ top: 1100, behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 750, behavior: 'smooth' })
  }

  return (
    <section className="w-full flex items-center h-screen bg-white fadeIn">
      <h2 className="text-6xl w-full md:w-4xl text-center absolute z-10 text-white font-extrabold">
        Mude com o mundo.
      </h2>
      <div className="flex w-full items-center">
        <div className="absolute h-screen right-0 p-110 bg-blue-950"></div>
        <div className="absolute h-full right-48 md:right-190 -top-30 md:-top-140 bg-blue-950 p-110 md:p-160 circleToSquare"></div>

        <div className="absolute w-90 hidden xl:block right-30 p-6 text-zinc-900">
          <p className="text-xl text-amber-50">
            Pare de perder vendas online por falta de tempo e conhecimento
            técnico! <br />
            Esta é a maneira mais fácil de atrair clientes, aumentar sua receita
            e expandir seus negócios online
            <span className="showHide">|</span>
          </p>
          <button
            onClick={scrollNext}
            className="text-2xl my-5 cursor-pointer bg-white hover:rounded-2xl hover:shadow-xl p-3 px-6 hover:bg-amber-50 transition-all"
          >
            Impucionar
          </button>
        </div>
        <button
          onClick={scrollNext}
          className="w-full h-180 cursor-pointer flex justify-center items-end bottom-20 bg-transparent p-2 rounded-2xl"
        >
          <img src={'./arrow.png'} alt="" className="w-6 opacity-30" />
        </button>
      </div>
    </section>
  )
}
