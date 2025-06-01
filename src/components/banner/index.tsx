
export default function Banner() {

  return (
    <div className={`w-full flex items-center h-screen bg-white fadeIn`}>
      <h2 className="text-6xl w-full md:w-4xl text-center absolute z-10 text-white font-extrabold">
        Mude com o mundo.
      </h2>
      <div className="flex w-full items-center">
        <div className="absolute right-0 md:right-0 p-110 top-0 md:-top-30  bg-blue-950"></div>
        <div className="absolute right-45 -top-30 md:right-120 xl:right-220 p-110 circleToSquare"></div>div

        <div className="absolute w-90 hidden xl:block right-30 p-6  text-zinc-900 ">
          <p className="text-xl text-amber-50">
            Pare de perder vendas online por falta de tempo e conhecimento técnico! <br />
            Esta é a maneira mais fácil de atrair clientes, aumentar sua receita e expandir seus 
            negócios online
            <span className=" showHide">|</span>
          </p>
            <button className="text-2xl my-5 bg-white hover:rounded-2xl hover:shadow-xl p-3 px-6 hover:bg-amber-50 transition-all cursor-pointer">
              Impucionar
            </button>
        </div>
        <button className="fixed right-0 bottom-20 bg-amber-50 p-2 rounded-2xl">
          SABER MAIS
        </button>

      </div>
    </div>
  )

}