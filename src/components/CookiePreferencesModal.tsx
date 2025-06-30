
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Checkbox } from "./ui/checkbox";
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
                onCheckedChange={(checked) => onUpdatePreference('analytics', checked as boolean)}
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
                onCheckedChange={(checked) => onUpdatePreference('marketing', checked as boolean)}
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
                onCheckedChange={(checked) => onUpdatePreference('functional', checked as boolean)}
                className="data-[state=checked]:bg-figo-green data-[state=checked]:border-figo-green"
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
