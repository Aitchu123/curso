
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { FadeIn } from '../../components/animated/fade-in';

export default function GradePage() {
  const handleOpenDrive = () => {
    window.open('https://drive.google.com/file/d/1FkrR8RmbUh5Hz37W_AC4N2CW6trMhsjw/view?usp=drive_link', '_blank');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-['Inter'] flex items-center justify-center">
      <Section className="py-12">
        <Container>
          <FadeIn>
            <div className="max-w-md mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-xl overflow-hidden">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-green-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-1">
                    Instituição Urolaser
                  </CardTitle>
                  <p className="text-sm text-neutral-400">
                    CNPJ: 36.556.201/0001-17
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                  <div className="space-y-4">
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                      <p className="text-sm text-neutral-400 mb-1">Curso</p>
                      <p className="font-semibold text-lg text-white">
                        Instrumentação Cirúrgica
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                        <p className="text-sm text-neutral-400 mb-1">Status</p>
                        <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30">
                          Válido
                        </Badge>
                      </div>
                      <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                        <p className="text-sm text-neutral-400 mb-1">Carga Horária</p>
                        <p className="font-semibold text-white">320 horas</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button 
                      onClick={handleOpenDrive}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg shadow-lg shadow-blue-900/20"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Visualizar Grade Curricular
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </FadeIn>
        </Container>
      </Section>
    </div>
  );
}
