import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ContactForm } from "./ContactForm";

const WHATSAPP_LINK = "https://wa.me/5511916629760";
const FIGO_SHOP_LINK = "https://www.figoshop.com.br/";

export const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, stopOnInteraction: false })
  ]);
  
  useEffect(() => {
    // Preload the first hero image
    const preloadImage = new Image();
    preloadImage.src = "/lovable-uploads/26649d1d-e782-4d5a-a032-65e5934b4d99.png";
    preloadImage.onload = () => setImagesLoaded(true);
  }, []);

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel 
          className="w-full"
          ref={emblaRef}
          opts={{ 
            loop: true,
          }}
          plugins={[
            Autoplay({ delay: 8000, stopOnInteraction: false })
          ]}
        >
          <CarouselContent>
            {/* First slide - Original content */}
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-4 animate-fade-in-up">
                      Do seu jeito. <br />
                      Todos os pagamentos. <br />
                      <span className="text-figo-green">Uma única plataforma.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-figo-purple/80 mb-8 animate-fade-in-up animate-delay-200">
                      A Figo é a única plataforma multiadquirente que unifica todos os pagamentos e serviços financeiros em um só lugar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                      <Button 
                        onClick={() => setIsFormOpen(true)}
                        className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
                      >
                        Conheça o Caixa inteligente
                      </Button>
                      <Button 
                        onClick={() => setIsFormOpen(true)}
                        variant="outline" 
                        className="border-figo-purple text-figo-purple hover:bg-figo-purple/10"
                      >
                        Fale com um especialista
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/26649d1d-e782-4d5a-a032-65e5934b4d99.png"
                      alt="Terminal de pagamento Figo com aplicativo aberto mostrando interface e funcionalidades"
                      className="w-[130%] h-auto"
                      loading="eager"
                      fetchPriority="high"
                      style={{
                        opacity: imagesLoaded ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out"
                      }}
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Second slide - Figo Pay Caixa Inteligente */}
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-4 animate-fade-in-up">
                      Figo Pay - <span className="text-figo-green">O Caixa inteligente</span> <br />
                      do seu negócio
                    </h1>
                    <p className="text-lg md:text-xl text-figo-purple/80 mb-8 animate-fade-in-up animate-delay-200">
                      Muito além de maquininha, a Figo Pay é o Caixa Inteligente que centraliza todos as formas de pagamento e garante seu fechamento de caixa!!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                      <Button 
                        onClick={() => setIsFormOpen(true)}
                        className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
                      >
                        Conheça o Caixa inteligente
                      </Button>
                      <Button 
                        onClick={() => setIsFormOpen(true)}
                        variant="outline" 
                        className="border-figo-purple text-figo-purple hover:bg-figo-purple/10"
                      >
                        Fale com um especialista
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/40980156-6431-498f-80a3-348c713138d4.png"
                      alt="Terminais de pagamento Figo com aplicativo aberto mostrando interface do Caixa Inteligente"
                      className="w-[130%] h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* New third slide - Multiplataformas */}
            <CarouselItem>
              <div className="flex flex-col items-center text-center">
                <div className="mb-8">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-2 animate-fade-in-up">
                    A Figo Pay é <span className="text-figo-green">Multiplataformas</span>
                  </h1>
                  <p className="text-base md:text-lg text-figo-purple/80 max-w-4xl mx-auto animate-fade-in-up animate-delay-200">
                    A Figo Pay funciona onde o seu negócio estiver: SmartPOS, Pinpad, computador ou celular. Você escolhe o dispositivo ideal para o seu dia a dia e tem acesso às mesmas funcionalidades em qualquer ambiente, com praticidade, flexibilidade e controle total das vendas.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl animate-fade-in animate-delay-400">
                  {/* Tap On Phone */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg flex items-center justify-center h-48 w-full">
                      <img 
                        src="/lovable-uploads/2268b6e1-4db9-4850-b09f-4a8b141e4dc1.png"
                        alt="Tap On Phone Figo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="bg-figo-green rounded-full px-6 py-2">
                      <span className="text-figo-purple font-semibold text-sm md:text-base">Tap On Phone</span>
                    </div>
                  </div>

                  {/* SmartPOS */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg flex items-center justify-center h-48 w-full">
                      <img 
                        src="/lovable-uploads/d5e3fd10-5e06-4f16-a72a-5886b8621e97.png"
                        alt="SmartPOS Figo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="bg-figo-green rounded-full px-6 py-2">
                      <span className="text-figo-purple font-semibold text-sm md:text-base">Smart POS</span>
                    </div>
                  </div>

                  {/* PinPad */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg flex items-center justify-center h-48 w-full">
                      <img 
                        src="/lovable-uploads/pinpad-device.png"
                        alt="PinPad Figo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="bg-figo-green rounded-full px-6 py-2">
                      <span className="text-figo-purple font-semibold text-sm md:text-base">PinPad</span>
                    </div>
                  </div>

                  {/* Desktop / Link de Pagamento */}
                  <div className="flex flex-col items-center">
                    <div className="bg-white rounded-lg p-4 mb-4 shadow-lg flex items-center justify-center h-48 w-full">
                      <img 
                        src="/lovable-uploads/desktop-notebook.png"
                        alt="Desktop e Link de Pagamento Figo"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                    <div className="bg-figo-green rounded-full px-6 py-2 whitespace-nowrap">
                      <span className="text-figo-purple font-semibold text-sm md:text-base">Desktop</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-500">
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
                  >
                    Conheça o Caixa inteligente
                  </Button>
                  <Button 
                    onClick={() => setIsFormOpen(true)}
                    variant="outline" 
                    className="border-figo-purple text-figo-purple hover:bg-figo-purple/10"
                  >
                    Fale com um especialista
                  </Button>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          
          <div className="mt-8 flex justify-center gap-4">
            <CarouselPrevious className="relative static transform-none translate-y-0 left-0" />
            <CarouselNext className="relative static transform-none translate-y-0 right-0" />
          </div>
        </Carousel>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};
