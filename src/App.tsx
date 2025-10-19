import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import WhatsAppButton from './components/ui/WhatsAppButton'


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <AppRoutes />
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App