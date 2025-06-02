import Banner from '../../components/banner'
import Container from '../../components/container'

export default function Home() {
  return (
    <>
      <Banner />
      <div className="w-full">
        <Container>
          <section>
            <h2 className="text-3xl text-center my-2 font-bold">
              Pare de perder tempo e Assuma o controle do seu negócio na era
              digital
            </h2>
            <div className="flex gap-8">
              <div className="text-xl flex flex-col gap-6">
                <p className="mt-14">
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
              <div className="ml-20 w-500 hidden md:block">
                <img className=" h-90 mt-30" src={'image-home.png'} alt="" />
                <h2 className="text-xl text-center text-zinc-900">
                  Seu negócio multiplataforma!
                </h2>
              </div>
            </div>
          </section>

          <section className="py-20 shadow-2xl my-40 md:mt-20 p-5 rounded-3xl">
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
        </Container>
      </div>
    </>
  )
}
