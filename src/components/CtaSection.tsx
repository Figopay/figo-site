import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactForm } from "./ContactForm";

interface CtaSectionProps {
  variant?: "default" | "compact";
  className?: string;
}

export const CtaSection = ({ variant = "default", className = "" }: CtaSectionProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  if (variant === "compact") {
    return (
      <>
        <div className={`flex justify-center py-8 ${className}`}>
          <Button 
            onClick={() => setIsFormOpen(true)}
            className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium min-w-[220px]"
            size="lg"
          >
            Conheça o caixa Inteligente
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </>
    );
  }

  return (
    <>
      <section className={`py-16 bg-gradient-to-r from-figo-purple/5 to-figo-green/5 ${className}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-figo-purple mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Descubra como o Caixa Inteligente pode revolucionar a forma como você recebe pagamentos
            </p>
            <Button 
              onClick={() => setIsFormOpen(true)}
              className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium min-w-[220px]"
              size="lg"
            >
              Conheça o caixa Inteligente
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};
