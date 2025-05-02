
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="p-0">
              <img 
                src="/lovable-uploads/26649d1d-e782-4d5a-a032-65e5934b4d99.png"
                alt="Terminal de pagamento Figo com aplicativo aberto mostrando interface e funcionalidades"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
