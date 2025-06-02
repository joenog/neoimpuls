export default function Banner() {
  function scrollNext() {
    if (window.innerWidth <= 720) {
      window.scrollTo({ top: 880, behavior: 'smooth' })
      return
    }
    window.scrollTo({ top: 700, behavior: 'smooth' })
  }

  return (
    <div className="w-full flex items-center h-screen bg-white fadeIn">
      <h2 className="text-6xl w-full md:w-4xl text-center absolute z-10 text-white font-extrabold">
        Mude com o mundo.
      </h2>
      <div className="flex w-full items-center">
        <div className="absolute right-0 md:right-0 p-110 top-0 md:-top-30  bg-blue-950"></div>
        <div className="absolute right-45 -top-30 md:right-120 xl:right-220  bg-blue-950 p-110 circleToSquare"></div>

        <div className="absolute w-90 hidden xl:block right-30 p-6  text-zinc-900 ">
          <p className="text-xl text-amber-50">
            Pare de perder vendas online por falta de tempo e conhecimento
            técnico! <br />
            Esta é a maneira mais fácil de atrair clientes, aumentar sua receita
            e expandir seus negócios online
            <span className=" showHide">|</span>
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
          className="w-full h-180 cursor-pointer flex justify-center items-end ight-3/6 bottom-20 bg-transparent p-2 rounded-2xl"
        >
          <img src={'./arrow.png'} alt="" className="w-6 opacity-30" />
        </button>
      </div>
    </div>
  )
}
