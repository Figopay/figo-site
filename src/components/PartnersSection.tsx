
import { Code, PenTool, Building } from "lucide-react";
import { Button } from "./ui/button";

const WHATSAPP_LINK = "https://wa.me/5511916629760";

export const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-20 bg-figo-purple-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-figo-purple">
            Para parceiros e <span className="text-figo-green">desenvolvedores</span>
          </h2>
          <p className="text-lg text-figo-purple/70 max-w-3xl mx-auto">
            Crie soluções personalizadas e gere novas fontes de receita com nossas APIs e programas de parceria.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-figo-purple text-white rounded-lg p-8 border border-figo-purple/20 hover:shadow-xl transition-all duration-300">
            <div className="bg-white/10 p-4 rounded-lg inline-block mb-6">
              <Code className="h-8 w-8 text-figo-green" />
            </div>
            <h3 className="font-bold text-xl mb-4">Integração via API</h3>
            <p className="text-white/80">
              Nossas APIs RESTful e SDKs facilitam a integração com qualquer plataforma ou sistema existente. Documentação clara e suporte técnico especializado.
            </p>
          </div>

          <div className="bg-figo-purple text-white rounded-lg p-8 border border-figo-purple/20 hover:shadow-xl transition-all duration-300">
            <div className="bg-white/10 p-4 rounded-lg inline-block mb-6">
              <PenTool className="h-8 w-8 text-figo-green" />
            </div>
            <h3 className="font-bold text-xl mb-4">Personalização Total</h3>
            <p className="text-white/80">
              Personalize completamente nossa solução com sua marca. Ofereça uma experiência única para seus clientes mantendo total controle sobre a identidade visual.
            </p>
          </div>

          <div className="bg-figo-purple text-white rounded-lg p-8 border border-figo-purple/20 hover:shadow-xl transition-all duration-300">
            <div className="bg-white/10 p-4 rounded-lg inline-block mb-6">
              <Building className="h-8 w-8 text-figo-green" />
            </div>
            <h3 className="font-bold text-xl mb-4">Geração de valor</h3>
            <p className="text-white/80">
              Seja o agente de transformação do varejo, levando inovação, tecnologia e eficiência para seus clientes com a Figo. Uma oportunidade de fortalecer relacionamentos e ampliar sua atuação com uma solução completa e moderna.
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium text-lg px-8 py-3">
              Seja um parceiro
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
