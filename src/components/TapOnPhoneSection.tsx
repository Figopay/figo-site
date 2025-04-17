
import { Smartphone, Zap, Lock, Layers, Truck } from "lucide-react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

export const TapOnPhoneSection = () => {
  const advantages = [
    {
      icon: Smartphone,
      text: "Funciona em celulares Android com NFC"
    },
    {
      icon: Zap,
      text: "Não requer hardware adicional"
    },
    {
      icon: Layers,
      text: "Totalmente integrado à plataforma Figo"
    },
    {
      icon: Lock,
      text: "Rápido, seguro e prático"
    },
    {
      icon: Truck,
      text: "Perfeito para operações leves e multicanal"
    }
  ];

  return (
    <section className="py-20 bg-figo-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna de conteúdo */}
          <div className="animate-fade-in-up">
            <div className="text-center lg:text-left mb-10">
              <div className="inline-block bg-figo-green/10 p-3 rounded-full mb-4">
                <Smartphone className="h-7 w-7 text-figo-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tap on Phone: transforme qualquer celular em uma maquininha
              </h2>
              <p className="text-xl font-medium text-white/90 mb-8">
                Aceite pagamentos por aproximação direto no celular. Sem equipamentos, sem complicações.
              </p>
            </div>

            <div className="mb-12 text-lg text-white/80 space-y-6" style={{ animationDelay: "100ms" }}>
              <p>
                Com a tecnologia Tap on Phone, a Figo permite que o varejista aceite pagamentos por aproximação (NFC) diretamente no celular Android, sem precisar de maquininhas físicas.
              </p>
              <p>
                Ideal para vendedores externos, autônomos, delivery e operações com mobilidade, essa funcionalidade entrega agilidade, economia e segurança com a mesma qualidade dos meios tradicionais.
              </p>
            </div>
          </div>

          {/* Coluna de imagem */}
          <div className="lg:pl-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <div className="rounded-2xl overflow-hidden bg-white/10 p-4">
              <AspectRatio ratio={4/3} className="bg-figo-purple-light rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Tap on Phone em uso"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>

        {/* Bullets horizontais */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">
            Vantagens do Tap on Phone com a Figo:
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {advantages.map((advantage, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 bg-white/10 rounded-full backdrop-blur-sm"
                style={{ animationDelay: `${300 + index * 100}ms` }}
              >
                <div className="bg-figo-green/10 p-2 rounded-full mr-3">
                  <advantage.icon className="h-5 w-5 text-figo-green" />
                </div>
                <span className="text-white font-medium whitespace-nowrap">{advantage.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "800ms" }}>
          <Button 
            className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium text-lg px-8 py-6 h-auto" 
            size="lg"
          >
            ➡️ Quero ativar o Tap on Phone
          </Button>
        </div>
      </div>
    </section>
  );
};
