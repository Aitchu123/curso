
import { useState, useEffect } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const whatsappNumber = "5521972762708"; // Número atualizado
  const whatsappMessage = "Olá! Tenho interesse em diplomas e certificados de ensino superior. Gostaria de mais informações sobre a garantia 100% e contato dentro da UNIP/Anhanguera.";

  const openWhatsApp = () => {
    // Rastrear conversão do Google Ads
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17390047491/508559637',
        'value': 1.0,
        'currency': 'BRL'
      });
    }
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    // Add Schema.org JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Diplomas e Certificados de Ensino Superior",
      "description": "Diplomas e certificados de ensino superior com garantia 100%. Contato direto dentro da UNIP e Anhanguera.",
      "url": import.meta.env.VITE_SITE_URL,
      "telephone": "+5521972762708",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "offers": {
        "@type": "Offer",
        "name": "Diplomas e Certificados de Ensino Superior",
        "description": "Serviços de diplomas e certificados com garantia 100%",
        "availability": "https://schema.org/InStock"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5521972762708",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    });
    document.head.appendChild(script);

    // Add WebSite schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Diplomas e Certificados de Ensino Superior",
      "url": import.meta.env.VITE_SITE_URL,
      "description": "Diplomas e certificados de ensino superior com garantia 100%. Contato direto dentro da UNIP e Anhanguera.",
      "inLanguage": "pt-BR"
    });
    document.head.appendChild(websiteScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(websiteScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 font-['Inter']">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://readdy.ai/api/search-image?query=Modern%20university%20graduation%20ceremony%20with%20students%20in%20caps%20and%20gowns%20celebrating%20success%2C%20professional%20academic%20environment%20with%20beautiful%20campus%20buildings%20in%20background%2C%20bright%20natural%20lighting%2C%20inspiring%20educational%20atmosphere%2C%20high%20quality%20photography%20style&width=1920&height=1080&seq=hero-education&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Diplomas e Certificados de 
              <span className="text-green-400"> Ensino Superior</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Garantia 100% com contato direto dentro da UNIP e Anhanguera
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center bg-green-500/20 px-6 py-3 rounded-full border border-green-400">
                <i className="ri-shield-check-fill text-green-400 text-xl mr-3"></i>
                <span className="font-semibold">Garantia 100%</span>
              </div>
              <div className="flex items-center bg-blue-500/20 px-6 py-3 rounded-full border border-blue-400">
                <i className="ri-building-2-fill text-blue-400 text-xl mr-3"></i>
                <span className="font-semibold">UNIP & Anhanguera</span>
              </div>
              <div className="flex items-center bg-yellow-500/20 px-6 py-3 rounded-full border border-yellow-400">
                <i className="ri-time-fill text-yellow-400 text-xl mr-3"></i>
                <span className="font-semibold">Processo Rápido</span>
              </div>
            </div>

            <button
              onClick={openWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto whitespace-nowrap cursor-pointer w-full max-w-sm"
            >
              <i className="fab fa-whatsapp text-2xl md:text-3xl mr-3"></i>
              <span className="text-sm md:text-base">FALAR NO WHATSAPP AGORA</span>
            </button>
            
            <p className="text-sm text-gray-300 mt-4">
              Resposta imediata • Atendimento 24h • Sem compromisso
            </p>
          </div>
        </div>

        {/* Floating WhatsApp Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl animate-pulse cursor-pointer"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Por que escolher nossos serviços?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Garantia 100%</h3>
              <p className="text-gray-600 leading-relaxed">
                Garantimos total segurança e autenticidade em todos os nossos processos. 
                Seu investimento está protegido conosco.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-2-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Contato Interno</h3>
              <p className="text-gray-600 leading-relaxed">
                Temos contatos diretos dentro da UNIP e Anhanguera para 
                agilizar todo o seu processo acadêmico.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-lg">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-fill text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Processo Rápido</h3>
              <p className="text-gray-600 leading-relaxed">
                Agilizamos todo o processo para você ter seu diploma ou 
                certificado no menor tempo possível.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Universities Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Universidades Parceiras
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">UNIP</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Universidade Paulista</h3>
              <p className="text-white/90">
                Uma das maiores universidades privadas do Brasil, reconhecida pelo MEC 
                com cursos de excelência em diversas áreas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-xl">ANHANGUERA</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Anhanguera Educacional</h3>
              <p className="text-white/90">
                Instituição de ensino superior reconhecida nacionalmente, 
                oferecendo formação de qualidade há décadas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Não perca mais tempo!
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Milhares de pessoas já conquistaram seus diplomas e certificados conosco. 
            Entre em contato agora mesmo e dê o próximo passo na sua carreira!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center">
              <i className="ri-check-double-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Atendimento 24h</span>
            </div>
            <div className="flex items-center">
              <i className="ri-check-double-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Resposta Imediata</span>
            </div>
            <div className="flex items-center">
              <i className="ri-check-double-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Sem Compromisso</span>
            </div>
          </div>

          <button
            onClick={openWhatsApp}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto whitespace-nowrap cursor-pointer w-full max-w-md"
          >
            <i className="fab fa-whatsapp text-3xl md:text-4xl mr-3"></i>
            <span className="text-base md:text-xl">QUERO MEU DIPLOMA AGORA</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Diplomas e Certificados. Todos os direitos reservados. | 
            <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>

      {/* Modal (if needed) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Contato WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Você será redirecionado para o WhatsApp para falar diretamente conosco.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  openWhatsApp();
                  setShowModal(false);
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex-1 cursor-pointer whitespace-nowrap"
              >
                Continuar
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold cursor-pointer whitespace-nowrap"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
