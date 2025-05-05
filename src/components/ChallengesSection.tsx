
import { AlertCircle, Shuffle, Receipt, ShieldAlert, DollarSign } from "lucide-react";

export const ChallengesSection = () => {
  const challenges = [
    {
      icon: Shuffle,
      title: "Complexidade com várias adquirentes",
      description: "Gerenciar múltiplas integrações e plataformas gera ineficiência operacional"
    },
    {
      icon: Receipt,
      title: "Troca constante de equipamentos",
      description: "Custos elevados e perda de tempo com equipamentos incompatíveis"
    },
    {
      icon: ShieldAlert,
      title: "Risco de fraude",
      description: "Vulnerabilidade a fraudes pela falta de sistemas integrados de proteção"
    },
    {
      icon: DollarSign,
      title: "Altos custos operacionais",
      description: "Falta de controle centralizado que resulta em gastos desnecessários"
    }
  ];

  return (
    <section className="pt-0 pb-20 bg-figo-purple-lighter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block bg-figo-purple/5 p-2 px-4 rounded-full mb-4">
            <AlertCircle className="h-5 w-5 text-figo-purple inline mr-2" />
            <span className="text-figo-purple font-medium">Desafios do varejo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-figo-purple mb-4">
            Problemas que a <span className="text-figo-green">Figo</span> resolve
          </h2>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto">
            Entendemos os desafios diários do varejo e oferecemos soluções eficientes para tornar seu negócio mais produtivo e rentável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-figo-green-light border border-figo-purple/5 rounded-lg p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="bg-white p-3 rounded-lg inline-block mb-4 shadow-sm">
                <challenge.icon className="h-6 w-6 text-figo-purple" />
              </div>
              <h3 className="font-bold text-lg text-figo-purple mb-2">{challenge.title}</h3>
              <p className="text-figo-purple/70 text-sm">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
