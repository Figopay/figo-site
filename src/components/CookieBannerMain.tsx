
import React from "react";
import { Button } from "./ui/button";
import { Cookie, Settings } from "lucide-react";
import { Link } from "react-router-dom";

interface CookieBannerMainProps {
  onAcceptAll: () => void;
  onManagePreferences: () => void;
}

export const CookieBannerMain = ({ onAcceptAll, onManagePreferences }: CookieBannerMainProps) => {
  const handlePrivacyPolicyClick = () => {
    // Scroll to top when navigating to privacy policy
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="h-6 w-6 text-figo-green mt-1 flex-shrink-0" />
            <div className="text-sm text-figo-purple/80 leading-relaxed">
              <p>
                Este site usa cookies para oferecer uma experiência melhor. Ao navegar, você aceita nossa{" "}
                <Link 
                  to="/politica-de-privacidade" 
                  onClick={handlePrivacyPolicyClick}
                  className="text-figo-green hover:underline font-medium"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button 
              variant="outline" 
              onClick={onManagePreferences}
              className="text-figo-purple border-figo-purple hover:bg-figo-purple hover:text-white"
            >
              <Settings className="h-4 w-4 mr-2" />
              Gerenciar Preferências
            </Button>
            <Button 
              onClick={onAcceptAll}
              className="bg-figo-green hover:bg-figo-green/90 text-figo-purple"
            >
              Aceitar Todos os Cookies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
