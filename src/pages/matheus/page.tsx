import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Shield,
  Clock,
  Star,
  Users,
  Award,
  CheckCircle2,
  Play,
  Instagram,
  Building2,
  Scissors,
  Stethoscope
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { FadeIn } from '../../components/animated/fade-in';
import { StatsCounter } from '../../components/animated/stats-counter';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { RainbowButton } from '../../components/magicui/rainbow-button';
import { AuroraText } from '../../components/magicui/aurora-text';
import { MagicCard } from '../../components/magicui/magic-card';
import WhatsAppButtonMatheus from '../../components/ui/WhatsAppButtonMatheus';
import PromoBannerHome from '../../components/ui/PromoBannerHome';
import { SalesTopBar } from '../../components/ui/SalesTopBar';

export default function matheus() {
  const instagramData = {
    followers: '201K',
    posts: '1,234',
    following: '892'
  };

  const handlePayment = () => {
    // Rastrear conversão de pagamento
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17390047491/instrumentacao_pagamento',
        'value': 1.0,
        'currency': 'BRL'
      });
      
      gtag('event', 'purchase', {
        'transaction_id': 'instrumentacao_' + Date.now(),
        'value': 1.0,
        'currency': 'BRL',
        'items': [{
          'item_id': 'curso_instrumentacao',
          'item_name': 'Curso de Instrumentação Cirúrgica',
          'category': 'Educação',
          'quantity': 1
        }]
      });
    }
    
    window.open('https://pay.hotmart.com/V103802111P?checkoutMode=10', '_blank');
  };



  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Curso de Instrumentação Cirúrgica - 4 Especialidades",
      "description": "Curso completo de instrumentação cirúrgica com 360 horas certificadas. Especialidades em urologia, ginecologia, plástica e cirurgia geral. Cirurgias de vídeo e abertas.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Escola Urolaser",
        "url": window.location.origin,
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "instructor": {
        "@type": "Person",
        "name": "Marcelo - Instrumentandoo",
        "description": "Especialista e criador do perfil Instrumentandoo",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "educationalLevel": "Professional",
      "courseMode": "Online",
      "timeRequired": "P1M",
      "totalTime": "PT360H",
      "coursePrerequisites": "Conhecimento básico em área da saúde",
      "teaches": [
        "Instrumentação em Urologia",
        "Instrumentação em Ginecologia", 
        "Instrumentação em Cirurgia Plástica",
        "Instrumentação em Cirurgia Geral",
        "Cirurgias de Vídeo",
        "Cirurgias Abertas"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Curso de Instrumentação Cirúrgica",
        "description": "Curso completo com 360 horas certificadas em 4 especialidades",
        "availability": "https://schema.org/InStock",
        "price": "247.00",
        "priceCurrency": "BRL",
        "validFrom": "2025-01-01",
        "priceValidUntil": "2025-12-31"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const heroHighlights = [
    { icon: <Shield className="w-5 h-5" />, text: "360 horas certificadas" },
    { icon: <Clock className="w-5 h-5" />, text: "Acesso imediato" },
    { icon: <Play className="w-5 h-5" />, text: "100% online" }
  ];

  const problemPoints = [
    {
      title: "Medo de não saber por onde começar",
      description: "Muita gente quer entrar na área hospitalar, mas trava porque não entende a rotina do centro cirúrgico."
    },
    {
      title: "Insegurança por falta de prática e direção",
      description: "Sem uma explicação clara, a pessoa consome conteúdo solto e continua se sentindo perdida."
    },
    {
      title: "Receio de investir e não conseguir acompanhar",
      description: "Quem está começando precisa de um passo a passo simples, direto e sem complicação desnecessária."
    }
  ];

  const solutionPillars = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-400" />,
      title: "Do básico ao avançado",
      description: "Você aprende desde os fundamentos da instrumentação até o raciocínio necessário para atuar com mais segurança."
    },
    {
      icon: <Building2 className="w-6 h-6 text-blue-300" />,
      title: "Foco na rotina hospitalar",
      description: "O curso foi estruturado para aproximar você do dia a dia real de quem quer trabalhar em hospital."
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-300" />,
      title: "Certificado e direcionamento",
      description: "Além do conteúdo, você sai com um caminho mais claro para começar a construir sua atuação na área."
    }
  ];

  const outcomes = [
    {
      title: "Entender o papel do instrumentador",
      description: "Saiba como funciona a atuação dentro do centro cirúrgico e o que o mercado espera desse profissional."
    },
    {
      title: "Ganhar mais confiança",
      description: "Reduza a insegurança de quem está começando e tenha mais clareza sobre materiais, organização e fluxo cirúrgico."
    },
    {
      title: "Aprender especialidades importantes",
      description: "Estude conteúdos específicos de urologia, ginecologia e plástica dentro da mesma formação."
    },
    {
      title: "Se preparar para buscar oportunidades",
      description: "Construa base teórica, linguagem técnica e visão prática para se posicionar melhor no mercado."
    }
  ];

  const testimonials = [
    {
      name: "Juliana, 26 anos",
      role: "Entrou no curso sem experiência",
      text: "Eu queria trabalhar em hospital, mas não fazia ideia de como funcionava a instrumentação. O curso me deu direção e tirou aquela sensação de estar completamente perdida."
    },
    {
      name: "Renata, 32 anos",
      role: "Já era da área da saúde",
      text: "Eu precisava organizar meu conhecimento e entender melhor a rotina do centro cirúrgico. O conteúdo foi claro, objetivo e fácil de acompanhar."
    },
    {
      name: "Camila, 24 anos",
      role: "Buscava a primeira oportunidade",
      text: "O que mais me ajudou foi ter um caminho do básico ao avançado. Parei de consumir conteúdo solto e comecei a estudar com foco."
    },
    {
      name: "Patrícia, 29 anos",
      role: "Queria mais confiança",
      text: "Eu tinha medo de não conseguir entender os termos e os instrumentos. As aulas explicam de forma simples e prática, sem enrolação."
    }
  ];

  const modules = [
    {
      title: "Fundamentos da Instrumentação",
      items: [
        "Papel do instrumentador cirúrgico",
        "Montagem de mesa e organização",
        "Materiais, instrumentais e nomenclaturas"
      ]
    },
    {
      title: "Fluxo do Centro Cirúrgico",
      items: [
        "Rotina hospitalar e dinâmica da equipe",
        "Biossegurança e postura profissional",
        "Preparação para diferentes procedimentos"
      ]
    },
    {
      title: "Cirurgias de Vídeo",
      items: [
        "Laparoscopia",
        "Endoscopia",
        "Instrumentação em procedimentos minimamente invasivos"
      ]
    },
    {
      title: "Cirurgias Abertas",
      items: [
        "Técnicas clássicas",
        "Instrumentos especiais",
        "Organização e agilidade durante o procedimento"
      ]
    }
  ];

  const specialties = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Urologia",
      description: "Entenda os principais materiais, a lógica dos procedimentos e a organização da instrumentação nessa especialidade.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ginecologia",
      description: "Tenha clareza sobre os procedimentos ginecológicos e o suporte esperado do instrumentador em sala.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Plástica",
      description: "Aprenda a lógica da instrumentação em cirurgias plásticas com foco em organização, atenção e sequência.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Geral",
      description: "Construa uma base forte para entender a dinâmica da cirurgia geral e evoluir com mais segurança.",
      color: "from-green-500 to-green-600"
    }
  ];

  const objections = [
    {
      title: "“Não tenho experiência”",
      description: "O curso foi pensado justamente para quem está começando e precisa de uma base organizada."
    },
    {
      title: "“Tenho medo de não acompanhar”",
      description: "As aulas seguem uma linha simples e direta, para você aprender com clareza e sem se perder no processo."
    },
    {
      title: "“Não tenho muito tempo”",
      description: "Como o acesso é online, você pode assistir no seu ritmo e encaixar os estudos na sua rotina."
    },
    {
      title: "“E se eu me arrepender?”",
      description: "Você conta com garantia de 7 dias para avaliar o conteúdo com mais tranquilidade."
    }
  ];

  const guaranteeItems = [
    "Garantia de 7 dias",
    "Acesso imediato após a matrícula",
    "Conteúdo para estudar no seu ritmo",
    "Certificado ao concluir a formação"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 font-['Inter'] overflow-x-hidden">
      <SalesTopBar />
      <Section
        background="gradient"
        padding="xl"
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>

        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <FadeIn direction="up">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="flex flex-wrap gap-3 justify-center mb-4">
                  {heroHighlights.map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-2 text-sm"
                    >
                      {item.icon}
                      <span className="ml-2">{item.text}</span>
                    </Badge>
                  ))}
                </div>

                <div className="space-y-5 max-w-4xl mx-auto">
                  <Badge className="bg-green-500/20 text-green-300 border border-green-400/30 px-4 py-2 text-sm sm:text-base">
                    Turma aberta com acesso imediato
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Aprenda
                    {" "}
                    <AuroraText
                      className="text-4xl sm:text-5xl lg:text-7xl font-bold inline-block"
                      colors={["#00ff88", "#00d4ff", "#ff0080", "#ffaa00"]}
                    >
                      Instrumentação Cirúrgica
                    </AuroraText>
                    {" "}
                    e Especializações Incluídas
                  </h1>

                  <p className="text-lg sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    Um curso completo com
                    {" "}
                    <span className="font-semibold text-white">360 horas</span>,
                    {" "}especialidades em
                    {" "}
                    <span className="font-semibold text-white">urologia, ginecologia e plástica</span>
                    {" "}para quem quer se preparar para trabalhar em hospital com mais confiança.
                  </p>

                  <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                    Curso criado por
                    {" "}
                    <span className="font-semibold text-white">Marcelo, do @instrumentandoo</span>,
                    {" "}com uma didática simples, direta e pensada para reduzir a insegurança de quem está entrando na área.
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto"
                >
                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center mb-3">
                      <Award className="w-6 h-6 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">Formação Completa</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Você entende a base da instrumentação, a rotina hospitalar e como se posicionar melhor na área.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center mb-3">
                      <Building2 className="w-6 h-6 text-blue-300 mr-2" />
                      <span className="text-blue-200 font-semibold">Especialidades Relevantes</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Estude urologia, ginecologia e plástica dentro da mesma formação e amplie sua visão do mercado.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">Investimento Acessível</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Matricule-se hoje por
                      {" "}
                      <span className="font-semibold text-white">R$247,00 à vista</span>
                      {" "}ou em até
                      {" "}
                      <span className="font-semibold text-white">12x</span>.
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <RainbowButton
                    onClick={handlePayment}
                    className="h-14 px-8 text-lg font-bold w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    QUERO ME INSCREVER AGORA
                  </RainbowButton>

                  <div className="text-white/85 text-sm sm:text-base rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
                    Curso online • Acesso imediato • Certificado ao concluir
                  </div>
                </div>
              </motion.div>
            </FadeIn>

            <FadeIn direction="up" delay={0.28} className="mt-8">
              <div className="max-w-4xl mx-auto rounded-3xl border border-amber-300/25 bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-amber-950/20">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-300" />
                  <span className="text-amber-200 font-semibold uppercase tracking-wide text-sm">
                    Benefício Exclusivo Urolaser
                  </span>
                </div>
                <p className="text-white text-lg sm:text-2xl leading-relaxed font-medium">
                  Alunos da Urolaser têm direito a acompanhar
                  {" "}
                  <span className="font-bold">1 cirurgia presencial</span>
                  {" "}na sua cidade. Ao concluir o curso e pegar seu certificado, você informa
                  {" "}
                  <span className="font-bold">3 hospitais</span>
                  {" "}da sua região para avaliação.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.35} className="mt-10">
              <motion.div
                className="w-full max-w-4xl mx-auto"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MagicCard className="p-1 bg-gradient-to-br from-blue-600 to-green-600 shadow-2xl shadow-blue-950/30">
                  <iframe
                    src="https://drive.google.com/file/d/1-S9UTWvxoaJF8oGOixGi4OUz0IsFgDaW/preview"
                    className="w-full h-[360px] sm:h-[480px] lg:h-[620px] rounded-[20px]"
                    allow="autoplay"
                    title="Apresentação do Curso de Instrumentação Cirúrgica"
                  ></iframe>
                </MagicCard>
                <div className="mt-6 max-w-3xl mx-auto">
                  <PromoBannerHome onBuy={handlePayment} />
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800">
              Conheça o especialista
            </h2>

            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="text-white text-5xl" />
                </motion.div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Marcelo • @instrumentandoo</h3>
                <p className="text-xl text-blue-600 font-semibold mb-8">
                  Autoridade em Instrumentação Cirúrgica e referência para quem quer entrar na área com mais preparo
                </p>

                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Marcelo construiu sua autoridade ensinando instrumentação cirúrgica de forma clara, prática e sem promessas irreais.
                  O objetivo deste curso é ajudar quem está começando a sair da dúvida, entender a rotina hospitalar e estudar com direção.
                </p>

                <Card className="bg-white shadow-lg mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-6">
                      <Instagram className="text-pink-500 text-3xl mr-3" />
                      <a 
                        href="https://instagram.com/instrumentandoo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors cursor-pointer"
                      >
                        @instrumentandoo
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <StatsCounter 
                        value={instagramData.followers} 
                        label="Seguidores" 
                        delay={0.2}
                      />
                      <StatsCounter 
                        value={instagramData.posts} 
                        label="Posts" 
                        delay={0.4}
                      />
                      <StatsCounter 
                        value={instagramData.following} 
                        label="Seguindo" 
                        delay={0.6}
                      />
                    </div>

                    <RainbowButton
                      className="w-full sm:w-auto"
                    >
                      <a 
                        href="https://instagram.com/instrumentandoo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Seguir no Instagram
                      </a>
                    </RainbowButton>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <Building2 className="text-blue-500 text-2xl mx-auto mb-3" />
                    <span className="text-lg font-medium text-gray-800">Escola Urolaser</span>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <Award className="text-yellow-500 text-2xl mx-auto mb-3" />
                    <span className="text-lg font-medium text-gray-800">Conteúdo estruturado</span>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-md">
                    <Shield className="text-green-500 text-2xl mx-auto mb-3" />
                    <span className="text-lg font-medium text-gray-800">Direção para iniciantes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que normalmente trava quem quer entrar na área
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se você quer trabalhar em hospital, mas ainda se sente inseguro, isso não significa falta de capacidade.
              Na maioria das vezes, falta método, clareza e um caminho certo para estudar.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
            {problemPoints.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
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

          <div className="mt-10 flex justify-center">
            <RainbowButton onClick={handlePayment} className="px-10 py-5 text-lg font-bold">
              QUERO COMEÇAR COM DIREÇÃO
            </RainbowButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              A solução foi desenhada para te dar base e confiança
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Você não precisa de promessas milagrosas. Precisa de um curso sério, organizado e com linguagem fácil de entender.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-14">
            {solutionPillars.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
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

          <FadeIn className="text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Especialidades incluídas na formação
            </h3>
            <p className="text-blue-100 max-w-3xl mx-auto">
              Além da base completa da instrumentação, você estuda especialidades importantes para ampliar sua visão e se preparar melhor.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <MagicCard
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  gradientFrom="#9E7AFF"
                  gradientTo="#FE8BBB"
                  gradientColor="#ffffff"
                  gradientOpacity={0.1}
                >
                  <div className="p-6 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${specialty.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {specialty.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </MagicCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que você vai aprender e conquistar
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O curso foi construído para ajudar você a sair da curiosidade e entrar em uma rotina de estudo que realmente faça sentido.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {outcomes.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="h-full border-slate-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <RainbowButton onClick={handlePayment} className="px-10 py-5 text-lg font-bold">
              QUERO APRENDER COM MAIS CONFIANÇA
            </RainbowButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800 text-center">
              Relatos de perfis comuns de alunos do curso
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Abaixo estão exemplos de depoimentos realistas que representam perfis frequentes de pessoas que procuram a formação:
              iniciantes, profissionais da área da saúde e quem busca mais confiança para entrar no ambiente hospitalar.
            </p>

            <div className="grid gap-6 md:grid-cols-2 mb-14">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <Card className="h-full shadow-sm border-slate-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4 text-yellow-500">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed mb-5">"{testimonial.text}"</p>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/historico-escolar-v2.jpg"
                  alt="Histórico Escolar: grade escolar e verso do certificado do aluno"
                  className="w-full h-auto"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Certificado e estrutura do curso</h3>
                  <p className="text-gray-700 text-lg text-center lg:text-center">
                    Esta imagem apresenta a grade curricular do curso e o verso do certificado do aluno — o Histórico
                    Escolar. Você encontra os conteúdos básicos, avançados e práticos, além de módulos por vídeo em
                    Urologia, Ginecologia e Plástica. É a comprovação de um programa completo, com <span className="font-semibold">360 horas certificadas</span>
                    e formação reconhecida.
                  </p>
                  <p className="text-gray-700 text-lg mt-4 text-center lg:text-center">
                    Se você quer atuar com segurança e destaque como instrumentador(a) cirúrgico(a), faça sua matrícula
                    agora e garanta sua vaga.
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

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como o conteúdo foi organizado
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O curso não foi montado para confundir. Ele segue uma linha lógica para você entender primeiro a base e depois avançar com mais segurança.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <FadeIn key={index} delay={index * 0.1}>
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

          <div className="mt-10 flex justify-center">
            <RainbowButton onClick={handlePayment} className="px-10 py-5 text-lg font-bold">
              VER A OFERTA E ME INSCREVER
            </RainbowButton>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quebrando as objeções mais comuns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Se você está em dúvida, provavelmente está pensando em uma dessas coisas aqui:
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {objections.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sua oportunidade de começar com um investimento acessível
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Se o seu objetivo é sair da insegurança, estudar com direcionamento e se preparar para buscar oportunidades na área hospitalar,
              essa formação foi feita para você.
            </p>

            <div className="grid gap-6 md:grid-cols-2 items-center max-w-5xl mx-auto text-left">
              <Card className="shadow-xl border-green-100">
                <CardContent className="p-8 space-y-5">
                  <div className="text-center md:text-left">
                    <div className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">Oferta da turma atual</div>
                    <div className="text-4xl font-bold text-gray-900">R$247,00</div>
                    <div className="text-lg text-gray-600">ou em até 12x no cartão</div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Curso completo de Instrumentação Cirúrgica</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>360 horas certificadas</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Especialidades em urologia, ginecologia e plástica</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span>Acesso imediato após a matrícula</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-center md:justify-start">
                    <RainbowButton onClick={handlePayment} className="px-10 py-5 text-lg font-bold">
                      GARANTIR MINHA VAGA
                    </RainbowButton>
                  </div>
                </CardContent>
              </Card>

              <div className="max-w-3xl mx-auto w-full">
                <PromoBannerHome onBuy={handlePayment} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Garantia para você comprar com mais tranquilidade
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Você não precisa decidir no escuro. Ao entrar, você pode avaliar a formação com calma.
            </p>

            <Card className="border-green-100 shadow-xl bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8 lg:p-10">
                <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Garantia de 7 dias</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  Você tem 7 dias para entrar, assistir às primeiras aulas e entender se o curso faz sentido para o seu momento.
                  Isso reduz o risco da compra e ajuda você a decidir com mais segurança.
                </p>

                <div className="grid gap-4 md:grid-cols-2 max-w-3xl mx-auto text-left">
                  {guaranteeItems.map((item) => (
                    <div key={item} className="flex items-start bg-white rounded-2xl p-4 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
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
                Se você quer parar de se sentir perdido e começar com direção, esse é o momento
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A decisão não é sobre promessas milagrosas. É sobre estudar com método, clareza e foco para construir sua entrada na área hospitalar.
              </p>

              <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, text: "Acesso imediato" },
                  { icon: <Award className="w-6 h-6" />, text: "360 horas certificadas" },
                  { icon: <Star className="w-6 h-6" />, text: "R$247,00 ou 12x" }
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                      <span className="text-green-400 mr-3">{item.icon}</span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <RainbowButton
                  onClick={handlePayment}                  
                  className="group text-lg px-12 py-6"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  QUERO GARANTIR MINHA VAGA
                </RainbowButton>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gray-400">
              © 2025 Escola Urolaser - Curso de Instrumentação Cirúrgica. Todos os direitos reservados. | 
              <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
                Powered by Readdy
              </a>
            </p>
          </FadeIn>
        </div>
      </footer>

      {/* WhatsApp Button específico para página Home */}
      <WhatsAppButtonMatheus />
    </div>
  );
}

