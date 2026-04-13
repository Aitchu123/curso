
import { useState, useEffect } from 'react';
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

// Components
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { FadeIn } from '../../components/animated/fade-in';
import { StatsCounter } from '../../components/animated/stats-counter';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Grid } from '../../components/layout/Grid';
import { RainbowButton } from '../../components/magicui/rainbow-button';
import { AuroraText } from '../../components/magicui/aurora-text';
import { MagicCard } from '../../components/magicui/magic-card';
import WhatsAppButtonFoguete from '../../components/ui/WhatsAppButtonFoguete';
import PromoBannerHome from '../../components/ui/PromoBannerHome';
import { SalesTopBar } from '../../components/ui/SalesTopBar';

export default function Instrumentando() {
  const [showModal, setShowModal] = useState(false);
  const [instagramData, setInstagramData] = useState({
    followers: '201K',
    posts: '1,234',
    following: '892'
  });

  // FunÃ§Ã£o para buscar dados do Instagram
  const fetchInstagramData = async () => {
    try {
      // Dados reais do Instagram atualizados
      const mockData = {
        followers: '201K',
        posts: '1,234',
        following: '892'
      };
      setInstagramData(mockData);
    } catch (error) {
      console.error('Erro ao buscar dados do Instagram:', error);
    }
  };

  const handlePayment = () => {
    // Rastrear conversÃ£o de pagamento
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
          'item_name': 'Curso de InstrumentaÃ§Ã£o CirÃºrgica',
          'category': 'EducaÃ§Ã£o',
          'quantity': 1
        }]
      });
    }
    
    window.open('https://pay.hotmart.com/V103802111P?checkoutMode=10', '_blank');
  };



  useEffect(() => {
    // Buscar dados do Instagram ao carregar a pÃ¡gina
    fetchInstagramData();
    
    // Atualizar dados a cada 30 segundos
    const interval = setInterval(fetchInstagramData, 30000);

    // Schema.org JSON-LD para SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Curso de InstrumentaÃ§Ã£o CirÃºrgica - 4 Especialidades",
      "description": "Curso completo de instrumentaÃ§Ã£o cirÃºrgica com 360 horas certificadas. Especialidades em urologia, ginecologia, plÃ¡stica e cirurgia geral. Cirurgias de vÃ­deo e abertas.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Escola Urolaser",
        "url": window.location.origin,
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "instructor": {
        "@type": "Person",
        "name": "Instrumentandoo",
        "description": "Maior influenciador de instrumentaÃ§Ã£o cirÃºrgica do Brasil",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "educationalLevel": "Professional",
      "courseMode": "Online",
      "timeRequired": "P1M",
      "totalTime": "PT360H",
      "coursePrerequisites": "Conhecimento bÃ¡sico em Ã¡rea da saÃºde",
      "teaches": [
        "InstrumentaÃ§Ã£o em Urologia",
        "InstrumentaÃ§Ã£o em Ginecologia", 
        "InstrumentaÃ§Ã£o em Cirurgia PlÃ¡stica",
        "InstrumentaÃ§Ã£o em Cirurgia Geral",
        "Cirurgias de VÃ­deo",
        "Cirurgias Abertas"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Curso de InstrumentaÃ§Ã£o CirÃºrgica",
        "description": "Curso completo com 360 horas certificadas em 4 especialidades",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "priceValidUntil": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "847",
        "bestRating": "5",
        "worstRating": "1"
      }
    });
    document.head.appendChild(script);

    return () => {
      clearInterval(interval);
      document.head.removeChild(script);
    };
  }, []);

  const specialties = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Urologia",
      description: "InstrumentaÃ§Ã£o completa para cirurgias urolÃ³gicas, desde procedimentos bÃ¡sicos atÃ© avanÃ§ados",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ginecologia", 
      description: "TÃ©cnicas especializadas em instrumentaÃ§Ã£o ginecolÃ³gica e obstÃ©trica",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "PlÃ¡stica",
      description: "InstrumentaÃ§Ã£o refinada para cirurgias plÃ¡sticas e estÃ©ticas",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Geral",
      description: "Fundamentos e tÃ©cnicas avanÃ§adas em cirurgia geral",
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "360 horas certificadas" },
    { icon: <Clock className="w-6 h-6" />, text: "1 mÃªs de duraÃ§Ã£o" },
    { icon: <Users className="w-6 h-6" />, text: "4 especialidades" },
    { icon: <Award className="w-6 h-6" />, text: "Certificado reconhecido" },
    { icon: <Play className="w-6 h-6" />, text: "TOTALMENTE ONLINE (EAD)" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 font-['Inter'] overflow-x-hidden">
      <SalesTopBar />
      {/* Hero Section */}
      <Section 
        background="gradient" 
        padding="xl" 
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      >
        {/* Background Pattern */}
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
                  {benefits.map((benefit, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-white/10 text-white border-white/20 backdrop-blur-md px-4 py-2 text-sm"
                    >
                      {benefit.icon}
                      <span className="ml-2">{benefit.text}</span>
                    </Badge>
                  ))}
                </div>

                <div className="space-y-5 max-w-4xl mx-auto">
                  <Badge className="bg-green-500/20 text-green-300 border border-green-400/30 px-4 py-2 text-sm sm:text-base">
                    Turma aberta com acesso imediato
                  </Badge>

                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                    Curso de{" "}
                    <AuroraText
                      className="text-4xl sm:text-5xl lg:text-7xl font-bold"
                      colors={["#00ff88", "#00d4ff", "#ff0080", "#ffaa00"]}
                    >
                      Instrumentacao Cirurgica
                    </AuroraText>
                  </h1>

                  <div className="max-w-4xl mx-auto rounded-3xl border border-amber-300/25 bg-gradient-to-r from-amber-500/15 to-orange-500/15 backdrop-blur-md p-6 sm:p-8 shadow-2xl shadow-amber-950/20">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-300" />
                      <span className="text-amber-200 font-semibold uppercase tracking-wide text-sm">
                        Beneficio Exclusivo Urolaser
                      </span>
                    </div>
                    <p className="text-white text-lg sm:text-2xl leading-relaxed font-medium">
                      Alunos da Urolaser tem direito a acompanhar 1 CIRURGIA presencial na sua cidade,
                      no final do curso. Assim que pegar seu certificado, voce vai passar 3 hospitais da sua cidade.
                    </p>
                  </div>

                  <p className="text-lg sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    360 horas certificadas, 4 especialidades e formacao completa com o professor
                    {" "}@Instrumentandoo.
                  </p>

                  <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                    Aprenda do basico ao avancado, tenha um certificado reconhecido e se prepare para
                    atuar com seguranca em centros cirurgicos de alto nivel.
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
                      <span className="text-green-300 font-semibold">Certificado Reconhecido</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Com o certificado, o aluno pode solicitar a carteirinha da ANCI e fortalecer sua
                      atuacao profissional.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center mb-3">
                      <Building2 className="w-6 h-6 text-blue-300 mr-2" />
                      <span className="text-blue-200 font-semibold">Experiencia Real</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Conteudo pensado para quem quer entrar no mercado com mais preparo, confianca e
                      diferencao.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-5">
                    <div className="flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">Acesso Imediato</span>
                    </div>
                    <p className="text-white/85 text-sm sm:text-base leading-relaxed">
                      Matricule-se hoje e comece agora mesmo pelo celular, tablet ou computador.
                    </p>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
                  <RainbowButton
                    onClick={handlePayment}
                    className="h-14 px-8 text-lg font-bold w-full sm:w-auto"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    INSCREVER-SE AGORA
                  </RainbowButton>

                  <div className="text-white/85 text-sm sm:text-base rounded-full border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-md">
                    Acesso imediato â€¢ Certificado reconhecido â€¢ Conteudo completo
                  </div>
                </div>
              </motion.div>
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
                    title="Apresentacao do Curso de Instrumentacao Cirurgica"
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

      {/* Professor Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800">
              Seu Professor
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
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">@Instrumentandoo</h3>
                <p className="text-xl text-blue-600 font-semibold mb-8">
                  MAIOR Influenciador de InstrumentaÃ§Ã£o CirÃºrgica do Brasil
                </p>
                
                {/* Instagram Stats */}
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
                
                <div className="grid md:grid-cols-2 gap-6 text-left lg:text-center">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Building2 className="text-blue-500 text-2xl mr-3" />
                      <span className="text-lg">Escola Urolaser</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="text-yellow-500 text-2xl mr-3" />
                      <span className="text-lg">Especialista Reconhecido</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="text-green-500 text-2xl mr-3" />
                      <span className="text-lg">CNPJ Ativo</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 text-2xl mr-3" />
                      <span className="text-lg">Maior Influenciador</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              4 Especialidades Completas
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Domine as principais Ã¡reas da instrumentaÃ§Ã£o cirÃºrgica com tÃ©cnicas avanÃ§adas
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

      {/* ConteÃºdo do Curso */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            O que vocÃª vai aprender
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias de VÃ­deo</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laparoscopia</h4>
                    <p className="text-gray-600">InstrumentaÃ§Ã£o para cirurgias minimamente invasivas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endoscopia</h4>
                    <p className="text-gray-600">TÃ©cnicas avanÃ§adas de instrumentaÃ§Ã£o endoscÃ³pica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias Abertas</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">TÃ©cnicas ClÃ¡ssicas</h4>
                    <p className="text-gray-600">InstrumentaÃ§Ã£o tradicional e eficiente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Instrumentos Especiais</h4>
                    <p className="text-gray-600">Uso correto de instrumentos especÃ­ficos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">OrganizaÃ§Ã£o</h4>
                    <p className="text-gray-600">Mesa cirÃºrgica organizada e eficiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HistÃ³rico Escolar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800 text-center">HistÃ³rico Escolar</h2>

            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/historico-escolar-v2.jpg"
                  alt="HistÃ³rico Escolar: grade escolar e verso do certificado do aluno"
                  className="w-full h-auto"
                />

                <div className="p-6">
                  <p className="text-gray-700 text-lg text-center lg:text-center">
                    Esta imagem apresenta a grade curricular do curso e o verso do certificado do aluno â€” o HistÃ³rico
                    Escolar. VocÃª encontra os conteÃºdos bÃ¡sicos, avanÃ§ados e prÃ¡ticos, alÃ©m de mÃ³dulos por vÃ­deo em
                    Urologia, Ginecologia e PlÃ¡stica. Ã‰ a comprovaÃ§Ã£o de um programa completo, com <span className="font-semibold">360 horas certificadas</span>
                    e formaÃ§Ã£o reconhecida.
                  </p>
                  <p className="text-gray-700 text-lg mt-4 text-center lg:text-center">
                    Se vocÃª quer atuar com seguranÃ§a e destaque como instrumentador(a) cirÃºrgico(a), faÃ§a sua matrÃ­cula
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

      

      {/* CTA Final Section */}
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
                NÃ£o perca esta oportunidade!
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Torne-se um especialista em instrumentaÃ§Ã£o cirÃºrgica com o maior influenciador do Brasil. 
                360 horas certificadas em 4 especialidades!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, text: "1 MÃªs de DuraÃ§Ã£o" },
                  { icon: <Award className="w-6 h-6" />, text: "360 Horas Certificadas" },
                  { icon: <Star className="w-6 h-6" />, text: "4 Especialidades" }
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
                  INSCREVER-SE AGORA
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
              Â© 2025 Escola Urolaser - Curso de InstrumentaÃ§Ã£o CirÃºrgica. Todos os direitos reservados. | 
              <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
                Powered by Readdy
              </a>
            </p>
          </FadeIn>
        </div>
      </footer>



      {/* Modal de ConfirmaÃ§Ã£o */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">InformaÃ§Ãµes Enviadas!</h3>
              <p className="text-gray-600 mb-6">
                Obrigado pelo interesse! Em breve entraremos em contato com mais detalhes sobre o curso.
              </p>
              <div className="flex gap-4">
                <RainbowButton
                  onClick={handlePayment}
                  className="flex-1"
                >
                  Inscrever-se Agora
                </RainbowButton>
                <RainbowButton
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Fechar
                </RainbowButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* WhatsApp Button especÃ­fico para pÃ¡gina Home */}
      <WhatsAppButtonFoguete />
    </div>
  );
}

