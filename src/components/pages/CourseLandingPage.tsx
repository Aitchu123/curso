import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Building2,
  CheckCircle2,
  Clock,
  Heart,
  Play,
  Scissors,
  Shield,
  Star,
  Stethoscope,
} from 'lucide-react';

import { FadeIn } from '../animated/fade-in';
import { Badge } from '../ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { AuroraText } from '../magicui/aurora-text';
import { MagicCard } from '../magicui/magic-card';
import { RainbowButton } from '../magicui/rainbow-button';
import InstagramAuthorityCard from '../ui/InstagramAuthorityCard';
import PromoBannerHome from '../ui/PromoBannerHome';
import { SalesTopBar } from '../ui/SalesTopBar';
import WhatsAppButtonFoguete from '../ui/WhatsAppButtonFoguete';

type CourseLandingPageProps = {
  checkoutUrl: string;
  showWhatsApp?: boolean;
};

const heroHighlights = [
  { icon: <Shield className="w-5 h-5" />, text: '360 horas certificadas' },
  { icon: <Clock className="w-5 h-5" />, text: 'Acesso imediato' },
];

const problemPoints = [
  {
    title: 'Medo de nao saber por onde comecar',
    description: 'Muita gente quer entrar na area hospitalar, mas trava porque nao entende a rotina do centro cirurgico.',
  },
  {
    title: 'Inseguranca por falta de pratica e direcao',
    description: 'Sem um metodo claro, a pessoa consome conteudo solto e continua se sentindo perdida.',
  },
  {
    title: 'Receio de investir e nao conseguir acompanhar',
    description: 'Quem esta comecando precisa de um passo a passo simples, direto e sem complicacao desnecessaria.',
  },
];

const solutionPillars = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
    title: 'Do basico ao avancado',
    description: 'Voce aprende os fundamentos da instrumentacao e evolui com uma linha de estudo organizada.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-blue-300" />,
    title: 'Foco na rotina hospitalar',
    description: 'O conteudo aproxima voce da pratica real de quem quer trabalhar com mais seguranca no centro cirurgico.',
  },
  {
    icon: <Award className="w-6 h-6 text-yellow-300" />,
    title: 'Certificado e direcionamento',
    description: 'Voce sai com formacao estruturada, linguagem tecnica e mais clareza para buscar oportunidades.',
  },
];

const modules = [
  {
    title: 'Fundamentos da Instrumentacao',
    items: [
      'Papel do instrumentador cirurgico',
      'Montagem de mesa e organizacao',
      'Materiais, instrumentais e nomenclaturas',
    ],
  },
  {
    title: 'Fluxo do Centro Cirurgico',
    items: [
      'Rotina hospitalar e dinamica da equipe',
      'Biosseguranca e postura profissional',
      'Preparacao para diferentes procedimentos',
    ],
  },
  {
    title: 'Cirurgias de Video',
    items: [
      'Laparoscopia',
      'Endoscopia',
      'Instrumentacao em procedimentos minimamente invasivos',
    ],
  },
  {
    title: 'Cirurgias Abertas',
    items: [
      'Tecnicas classicas',
      'Instrumentos especiais',
      'Organizacao e agilidade durante o procedimento',
    ],
  },
];

const specialties = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: 'Urologia',
    description: 'Aprenda a logica dos procedimentos, materiais e organizacao da instrumentacao nessa especialidade.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Ginecologia',
    description: 'Entenda os principais fluxos cirurgicos e o suporte esperado do instrumentador em sala.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Plastica',
    description: 'Veja sequencia, organizacao e atencao aos detalhes em procedimentos de cirurgia plastica.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Cirurgia Geral',
    description: 'Construa uma base forte para entender a dinamica da cirurgia geral e atuar com mais confianca.',
    color: 'from-green-500 to-green-600',
  },
];

const objections = [
  {
    title: '"Nao tenho experiencia"',
    description: 'O curso foi pensado justamente para quem esta comecando e precisa de uma base organizada.',
  },
  {
    title: '"Tenho medo de nao acompanhar"',
    description: 'As aulas seguem uma linha simples e direta, para voce aprender com clareza e sem se perder.',
  },
  {
    title: '"Nao tenho muito tempo"',
    description: 'Como o acesso e online, voce assiste no seu ritmo e encaixa os estudos na sua rotina.',
  },
  {
    title: '"Nao sei se isso serve para mim"',
    description: 'A formacao ajuda quem quer sair da duvida e entender melhor a realidade da instrumentacao cirurgica.',
  },
];

declare const gtag:
  | ((command: string, eventName: string, params?: Record<string, unknown>) => void)
  | undefined;

export default function CourseLandingPage({ checkoutUrl, showWhatsApp = false }: CourseLandingPageProps) {
  const handlePayment = () => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        send_to: 'AW-17390047491/instrumentacao_pagamento',
        value: 1.0,
        currency: 'BRL',
      });

      gtag('event', 'begin_checkout', {
        currency: 'BRL',
        value: 247.0,
        items: [
          {
            item_id: 'curso_instrumentacao',
            item_name: 'Curso de Instrumentacao Cirurgica',
            category: 'Educacao',
            quantity: 1,
          },
        ],
      });
    }

    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: 'Curso de Instrumentacao Cirurgica - 4 Especialidades',
      description:
        'Curso completo de instrumentacao cirurgica com 360 horas certificadas em urologia, ginecologia, plastica e cirurgia geral.',
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Escola Urolaser',
        url: window.location.origin,
        sameAs: 'https://instagram.com/instrumentandoo',
      },
      instructor: {
        '@type': 'Person',
        name: 'Marcelo Loschi',
        sameAs: 'https://instagram.com/instrumentandoo',
      },
      courseMode: 'Online',
      totalTime: 'PT360H',
      offers: {
        '@type': 'Offer',
        name: 'Curso de Instrumentacao Cirurgica',
        price: '247.00',
        priceCurrency: 'BRL',
        availability: 'https://schema.org/InStock',
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SalesTopBar onBuy={handlePayment} />

      <Section className="relative overflow-hidden bg-gradient-to-br from-[#071B3C] via-[#0C2D63] to-[#0D6E5D] text-white py-16 lg:py-24">
        <Container>
          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <FadeIn>
              <Badge className="bg-white/10 text-white border-white/20 mb-6">Curso online com certificado</Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight mb-6">
                Saia da duvida e entre na area com uma
                <br />
                <AuroraText>formacao completa em Instrumentacao Cirurgica</AuroraText>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Aprenda com metodo, clareza e autoridade validada no Instagram. Estude 4 especialidades e tenha mais
                confianca para buscar sua primeira oportunidade.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.1} className="mt-10">
              <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto">
                {heroHighlights.map((item) => (
                  <div key={item.text} className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center gap-2 text-green-300 font-semibold mb-2">
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base">
                      Formacao objetiva para quem quer sair da duvida e estudar com mais clareza e confianca.
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="mt-10">
              <div className="max-w-3xl mx-auto">
                <PromoBannerHome onBuy={handlePayment} />
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.35} className="mt-10">
              <motion.div
                className="w-full max-w-4xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MagicCard className="p-1 bg-gradient-to-br from-blue-600 to-green-600 shadow-2xl shadow-blue-950/30">
                  <iframe
                    src="https://drive.google.com/file/d/1-S9UTWvxoaJF8oGOixGi4OUz0IsFgDaW/preview"
                    className="w-full h-[360px] sm:h-[480px] lg:h-[620px] rounded-[20px]"
                    allow="autoplay"
                    title="Apresentacao do Curso de Instrumentacao Cirurgica"
                  />
                </MagicCard>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Conheca o especialista</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Em vez de usar um icone generico, a pagina agora mostra o perfil real do Marcelo, com foto redonda,
              selo de verificacao e numeros do Instagram para reforcar autoridade e confianca.
            </p>
            <InstagramAuthorityCard />
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">O que trava quem quer entrar na area</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Falta de metodo, inseguranca e excesso de informacao solta fazem muita gente desistir antes de comecar.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {problemPoints.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="h-full border-red-100 shadow-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-4 mx-auto">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                    <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Uma formacao feita para dar base e confianca</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Sem promessas exageradas. Com conteudo serio, organizado e facil de acompanhar.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-14">
            {solutionPillars.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="h-full bg-white/10 border-white/15 backdrop-blur-sm text-white">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/85 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="text-center">
            <RainbowButton onClick={handlePayment} className="px-10 py-5 text-lg font-bold">
              QUERO COMECAR COM DIRECAO
            </RainbowButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Especialidades trabalhadas no curso</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Voce estuda urologia, ginecologia, plastica e cirurgia geral em uma mesma formacao.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
            {specialties.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="h-full overflow-hidden border-0 shadow-lg">
                  <div className={`bg-gradient-to-r ${item.color} p-6 text-white`}>
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Como o conteudo foi organizado</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O curso segue uma linha logica para voce aprender a base primeiro e avancar com mais seguranca.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <FadeIn key={module.title} delay={index * 0.1}>
                <Card className="h-full shadow-sm border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {module.items.map((item) => (
                      <div key={item} className="flex items-start text-gray-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Veja a estrutura da formacao e do certificado</h2>
              <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
                Sai o bloco com depoimentos de exemplo e entra uma prova visual da grade e do certificado para aumentar
                a clareza e a confianca antes da compra.
              </p>
            </div>

            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/historico-escolar-v2.jpg"
                  alt="Grade do curso e verso do certificado"
                  className="w-full h-auto"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Certificado e grade curricular</h3>
                  <p className="text-gray-700 text-lg text-center">
                    A imagem mostra a estrutura da formacao, com conteudos basicos, avancados e modulos praticos em 4
                    especialidades. Isso reforca que o curso tem metodo, carga horaria e proposta clara.
                  </p>

                  <div className="mt-6 flex justify-center">
                    <RainbowButton onClick={handlePayment} className="group text-lg px-10 py-5">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      INSCREVER-SE AGORA
                    </RainbowButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Quebrando as objecoes mais comuns</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se voce esta em duvida, provavelmente esta pensando em uma destas perguntas.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {objections.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sua oportunidade de comecar com um investimento acessivel</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Se o seu objetivo e sair da inseguranca, estudar com direcionamento e se preparar para buscar oportunidades,
              essa formacao foi feita para voce.
            </p>

            <div className="grid gap-6 md:grid-cols-2 items-center max-w-5xl mx-auto text-left">
              <Card className="shadow-xl border-green-100">
                <CardContent className="p-8 space-y-5">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">Oferta da turma atual</div>
                    <div className="text-4xl font-black text-gray-900">R$ 247,00</div>
                    <div className="text-gray-500 line-through">de R$ 377,00</div>
                  </div>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                      <span>12x de R$ 24,00 no cartao</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                      <span>360 horas certificadas</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                      <span>4 especialidades na mesma formacao</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                      <span>Acesso imediato e garantia de 7 dias</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <div className="rounded-3xl bg-white border border-slate-200 p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">O que voce leva agora</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Curso completo de instrumentacao cirurgica</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Conteudo em urologia, ginecologia, plastica e cirurgia geral</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Certificado ao concluir</span>
                    </div>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto w-full">
                  <PromoBannerHome onBuy={handlePayment} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Se voce quer parar de se sentir perdido e comecar com direcao, esse e o momento
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A decisao nao e sobre promessas milagrosas. E sobre estudar com metodo, clareza e foco para construir
                sua entrada na area hospitalar.
              </p>

              <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, text: 'Acesso imediato' },
                  { icon: <Award className="w-6 h-6" />, text: '360 horas certificadas' },
                  { icon: <Star className="w-6 h-6" />, text: 'R$247,00 ou 12x' },
                ].map((item, index) => (
                  <FadeIn key={item.text} delay={index * 0.1}>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                      <span className="text-green-400 mr-3">{item.icon}</span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <RainbowButton onClick={handlePayment} className="group text-lg px-12 py-6">
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                QUERO GARANTIR MINHA VAGA
              </RainbowButton>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gray-400">© 2025 Escola Urolaser - Curso de Instrumentacao Cirurgica. Todos os direitos reservados.</p>
          </FadeIn>
        </div>
      </footer>

      {showWhatsApp ? <WhatsAppButtonFoguete /> : null}
    </div>
  );
}
