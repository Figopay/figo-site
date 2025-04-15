
import { CreditCard, Gift, Wallet, Smartphone, Car, Split, Ticket, PiggyBank } from "lucide-react";
import { Badge } from "./ui/badge";

export const ServicesSection = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Recarga de celular",
      description: "Ofereça recargas para todas as operadoras com excelentes comissões",
      badge: "Popular"
    },
    {
      icon: Wallet,
      title: "Cashback",
      description: "Programas personalizados de retorno financeiro para fidelizar clientes"
    },
    {
      icon: CreditCard,
      title: "Microseguros",
      description: "Proteções acessíveis para equipamentos e compras"
    },
    {
      icon: Car,
      title: "Parcelamento de multas e IPVA",
      description: "Facilite o pagamento de débitos veiculares para seus clientes"
    },
    {
      icon: Split,
      title: "Split de pagamento",
      description: "Divisão automática de valores entre múltiplos beneficiários"
    },
    {
      icon: Ticket,
      title: "Vouchers (iFood, Uber)",
      description: "Comercialize créditos para diversos serviços populares"
    },
    {
      icon: Gift,
      title: "Programas de fidelidade",
      description: "Crie e gerencie campanhas de pontos customizadas"
    },
    {
      icon: PiggyBank,
      title: "Saque Pix e correspondente bancário",
      description: "Transforme seu negócio em um ponto bancário",
      badge: "Em breve"
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-figo-purple-lighter to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-figo-purple mb-4">
            Serviços <span className="text-figo-green">oferecidos</span>
          </h2>
          <p className="text-lg text-figo-purple/80 max-w-3xl mx-auto">
            Além das soluções de pagamento, oferecemos uma gama completa de serviços financeiros para aumentar seu faturamento e melhorar a experiência de seus clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-figo-purple/10 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-figo-green/10 p-3 rounded-lg inline-block">
                  <service.icon className="h-6 w-6 text-figo-green" />
                </div>
                {service.badge && (
                  <Badge variant="outline" className="border-figo-purple text-figo-purple">
                    {service.badge}
                  </Badge>
                )}
              </div>
              <h3 className="font-bold text-lg text-figo-purple mb-2">{service.title}</h3>
              <p className="text-figo-purple/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
