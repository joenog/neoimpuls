import Banner from '../../components/banner';
import Container from '../../components/container';
import { MdWeb, MdOutlineDashboard, MdBusinessCenter, MdAutorenew, MdCampaign, MdCloudDone } from 'react-icons/md';

export default function Home() {
  return (
    <>
      <Banner />
      <div className="w-full">
        <Container>
          <section className="mx-2 md:mt-16 mb-30">
            <h2 className="text-2xl text-center font-bold text-zinc-800">
              Chega de perder tempo. Assuma o controle do seu negócio na era digital.
            </h2>
            <div className="flex gap-20">
              <div className="text-xl flex flex-col gap-6 border-zinc-200 border p-6 rounded-2xl mt-12">
                <p>
                  Já se pegou horas tentando entender tecnologia sozinho, ou confiando em “especialistas” que acabam bagunçando seu site — ou pior, sequestrando ele?
                </p>
                <p>
                  … E aquelas palavras que parecem feitiços: 
                  <strong className="text-red-600">
                    Persona, Email Marketing, Funil de Vendas, Landing Page, SEO, Google Analytics, Google Search Console…
                  </strong>
                </p>
                <p>
                  … A lista não para. E claro, nada parece funcionar. Sem um processo claro, seu negócio online vira um labirinto — e você acaba exausto, frustrado e até demitindo pessoas.
                </p>
                <p>
                  Mas você não quer isso, certo? Então chegou a hora de tomar uma decisão estratégica: construir uma máquina de vendas digitais em apenas 60 dias.
                </p>
              </div>
              <div className="w-300 hidden md:block">
                <img
                  className="h-90 md:h-70 mt-30 transition-transform duration-200 hover:scale-105"
                  src={'image-home.png'}
                  alt="img-app"
                />
                <h2 className="text-xl text-center text-zinc-900">
                  Seu negócio multiplataforma!
                </h2>
              </div>
            </div>
          </section>

          <section className="mx-2 md:mt-20 mb-20">
            <h2 className="text-2xl md:text-2xl text-center font-bold text-zinc-800 mb-8">
              Soluções que Transformam Resultados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base md:text-lg">
              {[
                {
                  icon: <MdOutlineDashboard size={32} className="text-red-500 mb-2" />,
                  title: 'Landing Pages',
                  desc: 'Páginas de alta conversão para capturar leads e gerar oportunidades reais.'
                },
                {
                  icon: <MdWeb size={32} className="text-blue-500 mb-2" />,
                  title: 'Sites Profissionais',
                  desc: 'Sites modernos e responsivos que transmitem credibilidade e atraem clientes.'
                },
                {
                  icon: <MdBusinessCenter size={32} className="text-green-500 mb-2" />,
                  title: 'Sistemas Empresariais',
                  desc: 'Soluções sob medida para gestão e escalabilidade do seu negócio.'
                },
                {
                  icon: <MdAutorenew size={32} className="text-purple-500 mb-2" />,
                  title: 'Automatizações',
                  desc: 'Automatize tarefas repetitivas e ganhe tempo para o que importa.'
                },
                {
                  icon: <MdCampaign size={32} className="text-yellow-500 mb-2" />,
                  title: 'Marketing Digital',
                  desc: 'Posicione sua marca, atraia clientes e aumente suas vendas online.'
                },
                {
                  icon: <MdCloudDone size={32} className="text-cyan-600 mb-2" />,
                  title: 'Hospedagem',
                  desc: 'Hospedagem segura e rápida para manter seu site sempre online.'
                }
              ].map((service, index) => (
                <div
                  key={index}
                  className="border border-zinc-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center bg-white"
                >
                  {service.icon}
                  <h3 className="font-bold mb-1">{service.title}</h3>
                  <p className="text-sm md:text-base text-zinc-700">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="shadow-2xl py-14 md:mt-20 p-5 rounded-3xl mb-30">
            <h1 className="text-2xl font-bold mb-10 text-center">
              Benefícios de uma estratégia comercial
            </h1>
            <div className="md:flex gap-6 text-xl">
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Atraia Prospectos Qualificados
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Atraia os clientes CERTOS para o seu negócio e pare de perder tempo com curiosos indecisos. Você vai aprender as estratégias exatas para encontrá-los online e transformá-los em compradores fiéis.
                </p>
              </div>
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Crie um Sistema Passo a Passo
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Crie um sistema de vendas online que guia seus visitantes até a compra — passo a passo. Esqueça a correria atrás de clientes e veja suas vendas crescerem de forma previsível.
                </p>
              </div>
              <div>
                <h2 className="block my-4 font-bold text-center">
                  Otimize seu tempo com ferramentas
                </h2>
                <p className="p-4 border-1 rounded-2xl border-zinc-200">
                  Ganhe tempo automatizando tarefas repetitivas. Vamos te mostrar como configurar ferramentas simples para que seu negócio continue vendendo — mesmo quando você estiver descansando ou focado em outras prioridades.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-2 md:mt-16 mb-32 lg:mb-40">
            <h2 className="text-2xl text-center font-bold text-zinc-800 px-4 md:px-0">
              As Estratégias Comerciais são a Chave para o Crescimento Sustentável de um Negócio como o seu…
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:gap-10 lg:gap-20 mt-8 md:mt-12 p-4 md:p-0">
              <div className="text-xl max-w-full md:max-w-md lg:max-w-lg border-zinc-200 border p-6 rounded-2xl bg-white shadow-lg">
                <p>
                  Uma estratégia comercial bem definida é como um motor potente que impulsiona seu negócio. Ela atrai clientes, aumenta vendas e constrói uma base fiel — tudo isso enquanto você foca no que realmente importa: crescer.
                </p>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0 hidden md:block flex-shrink-0">
                <img
                  className="w-full h-auto max-h-96 md:max-h-72 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                  src={'./image-home2.png'}
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
  );
}
