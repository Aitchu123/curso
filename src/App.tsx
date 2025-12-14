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
  if (location.pathname === '/matheus' || location.pathname === '/home' || location.pathname === '/uro') {
    return null;
  }
  
  return <WhatsAppButton />;
}

function FixedEnrollmentFooter() {
  const handleClick = () => {
    window.open('https://pay.kiwify.com.br/M2xDjBQ', '_blank')
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-white text-sm sm:text-base">
          faça sua matricula e comece agora mesmo, 320 horas no certificado VÁLIDO em todo brasil
        </span>
        <RainbowButton onClick={handleClick} className="px-6 py-2 text-sm sm:text-base font-semibold">
          FAZER MATRÍCULA
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
