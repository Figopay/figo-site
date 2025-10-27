import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-figo-purple/5 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img 
            src="/lovable-uploads/425a4488-2866-41f7-b642-dfe510a5e328.png" 
            alt="Figo Logo" 
            className="h-20 w-auto"
          />
        </div>

        {/* Título */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Baixe o App da Figo
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Gerencie suas vendas, controle seu caixa e acompanhe tudo em tempo real na palma da sua mão
          </p>
        </div>

        {/* Botões de Download */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[240px] h-14 text-lg gap-3 bg-foreground text-background hover:bg-foreground/90"
            onClick={() => {
              // Link da App Store quando disponível
              window.open('https://apps.apple.com/', '_blank');
            }}
          >
            <Apple className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs opacity-80">Disponível na</div>
              <div className="font-semibold">App Store</div>
            </div>
          </Button>

          <Button
            size="lg"
            className="w-full sm:w-auto min-w-[240px] h-14 text-lg gap-3 bg-foreground text-background hover:bg-foreground/90"
            onClick={() => {
              // Link da Google Play quando disponível
              window.open('https://play.google.com/', '_blank');
            }}
          >
            <Smartphone className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs opacity-80">Baixe no</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </Button>
        </div>

        {/* Informações adicionais */}
        <div className="pt-12 space-y-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-figo-purple">100%</div>
              <p className="text-sm text-muted-foreground">Gratuito para baixar</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-figo-purple">24/7</div>
              <p className="text-sm text-muted-foreground">Acesso a qualquer hora</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-figo-purple">Real-time</div>
              <p className="text-sm text-muted-foreground">Dados em tempo real</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 text-sm text-muted-foreground">
          <p>Compatível com iOS 13.0+ e Android 8.0+</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
