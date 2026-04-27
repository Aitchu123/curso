import { Badge } from "./badge";
import { Button } from "./button";

interface PromoBannerHomeProps {
  onBuy: () => void;
}

export default function PromoBannerHome({ onBuy }: PromoBannerHomeProps) {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 lg:p-8 text-white shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3">
            <Badge variant="secondary" className="bg-green-600 text-white border-green-500">TURMA ABERTA</Badge>
            <div className="flex flex-col gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">de <span className="line-through decoration-red-500 decoration-2">R$377,00</span> para R$247,00</span>
              <span className="text-sm lg:text-base text-blue-100">à vista no Pix ou Boleto</span>
            </div>
            <div className="rounded-2xl border border-yellow-300/40 bg-yellow-400/15 px-4 py-3">
              <div className="text-xs sm:text-sm uppercase tracking-wide text-yellow-200">Cartão de crédito</div>
              <div className="text-xl sm:text-2xl font-extrabold text-white">12x de R$ 24,00</div>
              <div className="text-sm text-yellow-100">Parcele no cartão e garanta o acesso imediato</div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm text-white/90">
              <span className="rounded-full border border-white/20 px-3 py-1">360 horas certificadas</span>
              <span className="rounded-full border border-white/20 px-3 py-1">4 especialidades</span>
              <span className="rounded-full border border-white/20 px-3 py-1">Acesso imediato</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button onClick={onBuy} className="px-6 py-3 text-base font-semibold bg-green-500 hover:bg-green-600 text-white">
              Comprar agora
            </Button>
            <div className="text-xs text-blue-100 text-center sm:text-left">Acesso imediato • Garantia de 7 dias • Certificado ao concluir</div>
          </div>
        </div>
      </div>
    </div>
  );
}
