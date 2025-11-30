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
import PromoBannerBF from '../../components/ui/PromoBannerBF';

export default function BlackFriday() {
  const [showModal, setShowModal] = useState(false);
  const [instagramData, setInstagramData] = useState({
    followers: '190K',
    posts: '1,234',
    following: '892'
  });

  // Função para buscar dados do Instagram
  const fetchInstagramData = async () => {
    try {
      // Dados reais do Instagram atualizados
      const mockData = {
        followers: '190K',
        posts: '1,234',
        following: '892'
      };
      setInstagramData(mockData);
    } catch (error) {
      console.error('Erro ao buscar dados do Instagram:', error);
    }
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
    
    window.open('https://pay.kiwify.com.br/MpgIImH', '_blank');
  };

  useEffect(() => {
    // Buscar dados do Instagram ao carregar a página
    fetchInstagramData();
    
    // Atualizar dados a cada 30 segundos
    const interval = setInterval(fetchInstagramData, 30000);

    // Schema.org JSON-LD para SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Curso de Instrumentação Cirúrgica - Black Friday",
      "description": "Curso completo de instrumentação cirúrgica com 150 horas certificadas - OFERTA BLACK FRIDAY. Especialidades em urologia, ginecologia, plástica e cirurgia geral.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Escola Urolaser",
        "url": window.location.origin,
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "instructor": {
        "@type": "Person",
        "name": "Instrumentandoo",
        "description": "Maior influenciador de instrumentação cirúrgica do Brasil",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "educationalLevel": "Professional",
      "courseMode": "Online",
      "timeRequired": "P1M",
      "totalTime": "PT150H",
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
        "name": "Curso de Instrumentação Cirúrgica - Black Friday",
        "description": "Curso completo com 150 horas certificadas em 4 especialidades - PROMOÇÃO BLACK FRIDAY",
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
      description: "Instrumentação completa para cirurgias urológicas, desde procedimentos básicos até avançados",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ginecologia", 
      description: "Técnicas especializadas em instrumentação ginecológica e obstétrica",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Plástica",
      description: "Instrumentação refinada para cirurgias plásticas e estéticas",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Geral",
      description: "Fundamentos e técnicas avançadas em cirurgia geral",
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "150 horas certificadas" },
    { icon: <Clock className="w-6 h-6" />, text: "1 mês de duração" },
    { icon: <Users className="w-6 h-6" />, text: "4 especialidades" },
    { icon: <Award className="w-6 h-6" />, text: "Certificado reconhecido" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 font-['Inter'] overflow-x-hidden">
      {/* Hero Section */}
      <Section 
        background="gradient" 
        padding="xl" 
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        
        <Container className="relative z-10">
          <Grid cols={{ default: 1, lg: 2 }} gap="xl" className="items-center">
            {/* Content */}
            <FadeIn direction="left" className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                      {benefit.icon}
                      <span className="ml-2">{benefit.text}</span>
                    </Badge>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Black Friday - Curso de{" "}
                  <AuroraText 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                    colors={["#00ff88", "#00d4ff", "#ff0080", "#ffaa00"]}
                  >
                    Instrumentação Cirúrgica
                  </AuroraText>
                </h1>
                
                <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl">
                  150 horas certificadas • 4 especialidades • Professor @Instrumentandoo • PROMOÇÃO BLACK FRIDAY
                </p>

                

                {/* Destaque CNIC */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 max-w-2xl"
                >
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-green-400 mr-2" />
                    <span className="text-green-400 font-bold text-lg">CERTIFICADO RECONHECIDO</span>
                  </div>
                  <p className="text-white text-center text-lg leading-relaxed">
                    Com nosso <span className="font-bold text-green-300">CERTIFICADO</span> é possível adquirir a{" "}
                    <span className="font-bold text-blue-300">"Carteirinha da ANIC"</span> - a Carteira de Instrumentador Cirúrgico 
                    do <span className="font-semibold">Cadastro Nacional de Instrumentadores Cirúrgicos</span>
                  </p>
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">Reconhecimento Nacional</span>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                  <RainbowButton
                    onClick={handlePayment}
                    className="h-14 px-8 text-lg font-bold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    GARANTIR VAGA BLACK FRIDAY
                  </RainbowButton>
                </div>
              </motion.div>
            </FadeIn>

            {/* Video */}
            <FadeIn direction="right" delay={0.3} className="flex justify-center">
              <motion.div
                className="w-full max-w-sm lg:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MagicCard className="p-1 bg-gradient-to-br from-red-600 to-orange-600">
                  <iframe
                    src="https://drive.google.com/file/d/1-S9UTWvxoaJF8oGOixGi4OUz0IsFgDaW/preview"
                    className="w-full h-[500px] lg:h-[600px] rounded-xl"
                    allow="autoplay"
                    title="Apresentação do Curso de Instrumentação Cirúrgica - BLACK FRIDAY"
                  ></iframe>
                </MagicCard>
                <div className="mt-6">
                  <PromoBannerBF onBuy={handlePayment} />
                </div>
              </motion.div>
            </FadeIn>
          </Grid>
        </Container>
      </Section>

      {/* Professor Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800">
              Seu Professor
            </h2>
            
            <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="text-white text-5xl" />
                </motion.div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">@Instrumentandoo</h3>
                <p className="text-xl text-red-600 font-semibold mb-8">
                  MAIOR Influenciador de Instrumentação Cirúrgica do Brasil
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
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              4 Especialidades Completas - BLACK FRIDAY
            </h2>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Domine as principais áreas da instrumentação cirúrgica com técnicas avançadas - PROMOÇÃO LIMITADA
            </p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <MagicCard 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  gradientFrom="#ff4757"
                  gradientTo="#ffa502"
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

      {/* Conteúdo do Curso */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            O que você vai aprender - BLACK FRIDAY
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias de Vídeo</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-red-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laparoscopia</h4>
                    <p className="text-gray-600">Instrumentação para cirurgias minimamente invasivas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-red-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endoscopia</h4>
                    <p className="text-gray-600">Técnicas avançadas de instrumentação endoscópica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias Abertas</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-orange-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Técnicas Clássicas</h4>
                    <p className="text-gray-600">Instrumentação tradicional e eficiente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-orange-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Instrumentos Especiais</h4>
                    <p className="text-gray-600">Uso correto de instrumentos específicos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-orange-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Organização</h4>
                    <p className="text-gray-600">Mesa cirúrgica organizada e eficiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Depoimentos Urolaser Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
              Equipes de cirurgiões e empresas de todo Brasil solicitam indicações para Urolaser
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Profissionais formados pela nossa escola são reconhecidos e indicados em todo território nacional. 
              Veja o depoimento de alunos que foram contratados através das indicações da Urolaser.
            </p>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 shadow-xl">
              <div className="aspect-video max-w-3xl mx-auto">
                <iframe
                  src="https://drive.google.com/file/d/1zDDW7xDsOX9WaDRTw56V5BCcfRlpHKuE/preview"
                  className="w-full h-full rounded-xl"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Depoimentos de alunos indicados pela Urolaser"
                ></iframe>
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg text-gray-700 mb-6">
                  "Fui indicado pela Urolaser e em menos de 15 dias já estava trabalhando em uma das maiores clínicas de São Paulo. 
                  O reconhecimento no mercado é imediato quando você tem a certificação da escola."
                </p>
                <div className="flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  +2.500 alunos já foram contratados através de indicações da Urolaser em todo Brasil
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 text-white">
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
                ÚLTIMAS VAGAS BLACK FRIDAY!
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Não perca esta oportunidade única! Black Friday com preço especial por tempo limitado.
                150 horas certificadas em 4 especialidades!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, text: "1 Mês de Duração" },
                  { icon: <Award className="w-6 h-6" />, text: "150 Horas Certificadas" },
                  { icon: <Star className="w-6 h-6" />, text: "4 Especialidades" }
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                      <span className="text-orange-400 mr-3">{item.icon}</span>
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
                  GARANTIR MINHA VAGA NA BLACK FRIDAY
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
              © 2025 Escola Urolaser - Curso de Instrumentação Cirúrgica Black Friday. Todos os direitos reservados. | 
              <a href="https://readdy.ai/?origin=logo" className="text-orange-400 hover:text-orange-300 ml-2">
                Powered by Readdy
              </a>
            </p>
          </FadeIn>
        </div>
      </footer>

      {/* WhatsApp Button específico para página Black Friday */}
      <WhatsAppButtonFoguete phoneNumber="5512991860706" />
    </div>
  );
}
