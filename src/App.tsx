import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './router'
import WhatsAppButton from './components/ui/WhatsAppButton'
import { RainbowButton } from './components/magicui/rainbow-button'

function WhatsAppButtonWrapper() {
  const location = useLocation();
  
  // Só mostra o botão WhatsApp original na página principal (/)
  // A página /matheus tem seu próprio botão
  // A página /home tem seu próprio botão
  // A página /black tem seu próprio botão
  // A página /uro tem seu próprio botão
  // A página /capilar não deve ter botão
  if (location.pathname === '/matheus' || location.pathname === '/home' || location.pathname === '/uro' || location.pathname === '/capilar') {
    return null;
  }
  
  if (location.pathname === '/hot') {
    return <WhatsAppButton forceNumber="5512997982655" />;
  }

  return <WhatsAppButton />;
}

function FixedEnrollmentFooter() {
  const location = useLocation();
  const isCapilar = location.pathname === '/capilar';
  
  // Footer exclusivo para a página Capilar
  if (isCapilar) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white text-sm sm:text-base">
            <span className="font-extrabold text-green-400">Matricule-se agora</span> e comece já • Certificado de <span className="font-bold">50h</span> <span className="font-extrabold text-green-400">VÁLIDO</span> em todo o Brasil
          </span>
          <RainbowButton onClick={() => window.open('https://pay.kiwify.com.br/9TgUYok', '_blank')} className="px-6 py-2 text-sm sm:text-base font-semibold">
            FAZER MATRÍCULA AGORA
          </RainbowButton>
        </div>
      </div>
    );
  }

  // Footer padrão para as outras páginas
  let targetUrl = 'https://pay.kiwify.com.br/M2xDjBQ';
  
  if (location.pathname === '/uro') {
    targetUrl = 'https://pay.kiwify.com.br/USckAFA';
  } else if (location.pathname === '/hot') {
    targetUrl = 'https://pay.hotmart.com/V103802111P?checkoutMode=10';
  }
      
  const handleClick = () => {
    window.open(targetUrl, '_blank')
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-white text-sm sm:text-base">
          <span className="font-extrabold text-green-400">Matricule-se agora</span> e comece já • Certificado de <span className="font-bold">320h</span> <span className="font-extrabold text-green-400">VÁLIDO</span> em todo o Brasil
        </span>
        <RainbowButton onClick={handleClick} className="px-6 py-2 text-sm sm:text-base font-semibold">
          FAZER MATRÍCULA AGORA
        </RainbowButton>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
      <FixedEnrollmentFooter />
      <WhatsAppButtonWrapper />
    </BrowserRouter>
  )
}

export default App
