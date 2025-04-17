import { Shield, Zap, RefreshCw, PieChart, BarChart4, Smartphone } from "lucide-react";

export const AboutSection = () => {
  const features = [
    { 
      icon: RefreshCw, 
      title: "Roteamento automático", 
      description: "Utilize a melhor taxa para cada transação de forma automática e inteligente" 
    },
    { 
      icon: PieChart, 
      title: "Economia de até 20%", 
      description: "Reduza custos significativamente nas taxas de suas transações financeiras" 
    },
    { 
      icon: Smartphone, 
      title: "Múltiplos dispositivos", 
      description: "Operação via SmartPOS, Pinpad, celular ou desktop" 
    },
    { 
      icon: Shield, 
      title: "Pagamentos diversos", 
      description: "Vendas por Pix, carteiras digitais, links e assinaturas" 
    },
    { 
      icon: BarChart4, 
      title: "Solução white-label", 
      description: "Personalize completamente a plataforma com sua marca" 
    },
    { 
      icon: Zap, 
      title: "APIs modernas", 
      description: "Integração simples e rápida com sistemas existentes" 
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
            A Figo é uma plataforma completa que reúne todos os meios de pagamento e serviços financeiros em um só lugar.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            Somos a única solução multiadquirente e multicanal que simplifica as transações do varejo com roteamento automático da melhor taxa para cada venda — garantindo mais economia e eficiência para o seu negócio.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            Também atuamos como um marketplace de serviços financeiros, oferecendo soluções que geram valor para o varejo e ampliam as possibilidades de receita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-figo-green/10 p-3 rounded-lg inline-block mb-4">
                <feature.icon className="h-6 w-6 text-figo-green" />
              </div>
              <h3 className="font-bold text-xl text-figo-purple mb-2">{feature.title}</h3>
              <p className="text-figo-purple/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
