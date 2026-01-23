
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Clock, 
  Star, 
  Users, 
  Award, 
  CheckCircle2, 
  Play,
  Instagram,
  Building2,
  Scissors,
  Stethoscope
} from 'lucide-react';

// Components
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { FadeIn } from '../../components/animated/fade-in';
import { StatsCounter } from '../../components/animated/stats-counter';
import { Section } from '../../components/layout/Section';
import { Container } from '../../components/layout/Container';
import { Grid } from '../../components/layout/Grid';
import { RainbowButton } from '../../components/magicui/rainbow-button';
import { AuroraText } from '../../components/magicui/aurora-text';
import { MagicCard } from '../../components/magicui/magic-card';
import PromoBannerStates from '../../components/ui/PromoBannerStates';

export default function StatesPage() {
  const [showModal, setShowModal] = useState(false);
  const [instagramData, setInstagramData] = useState({
    followers: '190K',
    posts: '1,234',
    following: '892'
  });

  // Function to fetch Instagram data
  const fetchInstagramData = async () => {
    try {
      // Real updated Instagram data (mock)
      const mockData = {
        followers: '190K',
        posts: '1,234',
        following: '892'
      };
      setInstagramData(mockData);
    } catch (error) {
      console.error('Error fetching Instagram data:', error);
    }
  };

  const handlePayment = () => {
    // Track payment conversion
    if (typeof gtag !== 'undefined') {
      gtag('event', 'conversion', {
        'send_to': 'AW-17390047491/instrumentacao_pagamento',
        'value': 1.0,
        'currency': 'USD'
      });
      
      gtag('event', 'purchase', {
        'transaction_id': 'instrumentacao_states_' + Date.now(),
        'value': 1.0,
        'currency': 'USD',
        'items': [{
          'item_id': 'curso_instrumentacao_states',
          'item_name': 'Surgical Instrumentation Course',
          'category': 'Education',
          'quantity': 1
        }]
      });
    }
    
    window.open('https://pay.hotmart.com/V103802111P?checkoutMode=10', '_blank');
  };



  useEffect(() => {
    // Fetch Instagram data on page load
    fetchInstagramData();
    
    // Update data every 30 seconds
    const interval = setInterval(fetchInstagramData, 30000);

    // Schema.org JSON-LD for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Surgical Instrumentation Course - 4 Specialties",
      "description": "Complete surgical instrumentation course with 320 certified hours. Specialties in urology, gynecology, plastic surgery, and general surgery. Video and open surgeries.",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Urolaser School",
        "url": window.location.origin,
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "instructor": {
        "@type": "Person",
        "name": "Instrumentandoo",
        "description": "United States' biggest surgical instrumentation influencer",
        "sameAs": "https://instagram.com/instrumentandoo"
      },
      "educationalLevel": "Professional",
      "courseMode": "Online",
      "timeRequired": "P1M",
      "totalTime": "PT320H",
      "coursePrerequisites": "Basic knowledge in health area",
      "teaches": [
        "Urology Instrumentation",
        "Gynecology Instrumentation", 
        "Plastic Surgery Instrumentation",
        "General Surgery Instrumentation",
        "Video Surgeries",
        "Open Surgeries"
      ],
      "offers": {
        "@type": "Offer",
        "name": "Surgical Instrumentation Course",
        "description": "Complete course with 320 certified hours in 4 specialties",
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

    return () => {
      clearInterval(interval);
      document.head.removeChild(script);
    };
  }, []);

  const specialties = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Urology",
      description: "Complete instrumentation for urological surgeries, from basic to advanced procedures",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Gynecology", 
      description: "Specialized techniques in gynecological and obstetric instrumentation",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Plastic Surgery",
      description: "Refined instrumentation for plastic and aesthetic surgeries",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "General Surgery",
      description: "Fundamentals and advanced techniques in general surgery",
      color: "from-green-500 to-green-600"
    }
  ];

  const benefits = [
    { icon: <Shield className="w-6 h-6" />, text: "320 Certified Hours" },
    { icon: <Clock className="w-6 h-6" />, text: "1 Month Duration" },
    { icon: <Users className="w-6 h-6" />, text: "4 Specialties" },
    { icon: <Award className="w-6 h-6" />, text: "Recognized Certificate" },
    { icon: <Play className="w-6 h-6" />, text: "100% ONLINE" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 font-['Inter'] overflow-x-hidden">
      {/* Hero Section */}
      <Section 
        background="gradient" 
        padding="xl" 
        className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>
        
        <Container className="relative z-10">
          <Grid cols={{ default: 1, lg: 2 }} gap="xl" className="items-center">
            {/* Content */}
            <FadeIn direction="left" className="text-center lg:text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex flex-wrap gap-2 justify-center lg:justify-center mb-6">
                  {benefits.map((benefit, index) => (
                    <Badge key={index} variant="secondary" className="bg-white/10 text-white border-white/20 backdrop-blur-sm">
                      {benefit.icon}
                      <span className="ml-2">{benefit.text}</span>
                    </Badge>
                  ))}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Course of{" "}
                  <AuroraText 
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                    colors={["#00ff88", "#00d4ff", "#ff0080", "#ffaa00"]}
                  >
                    Surgical Instrumentation
                  </AuroraText>
                </h1>
                
                <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl">
                  320 Certified Hours • 4 Specialties • Instructor @Instrumentandoo
                </p>

                

                {/* Destaque CNIC */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 max-w-2xl"
                >
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-6 h-6 text-green-400 mr-2" />
                    <span className="text-green-400 font-bold text-lg">RECOGNIZED CERTIFICATE</span>
                  </div>
                  <p className="text-white text-center text-lg leading-relaxed">
                    With our <span className="font-bold text-green-300">CERTIFICATE</span> it is possible to acquire the{" "}
                    <span className="font-bold text-blue-300">"ANIC Card"</span> - the Surgical Instrumentalist Card 
                    from the <span className="font-semibold">National Registry of Surgical Instrumentalists</span> (United States)
                  </p>
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center bg-white/10 px-4 py-2 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-300 font-semibold">National Recognition</span>
                    </div>
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center pt-6">
                  <RainbowButton
                    onClick={handlePayment}
                    className="h-14 px-8 text-lg font-bold"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    ENROLL NOW
                  </RainbowButton>
                </div>
              </motion.div>
            </FadeIn>

            {/* Video */}
            <FadeIn direction="right" delay={0.3} className="flex justify-center">
              <motion.div
                className="w-full max-w-sm lg:max-w-md"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MagicCard className="p-1 bg-gradient-to-br from-blue-600 to-green-600">
                  <iframe
                    src="https://drive.google.com/file/d/1-S9UTWvxoaJF8oGOixGi4OUz0IsFgDaW/preview"
                    className="w-full h-[500px] lg:h-[600px] rounded-xl"
                    allow="autoplay"
                    title="Surgical Instrumentation Course Presentation"
                  ></iframe>
                </MagicCard>
                <div className="mt-6">
                  <PromoBannerStates onBuy={handlePayment} />
                </div>
              </motion.div>
            </FadeIn>
          </Grid>
        </Container>
      </Section>

      

      {/* Histórico Escolar */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-5xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">Academic Transcript</h2>

            <Card className="bg-white shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/historico-escolar-v2.jpg"
                  alt="Academic Transcript: school grade and certificate back"
                  className="w-full h-auto"
                />

                <div className="p-6">
                  <p className="text-gray-700 text-lg">
                    This image shows the course curriculum and the back of the student's certificate — the Academic
                    Transcript. You will find basic, advanced, and practical contents, as well as video modules in
                    Urology, Gynecology, and Plastic Surgery. It is the proof of a complete program, with <span className="font-semibold">320 certified hours</span>
                    and recognized training.
                  </p>
                  <p className="text-gray-700 text-lg mt-4">
                    If you want to work with safety and distinction as a surgical instrumentalist, enroll
                    now and secure your spot.
                  </p>

                  <div className="mt-6">
                    <RainbowButton onClick={handlePayment} className="group text-lg px-10 py-5">
                      <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      ENROLL NOW
                    </RainbowButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Professor Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-800">
              Your Instructor
            </h2>
            
            <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-0 shadow-xl">
              <CardContent className="p-8 lg:p-12">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="text-white text-5xl" />
                </motion.div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-800">@Instrumentandoo</h3>
                <p className="text-xl text-blue-600 font-semibold mb-8">
                  BIGGEST Surgical Instrumentation Influencer in United States
                </p>
                
                {/* Instagram Stats */}
                <Card className="bg-white shadow-lg mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-6">
                      <Instagram className="text-pink-500 text-3xl mr-3" />
                      <a 
                        href="https://instagram.com/instrumentandoo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors cursor-pointer"
                      >
                        @instrumentandoo
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <StatsCounter 
                        value={instagramData.followers} 
                        label="Followers" 
                        delay={0.2}
                      />
                      <StatsCounter 
                        value={instagramData.posts} 
                        label="Posts" 
                        delay={0.4}
                      />
                      <StatsCounter 
                        value={instagramData.following} 
                        label="Following" 
                        delay={0.6}
                      />
                    </div>
                    
                    <RainbowButton
                      className="w-full sm:w-auto"
                    >
                      <a 
                        href="https://instagram.com/instrumentandoo" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <Instagram className="w-5 h-5 mr-2" />
                        Follow on Instagram
                      </a>
                    </RainbowButton>
                  </CardContent>
                </Card>
                
                <div className="grid md:grid-cols-2 gap-6 text-left lg:text-center">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Building2 className="text-blue-500 text-2xl mr-3" />
                      <span className="text-lg">Urolaser School</span>
                    </div>
                    <div className="flex items-center">
                      <Award className="text-yellow-500 text-2xl mr-3" />
                      <span className="text-lg">Recognized Specialist</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Shield className="text-green-500 text-2xl mr-3" />
                      <span className="text-lg">Registered School</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="text-yellow-500 text-2xl mr-3" />
                      <span className="text-lg">Top Influencer</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              4 Complete Specialties
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Master the main areas of surgical instrumentation with advanced techniques
            </p>
          </FadeIn>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {specialties.map((specialty, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <MagicCard 
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group"
                  gradientFrom="#9E7AFF"
                  gradientTo="#FE8BBB"
                  gradientColor="#ffffff"
                  gradientOpacity={0.1}
                >
                  <div className="p-6 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${specialty.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {specialty.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                </MagicCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo do Curso */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            What You Will Learn
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Video Surgeries</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Laparoscopy</h4>
                    <p className="text-gray-600">Instrumentation for minimally invasive surgeries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-play-circle-fill text-blue-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endoscopy</h4>
                    <p className="text-gray-600">Advanced endoscopic instrumentation techniques</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Open Surgeries</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Classic Techniques</h4>
                    <p className="text-gray-600">Traditional and efficient instrumentation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Special Instruments</h4>
                    <p className="text-gray-600">Correct use of specific instruments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <i className="ri-scissors-cut-fill text-green-500 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-800">Organization</h4>
                    <p className="text-gray-600">Organized and efficient surgical table</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-green-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Don't Miss This Opportunity!
              </h2>
              <p className="text-xl lg:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Become an expert in surgical instrumentation with United States' top influencer. 
                320 certified hours in 4 specialties!
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center items-center mb-12">
                {[
                  { icon: <Clock className="w-6 h-6" />, text: "1 Month Duration" },
                  { icon: <Award className="w-6 h-6" />, text: "320 Certified Hours" },
                  { icon: <Star className="w-6 h-6" />, text: "4 Specialties" }
                ].map((item, index) => (
                  <FadeIn key={index} delay={index * 0.1}>
                    <div className="flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                      <span className="text-green-400 mr-3">{item.icon}</span>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <RainbowButton
                  onClick={handlePayment}                  
                  className="group text-lg px-12 py-6"
                >
                  <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  ENROLL NOW
                </RainbowButton>                              
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-gray-400">
              © 2025 Urolaser School - Surgical Instrumentation Course. All rights reserved. | 
              <a href="https://readdy.ai/?origin=logo" className="text-green-400 hover:text-green-300 ml-2">
                Powered by Readdy
              </a>
            </p>
          </FadeIn>
        </div>
      </footer>



      {/* Modal de Confirmação */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Information Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest! We will contact you shortly with more details about the course.
              </p>
              <div className="flex gap-4">
                <RainbowButton
                  onClick={handlePayment}
                  className="flex-1"
                >
                  Enroll Now
                </RainbowButton>
                <RainbowButton
                  onClick={() => setShowModal(false)}
                  className="flex-1"
                >
                  Close
                </RainbowButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
