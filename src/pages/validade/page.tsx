import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { XCircle } from 'lucide-react';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { FadeIn } from '../../components/animated/fade-in';

export default function ValidadePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-['Inter'] flex items-center justify-center">
      <Section className="py-12">
        <Container>
          <FadeIn>
            <div className="max-w-md mx-auto">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm shadow-xl overflow-hidden">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-red-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-neutral-400 mb-1">
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
                        <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30">
                          Inválido
                        </Badge>
                      </div>
                      <div className="bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                        <p className="text-sm text-neutral-400 mb-1">Carga Horária</p>
                        <p className="font-semibold text-white">0 horas</p>
                      </div>
                    </div>

                    <div className="bg-red-900/20 p-4 rounded-lg border border-red-500/30 text-center">
                      <p className="text-red-300 font-semibold">
                        Aluno desistente, não encerrou o curso
                      </p>
                    </div>
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
