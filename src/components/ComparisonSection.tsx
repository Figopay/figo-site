import { Check, X } from "lucide-react";

export const ComparisonSection = () => {
  const features = [
    { name: "Aceita cartão", traditional: true, figo: true },
    { name: "Multi PIX Integrado", traditional: false, figo: true },
    { name: "Fechamento de caixa consolidado", traditional: false, figo: true },
    { name: "CashBack Integrado", traditional: false, figo: true },
    { name: "Controle total de diversas adquirentes", traditional: false, figo: true },
    { name: "Ordem de pedidos para motoboy / delivery", traditional: false, figo: true },
    { name: "Multiadquirência", traditional: false, figo: true },
    { name: "Recarga de celular", traditional: false, figo: true },
    { name: "Link de pagamento", traditional: false, figo: true },
    { name: "Registro de pagamento dinheiro", traditional: false, figo: true },
    { name: "Conciliador de cartão de crédito", traditional: false, figo: true },
    { name: "Gestão de assinatura (pagamento recorrente)", traditional: false, figo: true },
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-figo-purple mb-4">
            Serviços oferecidos
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-figo-purple/80 mt-6">
            Comparativo: Maquininha x Caixa Inteligente Figo
          </h3>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div className="overflow-x-auto rounded-2xl shadow-2xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-figo-purple to-figo-purple/90">
                  <th className="py-6 px-6 text-center text-white font-bold text-lg border-r border-white/20">
                    Recurso
                  </th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg border-r border-white/20">
                    Maquininha tradicional
                  </th>
                  <th className="py-6 px-6 text-center text-white font-bold text-lg">
                    Figo Pay - Caixa Inteligente
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-figo-green/5 transition-colors duration-200`}
                  >
                    <td className="py-3 px-6 text-figo-purple font-medium border-r border-gray-200">
                      {feature.name}
                    </td>
                    <td className="py-3 px-6 text-center border-r border-gray-200">
                      {feature.traditional ? (
                        <div className="inline-flex items-center justify-center bg-green-50 text-green-700 w-12 h-12 rounded-full mx-auto">
                          <Check className="h-7 w-7" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center bg-red-50 text-red-600 w-12 h-12 rounded-full mx-auto">
                          <X className="h-7 w-7" />
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {feature.figo ? (
                        <div className="inline-flex items-center justify-center bg-green-50 text-green-700 w-12 h-12 rounded-full mx-auto">
                          <Check className="h-7 w-7" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center bg-red-50 text-red-600 w-12 h-12 rounded-full mx-auto">
                          <X className="h-7 w-7" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary callout */}
          <div className="mt-12 bg-gradient-to-r from-figo-green/10 to-figo-purple/10 rounded-2xl p-8 text-center">
            <p className="text-xl md:text-2xl font-bold text-figo-purple mb-2">
              12 recursos essenciais em uma única plataforma
            </p>
            <p className="text-figo-purple/70 text-lg">
              Diferente das maquininhas tradicionais a <span className="font-bold text-figo-green">Figo Pay</span> entrega a solução completa para o seu negócio crescer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
