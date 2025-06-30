
import React from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Sobre", href: "#sobre" },
  { name: "Serviços", href: "#servicos" },
  { name: "Parceiros", href: "#parceiros" },
];

const WHATSAPP_LINK = "https://wa.me/5511916629760";

export const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (location.pathname !== '/') {
      // Se não estamos na home, navegar para a home com a seção
      navigate('/' + href);
    } else {
      // Se estamos na home, apenas navegar para a seção
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-figo-purple-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center">
              <button onClick={() => handleNavigation('#home')}>
                <img 
                  src="/lovable-uploads/94c860ef-fac4-4ca2-89c9-28a8bec5b67a.png" 
                  alt="Figo Logo" 
                  className="h-10"
                />
              </button>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-figo-purple hover:text-figo-green font-medium transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <Button className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium flex items-center gap-2">
                <Phone size={18} />
                Chamar agora
              </Button>
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-figo-purple hover:text-figo-green"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-figo-purple hover:text-figo-green"
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 py-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Chamar agora
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
