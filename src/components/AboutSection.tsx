
import { Shield, Heart, TrendingUp } from "lucide-react";

export const AboutSection = () => {
  const features = [
    { 
      icon: Shield, 
      title: "Segurança & Controle", 
      description: "Feche seu caixa em tempo real com todos os meios de pagamento unificados (cartão, PIX e dinheiro). Mais segurança, menos erros" 
    },
    { 
      icon: Heart, 
      title: "Fidelização Integrada", 
      description: "Transforme cada venda em uma oportunidade de recompra com o cashback nativo integrado à Figo Pay." 
    },
    { 
      icon: TrendingUp, 
      title: "Mais controle", 
      description: "Todos os seus recebíveis, diferentes adquirentes, links de pagamento e PIX reunidos em um único painel em tempo real" 
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-figo-purple-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-figo-purple mb-4">
            Sobre a <span className="text-figo-green">Figo</span>
          </h2>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto">
            A Figo Pay nasceu para ser o Caixa Inteligente do varejo brasileiro. Somos uma plataforma multicanal que centraliza cartões, PIX, links de pagamento e até dinheiro em um único fluxo, garantindo segurança no fechamento de caixa e controle em tempo real de todos os recebíveis.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            A Figo não muda a sua rotina financeira, o varejista mantém seus contratos de adquirentes vigentes e continua operando como já está acostumado. Nosso papel é fazer você economizar com a gestão inteligente das taxas e reunir todas as informações em um único lugar, simples e transparente. Cada transação é roteada automaticamente para a melhor condição de taxa, gerando economia imediata.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            Mais do que tecnologia, somos parceiros do varejista que busca segurança, eficiência e crescimento sustentável no seu negócio.
          </p>
        </div>

        <div className="relative bg-figo-green/30 py-16 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          {/* Curved edges */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute left-0 top-0 h-full" width="100" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 Q50,50 0,100 Z" fill="white" opacity="0.3" />
            </svg>
            <svg className="absolute right-0 top-0 h-full" width="100" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M100,0 Q50,50 100,100 Z" fill="white" opacity="0.3" />
            </svg>
          </div>

          <div className="relative text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-figo-purple">
              Principais diferenciais da <span className="text-figo-green">Figo</span>
            </h3>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-figo-green/20 p-4 rounded-full inline-block mb-6">
                  <feature.icon className="h-8 w-8 text-figo-purple" />
                </div>
                <h3 className="font-bold text-2xl text-figo-purple mb-3">{feature.title}</h3>
                <p className="text-figo-purple/80 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
