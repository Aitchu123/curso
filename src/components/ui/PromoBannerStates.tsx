import { Badge } from "./badge";
import { Button } from "./button";

interface PromoBannerStatesProps {
  onBuy: () => void;
}

export default function PromoBannerStates({ onBuy }: PromoBannerStatesProps) {
  return (
    <div className="w-full">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-6 lg:p-8 text-white shadow-lg">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-2">
            <Badge variant="secondary" className="bg-green-600 text-white border-green-500">SPECIAL OFFER</Badge>
            <div className="flex items-end gap-3">
              <span className="text-3xl lg:text-4xl font-extrabold tracking-tight">from <span className="line-through decoration-red-500 decoration-2">$747</span> to $247.00</span>
              <span className="text-sm lg:text-base text-blue-100">one-time payment</span>
            </div>
            <div className="text-sm lg:text-base text-blue-100">
              <span className="font-semibold text-white">Full Access</span> to the course
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button onClick={onBuy} className="px-6 py-3 text-base font-semibold bg-green-500 hover:bg-green-600 text-white">
              Buy Now
            </Button>
            <div className="text-xs text-blue-100">Immediate Access • 7-Day Guarantee</div>
          </div>
        </div>
      </div>
    </div>
  );
}
