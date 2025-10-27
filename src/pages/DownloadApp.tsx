import { Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import figoLogo from "@/assets/figopay-logo.png";
import figoDevice from "@/assets/figo-device.png";

const DownloadApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-figo-purple/5 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <img 
            src={figoLogo} 
            alt="Figo Pay Logo" 
            className="h-16 w-auto"
          />
        </div>

        {/* Conteúdo em duas colunas */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Imagem da Máquina */}
          <div className="flex justify-center md:justify-end">
            <img 
              src={figoDevice} 
              alt="Máquina Figo Pay" 
              className="max-w-2xl w-full h-auto"
            />
          </div>

          {/* Coluna Direita - Conteúdo */}
          <div className="space-y-8 text-center md:text-left">
            {/* Título */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Baixe o App da Figo
              </h1>
              <p className="text-xl text-muted-foreground">
                Gerencie suas vendas, controle seu caixa e acompanhe tudo em tempo real na palma da sua mão
              </p>
            </div>

            {/* Botões de Download */}
            <div className="flex flex-col gap-4">
              <Button
                size="lg"
                className="w-full min-w-[240px] h-14 text-lg gap-3 bg-foreground text-background hover:bg-foreground/90"
                onClick={() => {
                  window.open('https://apps.apple.com/br/app/figo-pay-app/id6744122248', '_blank');
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
                className="w-full min-w-[240px] h-14 text-lg gap-3 bg-foreground text-background hover:bg-foreground/90"
                onClick={() => {
                  window.open('https://play.google.com/store/apps/details?id=com.payer.payer_app.figopay', '_blank');
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
            <div className="pt-8 space-y-6">
              <div className="grid grid-cols-3 gap-4">
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
            <div className="text-sm text-muted-foreground">
              <p>Compatível com iOS 13.0+ e Android 8.0+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
