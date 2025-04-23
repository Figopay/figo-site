
import { Shield, CreditCard, BarChart4, Smartphone, Percent, CheckCircle } from "lucide-react";

export const AboutSection = () => {
  const features = [
    { 
      icon: CreditCard, 
      title: "Plataforma Multiadquirente", 
      description: "Centralize todas as adquirentes em um único equipamento e tenha autonomia para escolher a melhor opção a cada venda." 
    },
    { 
      icon: Percent, 
      title: "Economia de até 20%", 
      description: "Reduza custos com o roteamento automático da melhor taxa por transação, otimizando sua operação financeira de forma inteligente." 
    },
    { 
      icon: Smartphone, 
      title: "Pagamentos multicanal e flexíveis", 
      description: "Aceite Pix, carteiras digitais, links de pagamento e assinaturas recorrentes com agilidade e segurança, operando via SmartPOS, Pinpad, desktop ou celular, adaptável ao seu modelo de negócio." 
    },
    { 
      icon: Shield, 
      title: "Serviços financeiros integrados", 
      description: "Ofereça ao seu cliente a conveniencia de oferecer serviços que vão além do pagamento, serviços financeiros complementares que aumentam a rentabilidade." 
    },
    { 
      icon: BarChart4, 
      title: "Gestão de assinaturas inteligente", 
      description: "Ofereça serviços recorrentes de forma prática e segura, com cobranças mensais sem comprometer o limite do cartão de crédito do cliente — ideal para fidelização e aumento da receita previsível." 
    },
    { 
      icon: CheckCircle, 
      title: "Ampla rede de varejistas", 
      description: "Presente em +2000 estabelecimentos, ajudando o varejista a Economizar, Crescer e Gerir melhor" 
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
            Somos a única solução multiadquirente e multicanal que simplifica as transações do varejo com roteamento automático da melhor taxa para cada venda — garantindo mais economia e eficiência para o seu negócio. Também atuamos como um marketplace de serviços financeiros, oferecendo soluções que geram valor para o varejo e ampliam as possibilidades de receita.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            <strong>A Figo é uma plataforma completa que reúne todos os meios de pagamento e serviços financeiros em um só lugar.</strong>
          </p>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-figo-purple">
            Principais diferenciais da <span className="text-figo-green">Figo</span>
          </h3>
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
