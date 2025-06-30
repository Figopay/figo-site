
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { CookiePreferences } from "@/hooks/useCookieConsent";

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferences: CookiePreferences;
  onUpdatePreference: (type: keyof CookiePreferences, checked: boolean) => void;
  onSave: () => void;
}

export const CookiePreferencesModal = ({
  isOpen,
  onClose,
  preferences,
  onUpdatePreference,
  onSave
}: CookiePreferencesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-figo-purple">Gerenciar Preferências de Cookies</DialogTitle>
          <DialogDescription>
            Escolha quais tipos de cookies você deseja aceitar. Cookies necessários não podem ser desabilitados.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Cookies Necessários */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-figo-purple">Cookies Necessários</h4>
                <p className="text-sm text-figo-purple/70">
                  Essenciais para o funcionamento básico do site. Sempre ativos.
                </p>
              </div>
              <Switch 
                checked={preferences.necessary} 
                disabled={true}
                className="data-[state=checked]:bg-figo-green"
              />
            </div>
          </div>

          {/* Cookies de Analytics */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-figo-purple">Cookies de Analytics</h4>
                <p className="text-sm text-figo-purple/70">
                  Nos ajudam a entender como você usa nosso site para melhorarmos a experiência.
                </p>
              </div>
              <Switch 
                checked={preferences.analytics}
                onCheckedChange={(checked) => onUpdatePreference('analytics', checked)}
                className="data-[state=checked]:bg-figo-green"
              />
            </div>
          </div>

          {/* Cookies de Marketing */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-figo-purple">Cookies de Marketing</h4>
                <p className="text-sm text-figo-purple/70">
                  Utilizados para personalizar anúncios e medir a eficácia de campanhas.
                </p>
              </div>
              <Switch 
                checked={preferences.marketing}
                onCheckedChange={(checked) => onUpdatePreference('marketing', checked)}
                className="data-[state=checked]:bg-figo-green"
              />
            </div>
          </div>

          {/* Cookies Funcionais */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-figo-purple">Cookies Funcionais</h4>
                <p className="text-sm text-figo-purple/70">
                  Permitem funcionalidades aprimoradas como chat ao vivo e personalização.
                </p>
              </div>
              <Switch 
                checked={preferences.functional}
                onCheckedChange={(checked) => onUpdatePreference('functional', checked)}
                className="data-[state=checked]:bg-figo-green"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="flex-1"
          >
            Cancelar
          </Button>
          <Button 
            onClick={onSave}
            className="flex-1 bg-figo-green hover:bg-figo-green/90 text-figo-purple"
          >
            Salvar Preferências
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
