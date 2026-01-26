import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Scissors, 
  Users, 
  TrendingUp,
  Award,
  Microscope,
  ArrowRight
} from 'lucide-react';

// Components
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { FadeIn } from '../../components/animated/fade-in';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Grid } from '../../components/layout/Grid';
import { RainbowButton } from '../../components/magicui/rainbow-button';
import { AuroraText } from '../../components/magicui/aurora-text';

export default function CapilarPage() {
  
  const handlePayment = () => {
    window.open('https://pay.hotmart.com/V103802111P?checkoutMode=10', '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-rose-500/30">
      {/* Hero Section */}
      <Section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-900/20 via-neutral-950 to-neutral-950" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <FadeIn>
              <Badge variant="outline" className="mb-4 border-rose-500/30 text-rose-300 px-4 py-1 text-sm">
                Pré-Lançamento Exclusivo
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Especialização em <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
                  Transplante Capilar
                </span> <br />
                para Instrumentadores
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Desenvolvida exclusivamente para instrumentadores cirúrgicos que desejam atuar em um dos mercados que mais crescem na área da saúde estética e cirúrgica.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex flex-col items-center gap-4 my-8">
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
                  <span className="text-neutral-500 line-through text-lg decoration-red-500">R$ 377,00</span>
                  <span className="text-green-400">R$ 247,00</span>
                </div>
                <RainbowButton 
                  onClick={handlePayment}
                  className="px-8 py-6 text-lg font-bold min-w-[280px] shadow-2xl shadow-rose-500/20"
                >
                  FAZER MATRÍCULA AGORA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </RainbowButton>
                <p className="text-sm text-neutral-500">Acesso imediato • Certificado incluso</p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      {/* O que você vai aprender */}
      <Section className="bg-neutral-900/50">
        <Container>
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              O que você vai <AuroraText>aprender</AuroraText>
            </h2>
          </FadeIn>

          <Grid cols={2} gap={6} className="max-w-4xl mx-auto">
            {[
              {
                icon: <Scissors className="h-6 w-6 text-rose-400" />,
                title: "Técnicas FUE e FUT",
                desc: "Instrumentação específica para os principais métodos de transplante."
              },
              {
                icon: <Microscope className="h-6 w-6 text-rose-400" />,
                title: "Cuidado com Enxertos",
                desc: "Manuseio correto e preservação para garantir a viabilidade dos folículos."
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-rose-400" />,
                title: "Fluxo Cirúrgico",
                desc: "Rotina completa do centro cirúrgico e papel em cada etapa."
              },
              {
                icon: <CheckCircle2 className="h-6 w-6 text-rose-400" />,
                title: "Organização",
                desc: "Montagem de mesa, materiais e equipamentos específicos."
              },
              {
                icon: <Award className="h-6 w-6 text-rose-400" />,
                title: "Segurança e Biossegurança",
                desc: "Boas práticas e segurança do paciente durante o procedimento."
              },
              {
                icon: <Users className="h-6 w-6 text-rose-400" />,
                title: "Papel do Instrumentador",
                desc: "Atuação estratégica e indispensável na equipe médica."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="bg-neutral-950 border-neutral-800 hover:border-rose-500/30 transition-colors h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="p-3 bg-rose-950/30 w-fit rounded-lg border border-rose-900/30">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Para quem é */}
      <Section className="relative overflow-hidden">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <FadeIn>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Para quem é essa <br />
                  <span className="text-rose-400">especialização?</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Instrumentadores cirúrgicos formados ou em formação",
                    "Profissionais que desejam aumentar o valor do seu trabalho",
                    "Quem busca atuar em clínicas especializadas de alta demanda",
                    "Quem quer dominar um nicho em expansão na estética"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-400 shrink-0" />
                      <p className="text-lg text-neutral-300">{item}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={handlePayment}
                  size="lg" 
                  className="w-full md:w-auto bg-rose-600 hover:bg-rose-700 text-white font-bold py-6 px-8 text-lg rounded-full shadow-lg shadow-rose-500/20"
                >
                  QUERO ME INSCREVER AGORA
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 blur-3xl rounded-full" />
              <Card className="relative bg-neutral-900/80 border-neutral-800 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-white">Resumo da Oferta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-neutral-400">
                      <span>Especialização Completa</span>
                      <span className="line-through">R$ 249,90</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-white">
                      <span>Valor Promocional</span>
                      <span className="text-green-400">R$ 127,00</span>
                    </div>
                  </div>
                  <div className="h-px bg-neutral-800" />
                  <ul className="space-y-3 text-sm text-neutral-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-400" />
                      Certificado Incluso
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-400" />
                      Acesso Vitalício
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-rose-400" />
                      Material Didático Exclusivo
                    </li>
                  </ul>
                  <Button 
                    onClick={handlePayment}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6"
                  >
                    GARANTIR MINHA VAGA
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>
    </div>
  );
}
