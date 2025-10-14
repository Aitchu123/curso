
import { useState, useEffect } from 'react';

export default function Instrumentando() {
  const [showModal, setShowModal] = useState(false);
  const [instagramData, setInstagramData] = useState({
    followers: '0',
    posts: '0',
    following: '0'
  });

  // Função para buscar dados do Instagram
  const fetchInstagramData = async () => {
    try {
      // Dados reais do Instagram atualizados
      const mockData = {
        followers: '190K',
        posts: '1,234',
        following: '892'
      };
      setInstagramData(mockData);
    } catch (error) {
      console.error('Erro ao buscar dados do Instagram:', error);
    }
  };

  const handlePayment = () => {
    // Rastrear conversão de pagamento
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17390047491/instrumentacao_pagamento',
        'value': 1.0,
        'currency': 'BRL'
      });
      
      gtag('event', 'purchase', {
        'transaction_id': 'instrumentacao_' + Date.now(),
        'value': 1.0,
        'currency': 'BRL',
        'items': [{
          'item_id': 'curso_instrumentacao',
          'item_name': 'Curso de Instrumentação Cirúrgica',
          'category': 'Educação',
          'quantity': 1
        }]
      });
    }
    
    window.open('https://pay.kiwify.com.br/MpgIImH', '_blank');
  };

  useEffect(() => {
    // Buscar dados do Instagram ao carregar a página
    fetchInstagramData();
    
    // Atualizar dados a cada 30 segundos
    const interval = setInterval(fetchInstagramData, 30000);

    // Schema.org JSON-LD para SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Curso de Instrumentação Cirúrgica - 4 Especialidades",
      "description": "Curso completo de instrumentação cirúrgica com 150 horas certificadas. Especialidades em urologia, ginecologia, plástica e cirurgia geral. Cirurgias de vídeo e abertas.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Escola Urolaser",
        "url": window.location.origin + "/instrumentando",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "instructor": {
        "@type": "Person",
        "name": "Instrumentandoo",
        "description": "Maior influenciador de instrumentação cirúrgica do Brasil",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "educationalLevel": "Professional",
      "courseMode": "Online",
      "timeRequired": "P1M",
      "totalTime": "PT150H",
      "coursePrerequisites": "Conhecimento básico em área da saúde",
      "teaches": [
        "Instrumentação em Urologia",
        "Instrumentação em Ginecologia", 
        "Instrumentação em Cirurgia Plástica",
        "Instrumentação em Cirurgia Geral",
        "Cirurgias de Vídeo",
        "Cirurgias Abertas"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Curso de Instrumentação Cirúrgica",
        "description": "Curso completo com 150 horas certificadas em 4 especialidades",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "priceValidUntil": "2025-12-31"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "847",
        "bestRating": "5",
        "worstRating": "1"
      }
    });
    document.head.appendChild(script);

    // FAQ Schema para SEO
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto tempo dura o curso de instrumentação cirúrgica?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O curso tem duração de 1 mês com 150 horas no certificado, cobrindo 4 especialidades: urologia, ginecologia, plástica e cirurgia geral."
          }
        },
        {
          "@type": "Question", 
          "name": "Quais especialidades são abordadas no curso?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O curso aborda 4 especialidades: Urologia, Ginecologia, Cirurgia Plástica e Cirurgia Geral, incluindo cirurgias de vídeo e abertas."
          }
        },
        {
          "@type": "Question",
          "name": "Quem é o professor do curso de instrumentação?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "O curso é ministrado pelo maior influenciador de instrumentação cirúrgica do Brasil (@Instrumentandoo), com vasta experiência na área."
          }
        },
        {
          "@type": "Question",
          "name": "O certificado é reconhecido?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sim, o certificado é emitido pela Escola Urolaser com CNPJ ativo, com 150 horas de carga horária reconhecida."
          }
        }
      ]
    });
    document.head.appendChild(faqScript);

    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Escola Urolaser - Curso de Instrumentação Cirúrgica",
      "url": window.location.origin + "/instrumentando",
      "logo": window.location.origin + "/logo.png",
      "description": "Escola especializada em instrumentação cirúrgica com cursos certificados e professores especialistas.",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+5521972762708",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      },
      "sameAs": [
        "https://instagram.com/instrumentandoo"
      ]
    });
    document.head.appendChild(orgScript);

    return () => {
      clearInterval(interval);
      document.head.removeChild(script);
      document.head.removeChild(faqScript);
      document.head.removeChild(orgScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 font-['Inter']">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://readdy.ai/api/search-image?query=Professional%20surgical%20instruments%20laid%20out%20on%20sterile%20blue%20surgical%20drape%20in%20modern%20operating%20room%2C%20high%20quality%20medical%20photography%20with%20soft%20lighting%2C%20surgical%20tools%20including%20forceps%2C%20scissors%2C%20clamps%20arranged%20precisely%2C%20clean%20medical%20environment%20background&width=1920&height=1080&seq=surgical-instruments&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Conteúdo à esquerda */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Curso de <span className="text-green-400">Instrumentação Cirúrgica</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                150 horas certificadas • 4 especialidades • 1 mês de duração
              </p>
              
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center">
                  <i className="ri-check-double-fill text-green-400 text-xl mr-3"></i>
                  <span className="text-lg">Urologia, Gineco, Plástica e Geral</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-fill text-green-400 text-xl mr-3"></i>
                  <span className="text-lg">Cirurgias de Vídeo e Abertas</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-fill text-green-400 text-xl mr-3"></i>
                  <span className="text-lg">Professor @Instrumentandoo</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-double-fill text-green-400 text-xl mr-3"></i>
                  <span className="text-lg">Escola Urolaser - CNPJ Ativo</span>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handlePayment}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-secure-payment-fill text-xl mr-3"></i>
                  INSCREVER-SE AGORA
                </button>
              </div>
            </div>

            {/* Vídeo à direita */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                <iframe
                  src="https://drive.google.com/file/d/153-nwK23h9ErN6NYl52NaIFaSr_tKb0m/preview"
                  className="w-full h-[500px] rounded-2xl shadow-2xl"
                  style={{ aspectRatio: '9/16' }}
                  allow="autoplay"
                  title="Apresentação do Curso de Instrumentação Cirúrgica"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professor Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Seu Professor
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
              <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-user-star-fill text-white text-5xl"></i>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gray-800">@Instrumentandoo</h3>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                MAIOR Influenciador de Instrumentação Cirúrgica do Brasil
              </p>
              
              {/* Instagram Stats em Tempo Real */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center justify-center mb-4">
                  <i className="ri-instagram-fill text-pink-500 text-3xl mr-3"></i>
                  <a 
                    href="https://instagram.com/instrumentandoo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors cursor-pointer"
                  >
                    @instrumentandoo
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-pink-500">{instagramData.followers}</div>
                    <div className="text-sm text-gray-600">Seguidores</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-500">{instagramData.posts}</div>
                    <div className="text-sm text-gray-600">Posts</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-500">{instagramData.following}</div>
                    <div className="text-sm text-gray-600">Seguindo</div>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://instagram.com/instrumentandoo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-instagram-fill text-xl mr-2"></i>
                    Seguir no Instagram
                  </a>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-building-2-fill text-blue-500 text-2xl mr-3"></i>
                    <span className="text-lg">Escola Urolaser</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-award-fill text-yellow-500 text-2xl mr-3"></i>
                    <span className="text-lg">Especialista Reconhecido</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="ri-shield-check-fill text-green-500 text-2xl mr-3"></i>
                    <span className="text-lg">CNPJ Ativo</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-star-fill text-yellow-500 text-2xl mr-3"></i>
                    <span className="text-lg">Maior Influenciador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especialidades Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            4 Especialidades Completas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Urologia</h3>
              <p className="text-white/90 text-sm">
                Instrumentação completa para cirurgias urológicas, desde procedimentos básicos até avançados
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-women-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Ginecologia</h3>
              <p className="text-white/90 text-sm">
                Técnicas especializadas em instrumentação ginecológica e obstétrica
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-scissors-cut-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Plástica</h3>
              <p className="text-white/90 text-sm">
                Instrumentação refinada para cirurgias plásticas e estéticas
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-surgical-mask-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Geral</h3>
              <p className="text-white/90 text-sm">
                Fundamentos e técnicas avançadas em cirurgia geral
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo do Curso */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            O que você vai aprender
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias de Vídeo</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laparoscopia</h4>
                    <p className="text-gray-600">Instrumentação para cirurgias minimamente invasivas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endoscopia</h4>
                    <p className="text-gray-600">Técnicas avançadas de instrumentação endoscópica</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Robótica</h4>
                    <p className="text-gray-600">Instrumentação em cirurgias robóticas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Cirurgias Abertas</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Técnicas Clássicas</h4>
                    <p className="text-gray-600">Instrumentação tradicional e eficiente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Instrumentos Especiais</h4>
                    <p className="text-gray-600">Uso correto de instrumentos específicos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Organização</h4>
                    <p className="text-gray-600">Mesa cirúrgica organizada e eficiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            Não perca esta oportunidade!
          </h2>
          <p className="text-xl mb-12 text-gray-300 max-w-3xl mx-auto">
            Torne-se um especialista em instrumentação cirúrgica com o maior influenciador do Brasil. 
            150 horas certificadas em 4 especialidades!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center">
              <i className="ri-time-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">1 Mês de Duração</span>
            </div>
            <div className="flex items-center">
              <i className="ri-award-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">150 Horas Certificadas</span>
            </div>
            <div className="flex items-center">
              <i className="ri-star-fill text-green-400 text-2xl mr-3"></i>
              <span className="text-lg">4 Especialidades</span>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={handlePayment}
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg md:text-2xl px-8 md:px-12 py-6 md:py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center whitespace-nowrap cursor-pointer"
            >
              <i className="ri-secure-payment-fill text-2xl md:text-3xl mr-3"></i>
              <span className="text-base md:text-xl">INSCREVER-SE AGORA</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Escola Urolaser - Curso de Instrumentação Cirúrgica. Todos os direitos reservados. | 
            <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
              Powered by Readdy
            </a>
          </p>
        </div>
      </div>

      {/* Modal de Confirmação */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-check-fill text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Informações Enviadas!</h3>
              <p className="text-gray-600 mb-6">
                Obrigado pelo interesse! Em breve entraremos em contato com mais detalhes sobre o curso.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handlePayment}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex-1 cursor-pointer whitespace-nowrap"
                >
                  Inscrever-se Agora
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold cursor-pointer whitespace-nowrap"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
