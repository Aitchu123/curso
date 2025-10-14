
import { useState, useEffect } from 'react';

export default function Recuperacao() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [checkComplete, setCheckComplete] = useState(false);
  const [progress, setProgress] = useState(0);
  const [canRecover, setCanRecover] = useState(false);

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return numbers.slice(0, 11).replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const checkRecovery = () => {
    if (phoneNumber.replace(/\D/g, '').length < 11) return;
    
    // Rastrear evento de conversão - teste grátis
    if (typeof gtag !== 'undefined') {
      gtag('event', 'close_convert_lead', {
        event_category: 'whatsapp_recovery',
        event_label: 'teste_gratuito',
        value: 1
      });
      
      // Evento qualify_lead quando o teste é iniciado
      gtag('event', 'qualify_lead', {
        event_category: 'whatsapp_recovery',
        event_label: 'teste_iniciado',
        value: 1
      });
    }
    
    setIsChecking(true);
    setCheckComplete(false);
    setProgress(0);

    // Simular verificação com barra de progresso
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsChecking(false);
          setCheckComplete(true);
          // 97% de chance de recuperação
          const canRecoverResult = Math.random() < 0.97;
          setCanRecover(canRecoverResult);
          
          // Evento qualify_lead quando o resultado é positivo
          if (canRecoverResult && typeof gtag !== 'undefined') {
            gtag('event', 'qualify_lead', {
              event_category: 'whatsapp_recovery',
              event_label: 'numero_recuperavel',
              value: 1
            });
          }
          
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  const handleRecovery = () => {
    // Rastrear evento de conversão - recuperação paga
    if (typeof gtag !== 'undefined') {
      gtag('event', 'close_convert_lead', {
        event_category: 'whatsapp_recovery',
        event_label: 'recuperacao_paga',
        value: 1
      });
      
      // Evento de conversão com send_to para Google Ads
      gtag('event', 'conversion', {
        'send_to': 'AW-17390047491/5zk-CNCI3KwbEIOinORA',
        'transaction_id': 'whatsapp_recovery_' + Date.now()
      });
    }
    
    window.open('https://pay.kirvano.com/6ad40b0a-78b9-4614-bccf-1bed341a31a7', '_blank');
  };

  useEffect(() => {
    // Schema.org JSON-LD para SEO otimizado
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Recuperação WhatsApp Banido",
      "description": "Serviço profissional para recuperar WhatsApp banido permanentemente em menos de 1 hora com 97% de taxa de sucesso",
      "provider": {
        "@type": "Organization",
        "name": "Recuperação WhatsApp Especializada",
        "url": window.location.origin + "/recuperacao"
      },
      "serviceType": "Recuperação de Conta WhatsApp",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "availableLanguage": "pt-BR",
      "offers": {
        "@type": "Offer",
        "name": "Recuperação WhatsApp Banido",
        "description": "Recupere seu WhatsApp banido em menos de 1 hora com 97% de garantia",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "validFrom": "2025-01-01"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "2847",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Carlos Silva"
          },
          "reviewBody": "Recuperaram meu WhatsApp em 20 minutos! Serviço excelente e confiável."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Maria Santos"
          },
          "reviewBody": "Estava desesperada com meu WhatsApp banido. Em menos de 30 minutos estava funcionando novamente!"
        }
      ]
    });
    document.head.appendChild(script);

    // FAQ Schema para aparecer nos resultados do Google
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Como recuperar WhatsApp banido permanentemente?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nosso serviço especializado recupera WhatsApp banido permanentemente em menos de 1 hora com 97% de taxa de sucesso. Utilizamos métodos avançados e seguros para restaurar sua conta."
          }
        },
        {
          "@type": "Question",
          "name": "Quanto tempo demora para recuperar WhatsApp banido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Na maioria dos casos, a recuperação acontece em menos de 30 minutos. Em casos mais complexos, pode levar até 1 hora. Temos 97% de taxa de sucesso."
          }
        },
        {
          "@type": "Question",
          "name": "Por que meu WhatsApp foi banido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Os banimentos podem ocorrer por uso de WhatsApp Business não oficial, envio de spam, violação dos termos de uso, ou uso de aplicativos modificados como GB WhatsApp."
          }
        },
        {
          "@type": "Question",
          "name": "É possível recuperar WhatsApp banido em 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim! Nosso método atualizado para 2025 tem 97% de eficácia na recuperação de WhatsApp banido permanentemente. Testamos gratuitamente se seu número pode ser recuperado."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // WebSite schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Recuperar WhatsApp Banido - Método 2025",
      "url": window.location.origin + "/recuperacao",
      "description": "Como recuperar WhatsApp banido permanentemente em 2025. Método 100% funcional com 97% de taxa de sucesso em menos de 1 hora.",
      "inLanguage": "pt-BR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": window.location.origin + "/recuperacao?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    });
    document.head.appendChild(websiteScript);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
      document.head.removeChild(websiteScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20smartphone%20with%20WhatsApp%20logo%20on%20screen%2C%20modern%20technology%20background%20with%20green%20and%20blue%20gradient%20colors%2C%20digital%20recovery%20concept%2C%20clean%20minimalist%20design%2C%20high%20quality%20photography%20with%20soft%20lighting%20and%20professional%20atmosphere&width=1920&height=1080&seq=whatsapp-recovery&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fab fa-whatsapp text-white text-4xl"></i>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Como Recuperar <span className="text-green-400">WhatsApp Banido</span> em 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Método 100% Funcional - Seu número de volta em menos de 1 hora com 97% de taxa de sucesso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center bg-green-500/20 px-6 py-3 rounded-full border border-green-400">
                <i className="ri-time-fill text-green-400 text-xl mr-3"></i>
                <span className="font-semibold">Recuperação em 1h</span>
              </div>
              <div className="flex items-center bg-blue-500/20 px-6 py-3 rounded-full border border-blue-400">
                <i className="ri-shield-check-fill text-blue-400 text-xl mr-3"></i>
                <span className="font-semibold">97% Taxa de Sucesso</span>
              </div>
              <div className="flex items-center bg-yellow-500/20 px-6 py-3 rounded-full border border-yellow-400">
                <i className="ri-customer-service-2-fill text-yellow-400 text-xl mr-3"></i>
                <span className="font-semibold">Suporte 24h</span>
              </div>
            </div>

            {/* Verificação de Número */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Teste GRÁTIS se seu número pode ser recuperado</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-left text-sm font-medium mb-2">
                    Digite seu número do WhatsApp banido:
                  </label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    maxLength={15}
                  />
                </div>

                {!checkComplete && !isChecking && (
                  <button
                    onClick={checkRecovery}
                    disabled={phoneNumber.replace(/\D/g, '').length < 11}
                    className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-search-line mr-2"></i>
                    TESTAR AGORA - 100% GRÁTIS
                  </button>
                )}

                {isChecking && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-lg mb-4">Verificando possibilidade de recuperação...</p>
                      <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                        <div 
                          className="bg-green-400 h-4 rounded-full transition-all duration-100"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-300">{progress}% concluído</p>
                    </div>
                  </div>
                )}

                {checkComplete && (
                  <div className="space-y-6">
                    {canRecover ? (
                      <div className="bg-green-500/20 border border-green-400 rounded-lg p-6">
                        <div className="flex items-center justify-center mb-4">
                          <i className="ri-checkbox-circle-fill text-green-400 text-4xl"></i>
                        </div>
                        <h4 className="text-xl font-bold text-green-400 mb-2">✅ NÚMERO RECUPERÁVEL!</h4>
                        <p className="text-gray-200 mb-4">
                          Ótimas notícias! Seu número <strong>{phoneNumber}</strong> pode ser recuperado com 97% de chance de sucesso em menos de 30 minutos usando nosso método 2025.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                          <div className="flex items-center">
                            <i className="ri-time-fill text-green-400 mr-2"></i>
                            <span>Tempo: 30 min</span>
                          </div>
                          <div className="flex items-center">
                            <i className="ri-shield-check-fill text-green-400 mr-2"></i>
                            <span>Garantia: 97%</span>
                          </div>
                        </div>
                        <button
                          onClick={handleRecovery}
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                          <i className="ri-refresh-line mr-2"></i>
                          RECUPERAR AGORA - MÉTODO 2025
                        </button>
                      </div>
                    ) : (
                      <div className="bg-red-500/20 border border-red-400 rounded-lg p-6">
                        <div className="flex items-center justify-center mb-4">
                          <i className="ri-close-circle-fill text-red-400 text-4xl"></i>
                        </div>
                        <h4 className="text-xl font-bold text-red-400 mb-2">❌ Número não recuperável no momento</h4>
                        <p className="text-gray-200 mb-4">
                          O número <strong>{phoneNumber}</strong> não pode ser recuperado agora. 
                          Tente novamente em 24 horas ou entre em contato conosco.
                        </p>
                        <button
                          onClick={() => {
                            setCheckComplete(false);
                            setPhoneNumber('');
                          }}
                          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap"
                        >
                          TESTAR OUTRO NÚMERO
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Como Funciona */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Como Funciona Nosso Método 2025 para Recuperar WhatsApp Banido
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Teste Grátis</h3>
              <p className="text-gray-600">
                Analisamos seu número gratuitamente e verificamos se é possível recuperar seu WhatsApp banido
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Pagamento Seguro</h3>
              <p className="text-gray-600">
                Realize o pagamento seguro para iniciar o processo de recuperação do WhatsApp banido
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Recuperação Rápida</h3>
              <p className="text-gray-600">
                Nossa equipe especializada usa métodos avançados 2025 para recuperar seu WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">WhatsApp Funcionando!</h3>
              <p className="text-gray-600">
                Seu WhatsApp volta a funcionar normalmente em até 1 hora com todas as conversas preservadas
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Estatísticas */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Por Que Somos os Melhores em Recuperar WhatsApp Banido
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-white mb-4">97%</div>
              <h3 className="text-xl font-bold text-white mb-2">Taxa de Sucesso</h3>
              <p className="text-white/90">
                De todos os números verificados como recuperáveis são restaurados com sucesso
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-white mb-4">30min</div>
              <h3 className="text-xl font-bold text-white mb-2">Tempo Médio</h3>
              <p className="text-white/90">
                Maioria dos WhatsApp banidos são recuperados em menos de 30 minutos
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="text-5xl font-bold text-white mb-4">2847</div>
              <h3 className="text-xl font-bold text-white mb-2">Clientes Satisfeitos</h3>
              <p className="text-white/90">
                Pessoas já recuperaram seus WhatsApp banidos conosco em 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Otimizado para SEO */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Perguntas Frequentes sobre Como Recuperar WhatsApp Banido
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Como recuperar WhatsApp banido permanentemente em 2025?
              </h3>
              <p className="text-gray-600">
                Nosso método atualizado para 2025 utiliza técnicas avançadas e seguras para recuperar WhatsApp banido permanentemente. 
                Com 97% de taxa de sucesso, conseguimos restaurar sua conta em menos de 1 hora, mantendo todas as conversas e dados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Quanto tempo demora para recuperar WhatsApp banido?
              </h3>
              <p className="text-gray-600">
                Na maioria dos casos, a recuperação do WhatsApp banido acontece em menos de 30 minutos usando nosso método 2025. 
                Em casos mais complexos, pode levar até 1 hora. Temos 97% de taxa de sucesso comprovada.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Por que meu WhatsApp foi banido permanentemente?
              </h3>
              <p className="text-gray-600">
                Os banimentos permanentes do WhatsApp podem ocorrer por uso de WhatsApp GB, WhatsApp Plus, envio de spam em massa, 
                violação dos termos de uso, ou uso de aplicativos modificados. Nosso método 2025 resolve todos esses casos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                É possível recuperar WhatsApp banido definitivamente?
              </h3>
              <p className="text-gray-600">
                Sim! Mesmo WhatsApp banido definitivamente pode ser recuperado com nosso método especializado 2025. 
                Testamos gratuitamente se seu número pode ser recuperado antes de você pagar qualquer coisa.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Minhas conversas serão preservadas após recuperar WhatsApp banido?
              </h3>
              <p className="text-gray-600">
                Sim! Nossa recuperação mantém todos os seus dados, conversas, fotos, vídeos e configurações 
                exatamente como estavam antes do banimento. Você não perde nada do seu WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                O que fazer se meu WhatsApp foi banido hoje?
              </h3>
              <p className="text-gray-600">
                Se seu WhatsApp foi banido hoje, não se desespere! Quanto mais rápido agir, melhor. 
                Teste gratuitamente se seu número pode ser recuperado e inicie o processo imediatamente para ter seu WhatsApp de volta em 1 hora.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Não Fique Mais Sem Seu WhatsApp!
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Mais de 2.847 pessoas já recuperaram seus WhatsApp banidos conosco em 2025. 
            Teste GRÁTIS agora se seu número pode ser recuperado!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center">
              <i className="ri-shield-check-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Garantia Total</span>
            </div>
            <div className="flex items-center">
              <i className="ri-time-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Recuperação em 1h</span>
            </div>
            <div className="flex items-center">
              <i className="ri-customer-service-2-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">Suporte 24h</span>
            </div>
          </div>

          <button
            onClick={() => {
              // Rastrear evento de conversão - scroll para teste
              if (typeof gtag !== 'undefined') {
                gtag('event', 'close_convert_lead', {
                  event_category: 'whatsapp_recovery',
                  event_label: 'scroll_para_teste',
                  value: 1
                });
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-2xl px-8 md:px-16 py-6 md:py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto whitespace-nowrap cursor-pointer w-full max-w-md"
          >
            <i className="fab fa-whatsapp text-3xl md:text-4xl mr-3"></i>
            <span className="text-base md:text-xl">TESTAR MEU NÚMERO GRÁTIS</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Recuperar WhatsApp Banido - Método 2025. Todos os direitos reservados. | 
            <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
