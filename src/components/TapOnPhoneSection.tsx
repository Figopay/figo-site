
import React from "react";
import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";

export const TapOnPhoneSection = () => {
  return (
    <section className="py-20 bg-figo-purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="text-center lg:text-left mb-10">
              <div className="inline-block bg-figo-green/10 p-3 rounded-full mb-4">
                <Smartphone className="h-7 w-7 text-figo-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-figo-green mb-4">
                Transforme qualquer celular em uma maquininha, com a tecnologia Tap On Phone
              </h2>
              <p className="text-xl font-medium text-white/90 mb-8">
                Aceite pagamentos por aproximação direto no celular. Sem equipamentos, sem complicações.
              </p>
            </div>

            <div className="mb-12 text-lg text-white/80 space-y-6" style={{ animationDelay: "100ms" }}>
              <p>
                Com a tecnologia Tap on Phone, a Figo permite que o varejista aceite pagamentos por aproximação diretamente no celular sem precisar de maquininhas.
              </p>
              <p>
                Ideal para vendedores externos, autônomos, delivery e operações com mobilidade, essa funcionalidade entrega agilidade, economia e segurança com a mesma qualidade dos meios tradicionais.
              </p>
            </div>
          </div>

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
