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
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-green-600 text-white border-green-500">PROMOÇÃO</Badge>
            <div className="flex items-end gap-3">
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">de <span className="line-through decoration-red-500 decoration-2">R$697,00</span> para R$187,00</span>
              <span className="text-sm lg:text-base text-blue-100">à vista no Pix ou Boleto</span>
            </div>
            <div className="text-sm lg:text-base text-blue-100">
              ou em até <span className="font-semibold text-white">12x de R$ 19,00</span> no cartão de crédito
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button onClick={onBuy} className="px-6 py-3 text-base font-semibold bg-green-500 hover:bg-green-600 text-white">
              Comprar agora
            </Button>
            <div className="text-xs text-blue-100">Acesso imediato • Garantia de 7 dias</div>
          </div>
        </div>
      </div>
    </div>
  );
}
