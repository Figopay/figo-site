
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
            A Figo Pay nasceu para ser o <strong>Caixa Inteligente</strong> do varejo brasileiro. Somos uma <strong>plataforma multicanal</strong> que centraliza cartões, PIX, links de pagamento e até dinheiro em um único fluxo, garantindo <strong>segurança no fechamento de caixa</strong> e controle em tempo real de todos os recebíveis.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            Com nossa <strong>multiadquirência inteligente</strong>, cada transação é roteada automaticamente para a melhor condição de custo, gerando <strong>economia imediata</strong> e mais margem para o lojista. Além disso, oferecemos soluções nativas de fidelização com <strong>cashback automático</strong> e recursos operacionais que conectam vendas presenciais e remotas, simplificando a rotina e fortalecendo o relacionamento com os clientes.
          </p>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto mt-4">
            Mais do que tecnologia, somos <strong>parceiros do varejista</strong> que busca segurança, eficiência e crescimento sustentável no seu negócio.
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
