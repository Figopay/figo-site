
import { Button } from "./ui/button";

interface ContactFormThankYouProps {
  onClose: () => void;
}

export const ContactFormThankYou = ({ onClose }: ContactFormThankYouProps) => {
  return (
    <div className="text-center py-8">
      <div className="mb-6">
        <div className="w-16 h-16 bg-figo-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-figo-purple leading-relaxed">
          Obrigado pelo seu contato! Em breve, um especialista da Figo Pay entrará em contato com você para entender melhor suas necessidades e apresentar as melhores soluções para o seu negócio.
        </p>
      </div>
      <Button 
        onClick={onClose}
        className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
      >
        Fechar
      </Button>
    </div>
  );
};
