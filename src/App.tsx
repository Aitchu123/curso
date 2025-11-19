import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './router'
import WhatsAppButton from './components/ui/WhatsAppButton'

function WhatsAppButtonWrapper() {
  const location = useLocation();
  
  // Só mostra o botão WhatsApp original na página principal (/)
  // A página /matheus tem seu próprio botão
  // A página /home tem seu próprio botão
  // A página /black tem seu próprio botão
  if (location.pathname === '/matheus' || location.pathname === '/home' || location.pathname === '/black') {
    return null;
  }
  
  return <WhatsAppButton />;
}

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
      <WhatsAppButtonWrapper />
    </BrowserRouter>
  )
}

export default App