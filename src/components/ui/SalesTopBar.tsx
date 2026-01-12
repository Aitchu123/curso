import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const SalesTopBar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-2 px-4 shadow-md relative z-50">
      <div className="container mx-auto flex flex-col items-center justify-center text-center gap-1">
        <p className="text-lg md:text-xl font-bold uppercase tracking-wide animate-pulse drop-shadow-sm">
          ⏰ 96% das vagas preenchidas
        </p>
        <div className="flex items-center gap-2 text-sm md:text-base font-medium opacity-90">
          <span>Instituto Urolaser</span>
          <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
        </div>
      </div>
    </div>
  );
};
