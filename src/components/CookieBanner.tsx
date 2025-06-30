import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
import { X, Cookie, Settings } from "lucide-react";

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // sempre true, não pode ser desabilitado
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Verifica se o usuário já deu consentimento
    const cookieConsent = localStorage.getItem('figo-cookie-consent');
    if (!cookieConsent) {
      setShowBanner(true);
    } else {
      // Carrega as preferências salvas
      const savedPreferences = JSON.parse(cookieConsent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('figo-cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
    
    // Aqui você pode adicionar lógica para ativar os cookies/scripts
    console.log('Todos os cookies aceitos:', allAccepted);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('figo-cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
    
    // Aqui você pode adicionar lógica para ativar apenas os cookies selecionados
    console.log('Preferências salvas:', preferences);
  };

  const handleManagePreferences = () => {
    setShowPreferences(true);
  };

  const updatePreference = (type: keyof typeof preferences, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [type]: checked
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner Principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-figo-green mt-1 flex-shrink-0" />
              <div className="text-sm text-figo-purple/80 leading-relaxed">
                <p>
                  Este site usa cookies para oferecer uma experiência melhor. Ao navegar, você aceita nossa Política de Privacidade.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={handleManagePreferences}
                className="text-figo-purple border-figo-purple hover:bg-figo-purple hover:text-white"
              >
                <Settings className="h-4 w-4 mr-2" />
                Gerenciar Preferências
              </Button>
              <Button 
                onClick={handleAcceptAll}
                className="bg-figo-green hover:bg-figo-green/90 text-figo-purple"
              >
                Aceitar Todos os Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Preferências */}
      <Dialog open={showPreferences} onOpenChange={setShowPreferences}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-figo-purple">Preferências de Cookies</DialogTitle>
            <DialogDescription>
              Personalize suas preferências de cookies. Os cookies necessários são obrigatórios 
              para o funcionamento básico do site.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Cookies Necessários */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-figo-purple">Cookies Necessários</h4>
                  <p className="text-sm text-figo-purple/70">
                    Essenciais para o funcionamento básico do site
                  </p>
                </div>
                <Checkbox 
                  checked={preferences.necessary} 
                  disabled={true}
                  className="data-[state=checked]:bg-figo-green data-[state=checked]:border-figo-green"
                />
              </div>
            </div>

            {/* Cookies de Analytics */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-figo-purple">Cookies de Análise</h4>
                  <p className="text-sm text-figo-purple/70">
                    Nos ajudam a entender como você usa o site
                  </p>
                </div>
                <Checkbox 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => updatePreference('analytics', checked as boolean)}
                  className="data-[state=checked]:bg-figo-green data-[state=checked]:border-figo-green"
                />
              </div>
            </div>

            {/* Cookies de Marketing */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-figo-purple">Cookies de Marketing</h4>
                  <p className="text-sm text-figo-purple/70">
                    Personalizam anúncios e conteúdo para você
                  </p>
                </div>
                <Checkbox 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => updatePreference('marketing', checked as boolean)}
                  className="data-[state=checked]:bg-figo-green data-[state=checked]:border-figo-green"
                />
              </div>
            </div>

            {/* Cookies Funcionais */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-figo-purple">Cookies Funcionais</h4>
                  <p className="text-sm text-figo-purple/70">
                    Melhoram a funcionalidade e personalização
                  </p>
                </div>
                <Checkbox 
                  checked={preferences.functional}
                  onCheckedChange={(checked) => updatePreference('functional', checked as boolean)}
                  className="data-[state=checked]:bg-figo-green data-[state=checked]:border-figo-green"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button 
              variant="outline" 
              onClick={() => setShowPreferences(false)}
              className="flex-1"
            >
              Cancelar
            </Button>
            <Button 
              onClick={handleSavePreferences}
              className="flex-1 bg-figo-green hover:bg-figo-green/90 text-figo-purple"
            >
              Salvar Preferências
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
