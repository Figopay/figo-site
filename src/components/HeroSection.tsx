
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

const WHATSAPP_LINK = "https://wa.me/5511916629760";

export const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
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
            Autoplay({ delay: 6000, stopOnInteraction: false })
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
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                          Conhecer soluções
                        </Button>
                      </a>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
                          Fale com um especialista
                        </Button>
                      </a>
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

            {/* Second slide - Updated with new image */}
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-4 animate-fade-in-up">
                      <span className="text-figo-green">Primeiro Marketplace</span> <br />
                      do mundo físico
                    </h1>
                    <p className="text-lg md:text-xl text-figo-purple/80 mb-8 animate-fade-in-up animate-delay-200">
                      Revolucionamos o comércio físico unificando vendedores e compradores em uma única plataforma integrada, com todas as soluções necessárias para o seu negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                          Saiba mais
                        </Button>
                      </a>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
                          Como funciona
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/40980156-6431-498f-80a3-348c713138d4.png"
                      alt="Terminais de pagamento Figo com aplicativo aberto mostrando interface do marketplace físico"
                      className="w-[130%] h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* New third slide - Tap On Phone */}
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <div className="max-w-lg">
                    <div className="inline-block bg-figo-green/10 p-3 rounded-full mb-4">
                      <Smartphone className="h-7 w-7 text-figo-green" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-4 animate-fade-in-up">
                      Transforme seu <span className="text-figo-green">celular</span> <br />
                      em uma maquininha
                    </h1>
                    <p className="text-lg md:text-xl text-figo-purple/80 mb-8 animate-fade-in-up animate-delay-200">
                      Aceite pagamentos por aproximação direto no celular. Sem equipamentos, sem complicações.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                          Começar agora
                        </Button>
                      </a>
                      <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
                          Ver demonstração
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/d4714528-53f2-463b-a05f-0a88b5c13773.png" 
                      alt="Smartphones mostrando o aplicativo Figo com funcionalidades de pagamento e marketplace"
                      className="w-[250%] h-auto object-contain" 
                    />
                  </div>
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
    </section>
  );
};
