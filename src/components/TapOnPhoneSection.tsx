
import { Smartphone, Zap, Lock, Layers, Truck } from "lucide-react";
import { Button } from "./ui/button";

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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="inline-block bg-figo-green/10 p-3 rounded-full mb-4">
              <Smartphone className="h-7 w-7 text-figo-green" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-figo-purple mb-4">
              Tap on Phone: transforme qualquer celular em uma maquininha
            </h2>
            <p className="text-xl font-medium text-figo-purple/90 mb-8">
              Aceite pagamentos por aproximação direto no celular. Sem equipamentos, sem complicações.
            </p>
          </div>

          <div className="mb-12 text-lg text-figo-purple/80 space-y-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <p>
              Com a tecnologia Tap on Phone, a Figo permite que o varejista aceite pagamentos por aproximação (NFC) diretamente no celular Android, sem precisar de maquininhas físicas.
            </p>
            <p>
              Ideal para vendedores externos, autônomos, delivery e operações com mobilidade, essa funcionalidade entrega agilidade, economia e segurança com a mesma qualidade dos meios tradicionais.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-xl md:text-2xl font-bold text-figo-purple mb-6 text-center">
              Vantagens do Tap on Phone com a Figo:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-4 bg-figo-purple-lighter rounded-lg"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <div className="bg-figo-green/10 p-3 rounded-lg mr-4">
                    <advantage.icon className="h-6 w-6 text-figo-green" />
                  </div>
                  <span className="text-figo-purple/90 font-medium">{advantage.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center animate-fade-in-up" style={{ animationDelay: "800ms" }}>
            <Button 
              className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium text-lg px-8 py-6 h-auto" 
              size="lg"
            >
              ➡️ Quero ativar o Tap on Phone
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
