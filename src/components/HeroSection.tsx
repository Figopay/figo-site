
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Smartphone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel className="w-full">
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
                      <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                        Conhecer soluções
                      </Button>
                      <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
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
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>

            {/* Second slide - Physical Marketplace */}
            <CarouselItem>
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
                  <div className="max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-figo-purple mb-4 animate-fade-in-up">
                      O Primeiro <br />
                      <span className="text-figo-green">Marketplace Físico</span> <br />
                      do Mundo
                    </h1>
                    <p className="text-lg md:text-xl text-figo-purple/80 mb-8 animate-fade-in-up animate-delay-200">
                      Revolucionamos o comércio físico unificando vendedores e compradores em uma única plataforma integrada, com todas as soluções necessárias para o seu negócio.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
                      <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                        Saiba mais
                      </Button>
                      <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
                        Como funciona
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/d5e3fd10-5e06-4f16-a72a-5886b8621e97.png"
                      alt="Marketplace físico Figo mostrando pessoas comprando em lojas e utilizando a plataforma"
                      className="w-[130%] h-auto rounded-lg shadow-lg"
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
                      <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium">
                        Começar agora
                      </Button>
                      <Button variant="outline" className="border-figo-purple text-figo-purple hover:bg-figo-purple/10">
                        Ver demonstração
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 animate-fade-in animate-delay-400">
                  <div className="p-0 flex justify-center">
                    <img 
                      src="/lovable-uploads/2268b6e1-4db9-4850-b09f-4a8b141e4dc1.png" 
                      alt="Smartphones mostrando o aplicativo Figo com funcionalidades de pagamento"
                      className="w-[180%] h-auto rounded-lg object-contain" 
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
