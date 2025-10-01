import { CheckCircle, Shield, TrendingUp, Zap, Heart, Sparkles } from "lucide-react";

export const FigoWaySection = () => {
  const solutions = [
    {
      icon: CheckCircle,
      title: "Fechamento de caixa em tempo real",
      description: "Centraliza todos os pagamentos — cartões, PIX, links de pagamento e dinheiro — em um único fluxo, garantindo segurança e praticidade no fechamento diário."
    },
    {
      icon: TrendingUp,
      title: "Gestão unificada de recebíveis",
      description: "Um só painel para acompanhar todas as adquirentes, sem precisar acessar múltiplos portais ou sistemas."
    },
    {
      icon: Zap,
      title: "Multiadquirência inteligente",
      description: "Cada transação é processada pela adquirente já contratada pelo lojista e roteada automaticamente para a melhor condição de taxa, garantindo economia real a cada venda."
    },
    {
      icon: Shield,
      title: "Caixa seguro e transparente",
      description: "Reduz riscos de fraude e divergências, registrando todas as formas de pagamento de forma consolidada."
    },
    {
      icon: Heart,
      title: "Cashback integrado",
      description: "Fidelização automática: cada venda vira oportunidade de recompra, sem depender de programas externos."
    },
    {
      icon: Sparkles,
      title: "Operação simples e eficiente",
      description: "Uma plataforma intuitiva que descomplica processos e devolve tempo ao lojista para focar no crescimento do negócio."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-figo-purple/5 via-white to-figo-green/5 relative overflow-hidden">
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-figo-purple-lighter"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-figo-purple">O jeito </span>
            <span className="text-figo-green">Figo </span>
            <span className="text-figo-purple">de resolver seus desafios</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in-up border-2 border-transparent hover:border-figo-green/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-figo-green to-figo-green/80 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 mt-4">
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-figo-purple/10 to-figo-green/10 group-hover:from-figo-purple/20 group-hover:to-figo-green/20 transition-colors duration-300">
                  <solution.icon className="h-8 w-8 text-figo-purple" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-figo-purple mb-3 leading-tight">
                {solution.title}
              </h3>
              <p className="text-figo-purple/70 leading-relaxed">
                {solution.description}
              </p>

              {/* Decorative element */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-figo-green/5 to-transparent rounded-tl-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};
