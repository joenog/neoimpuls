import Banner from '../../components/banner'
import Container from '../../components/container'

export default function Home() {
  return (
    <>
      <Banner />
      <div className="w-full">
        <Container>
          <section className="mx-2 md:mt-16 mb-30">
            <h2 className="text-3xl text-center font-bold text-zinc-800">
              Pare de perder tempo e Assuma o controle do seu negócio na era
              digital
            </h2>
            <div className="flex gap-20">
              <div className="text-xl flex flex-col gap-6 border-zinc-200 border p-6 rounded-2xl mt-12">
                <p>
                  Te soa familiar ficar preso por horas tentando decifrar a
                  tecnologia sozinho ou arriscar que "os especialistas em
                  sistemas" estraguem seu site ou até mesmo o sequestrem?
                </p>
                <p>
                  … Ou você escuta palavras estranhas que te dão uma dor de
                  cabeça instantânea, como{' '}
                  <strong className="text-red-600">
                    {' '}
                    Persona, Email Marketing, Funil de Vendas, Landing Page,
                    SEO, Google Analytics, Google Search Console…
                  </strong>
                </p>
                <p>
                  … E a lista continua. E, claro, nada parece funcionar! Veja
                  bem, construir um negócio online sem seguir um processo
                  definido não vai te levar a lugar nenhum e você vai acabar
                  exausto, até demitindo pessoas…
                </p>
                <p>
                  Você não quer nada disso, certo? Então é hora de tomar uma
                  decisão crucial: trabalhar em uma estratégia de vendas
                  digitais para o seu negócio por apenas 60 dias.
                </p>
              </div>
              <div className=" w-300 hidden md:block">
                <img
                  className="h-90 md:h-70 mt-30  transition-transform duration-200 hover:scale-105"
                  src={'image-home.png'}
                  alt="img-app"
                />
                <h2 className="text-xl text-center text-zinc-900">
                  Seu negócio multiplataforma!
                </h2>
              </div>
            </div>
          </section>

          <section className=" shadow-2xl py-14 md:mt-20 p-5 rounded-3xl mb-30">
            <h1 className="text-3xl font-bold mb-10 text-center">
              Benefícios de uma estratégia comercial
            </h1>
            <div className="md:flex gap-6 text-xl ">
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Atraia Prospectos Qualificados
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Atraia os clientes PERFEITOS para o seu negócio sem perder
                  tempo com prospectos indecisos. Ensinamos as estratégias
                  exatas para encontrá-los online e convertê-los em compradores
                  leais que voltam sempre.
                </p>
              </div>
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Crie um Sistema Passo a Passo
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Implemente um sistema de vendas online PASSO A PASSO que
                  converta visitantes do seu site em clientes prontos para
                  comprar. Esqueça de ficar correndo atrás das pessoas e veja
                  suas vendas começarem a crescer de forma constante.
                </p>
              </div>
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Otimize seu tempo com ferramentas
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Libere tempo valioso automatizando tarefas repetitivas.
                  Mostramos como configurar ferramentas simples para que seu
                  negócio continue vendendo mesmo quando você estiver ocupado
                  com outras coisas importantes (ou aproveitando um merecido
                  descanso!).
                </p>
              </div>
            </div>
          </section>

          <section className="mx-2 md:mt-16 mb-32 lg:mb-40">
            <h2 className="text-3xl text-center font-bold text-zinc-800 px-4 md:px-0">
              As Estratégias Comerciais são a Chave para o Crescimento
              Sustentável de um Negócio como o seu…
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-10 lg:gap-20 mt-8 md:mt-12 p-4 md:p-0">
              <div className="text-xl max-w-full md:max-w-md lg:max-w-lg border-zinc-200 border p-6 rounded-2xl bg-white shadow-lg">
                <p>
                  Uma estratégia comercial é como um motor potente que
                  impulsiona seu negócio para frente de maneira quase
                  automática. Ela trabalha exclusivamente para atrair e captar
                  novos clientes, aumentar as vendas e manter uma base de
                  clientes leais, tudo enquanto você se concentra no que mais
                  importa: fazer seu negócio crescer.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 hidden md:block flex-shrink-0">
                <img
                  className="w-full h-auto max-h-96 md:max-h-72 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                  src={'./image-home2.jpg'}
                  alt="img-app"
                />
                <h2 className="text-xl text-center text-zinc-900 mt-4">
                  Alcance novos resultados!
                </h2>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  )
}
