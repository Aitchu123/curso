import { ExternalLink, Instagram } from 'lucide-react';

import { RainbowButton } from '../magicui/rainbow-button';

const INSTAGRAM_PROFILE_URL = 'https://instagram.com/instrumentandoo';
const INSTAGRAM_PHOTO_URL = 'https://drive.google.com/thumbnail?id=1DzTZ5dt_VOx9b9JcD6Ojr5psIIWu6uP3&sz=w1000';

const profileStats = [
  { value: '2.903', label: 'posts' },
  { value: '201 mil', label: 'seguidores' },
  { value: '349', label: 'seguindo' }
];

function VerifiedBadge() {
  return (
    <span
      aria-label="Perfil verificado no Instagram"
      title="Perfil verificado no Instagram"
      className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0095F6] shadow-sm"
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white" aria-hidden="true">
        <path d="M10.2 15.6 6.9 12.3l-1.4 1.4 4.7 4.7L18.5 10l-1.4-1.4z" />
      </svg>
    </span>
  );
}

export default function InstagramAuthorityCard() {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
        <div className="shrink-0">
          <div className="rounded-full bg-gradient-to-br from-pink-500 via-fuchsia-500 to-orange-400 p-1.5 shadow-lg">
            <img
              src={INSTAGRAM_PHOTO_URL}
              alt="Foto de perfil do Instagram do Marcelo"
              className="h-28 w-28 rounded-full object-cover border-4 border-white"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span className="text-2xl lg:text-3xl font-bold text-slate-900">instrumentandoo</span>
            <VerifiedBadge />
          </div>

          <p className="mt-1 text-base lg:text-lg text-slate-600">Marcelo Loschi</p>

          <p className="mt-4 text-base lg:text-lg text-slate-700 leading-relaxed max-w-2xl">
            Perfil oficial e verificado no Instagram, com conteudo diario sobre instrumentacao cirurgica,
            bastidores do centro cirurgico e orientacao para quem quer entrar na area com mais preparo.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
            {profileStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-slate-50 border border-slate-200 px-4 py-3 text-center">
                <div className="text-lg sm:text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-col sm:flex-row items-center gap-3">
            <RainbowButton className="w-full sm:w-auto">
              <a
                href={INSTAGRAM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Ver Instagram oficial
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </RainbowButton>
            <span className="text-sm text-slate-500">Autoridade real e perfil validado pela propria plataforma.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
