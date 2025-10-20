import Banner from '../../components/banner';
import Container from '../../components/container';
import {
  MdWeb,
  MdOutlineDashboard,
  MdBusinessCenter,
  MdAutorenew,
  MdCampaign,
  MdCloudDone
} from 'react-icons/md';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Seção Banner */}
      <section id='topo' className="snap-start h-screen flex items-center justify-center">
        <Banner />
      </section>

      {/* Seção Introdução */}
      <section className="snap-start h-screen flex items-center justify-center px-2">
        <Container>
          <div className="mx-2 mb-30">
            <h2 className="text-2xl text-center font-bold text-zinc-800 lg:mt-20">
              Assuma o controle do seu negócio na era digital.
            </h2>
            <div className="flex gap-20 flex-col md:flex-row">
              <div className="text-md flex flex-col gap-6 p-6 mt-8 md:mt-12 border border-zinc-200 rounded-xl">
                <p>
                  Você já perdeu horas tentando entender tecnologia sozinho? Ou confiou em “especialistas” que só complicaram seu site — ou pior, tomaram conta dele? E aquelas palavras estranhas — <strong className='text-red-700'>Persona, Email Marketing, Funil de Vendas, Landing Page, SEO</strong> — só aumentam a confusão.
                </p>
                <p>
                  Sem um plano claro, seu negócio online vira um labirinto. Nada parece funcionar, e você acaba exausto, frustrado e até precisando cortar equipe. A sensação é de estar sempre correndo atrás, sem sair do lugar.
                </p>
                <p>
                  Sem um plano claro, seu negócio online vira um labirinto. Nada parece funcionar, e você acaba exausto, frustrado e até precisando cortar equipe. A sensação é de estar sempre correndo atrás, sem sair do lugar.
                </p>
              </div>
              <div className="w-200 hidden md:flex flex-col">
                <img
                  className="mt-20 transition-transform duration-200 hover:scale-105"
                  src={'image-home.png'}
                  alt="img-app"
                />
                <h2 className="text-md text-center text-zinc-900">
                  Projetos multiplataforma!
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção Soluções */}
      <section className="snap-start h-screen flex items-center justify-center px-2">
        <Container>
          <div className="mx-2 md:mt-16 mb-32 lg:mb-40">
            <h2 className="text-2xl md:text-2xl text-center font-bold text-zinc-800 mb-8 mt-16">
              Melhores Soluções
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base md:text-lg">
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
          </div>
        </Container>
      </section>

      {/* Seção Benefícios */}
      <section className="snap-start h-screen flex items-center justify-center px-2">
        <Container>
          <div className="mx-2 md:mt-16 mb-32 lg:mb-40">
            <h1 className="text-2xl font-bold mb-10 text-center">
              Estratégia Comercial
            </h1>
            <div className="md:flex gap-6 text-md">
              {[
                {
                  title: 'Atraia Prospectos Qualificados',
                  desc: 'Atraia os clientes CERTOS para o seu negócio e pare de perder tempo com curiosos indecisos. Você vai aprender as estratégias exatas para encontrá-los online e transformá-los em compradores fiéis.'
                },
                {
                  title: 'Crie um Sistema Passo a Passo',
                  desc: 'Crie um sistema de vendas online que guia seus visitantes até a compra — passo a passo. Esqueça a correria atrás de clientes e veja suas vendas crescerem de forma previsível.'
                },
                {
                  title: 'Otimize seu tempo com ferramentas',
                  desc: 'Ganhe tempo automatizando tarefas repetitivas. Vamos te mostrar como configurar ferramentas simples para que seu negócio continue vendendo — mesmo quando você estiver descansando ou focado em outras prioridades.'
                }
              ].map((item, index) => (
                <div key={index}>
                  <h2 className="block my-4 font-bold text-center">{item.title}</h2>
                  <p className="p-3 border-1 rounded-2xl border-zinc-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Seção Estratégia Comercial */}
      <section className="snap-start h-screen flex items-center justify-center px-2">
        <Container>
          <div className="mx-2 md:mt-16 mb-32 lg:mb-40">
            <h2 className="text-2xl md:text-2xl text-center font-bold text-zinc-800 mb-8 mt-16">
              Nossos Clientes
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-base md:text-lg">
              {[
                {
                  icon: <MdOutlineDashboard size={32} className="text-red-500 mb-2" />,
                  title: 'SAMU Pflegedienst',
                  desc: 'Serviços de enfermagem ALEMÂO, localizada em Wuppertal ao norte da Alemanha.'
                },
                {
                  icon: <MdWeb size={32} className="text-blue-500 mb-2" />,
                  title: 'Alho e Amor',
                  desc: 'Restaurante de Comida caseira, localizado no sul da Bahia.'
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

          </div>
        </Container>
      </section>
      <section className="snap-start h-screen flex items-center justify-center px-2 bg-[#162556]">
        <Footer />
      </section>
    </div>
  );
}
