
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-figo-purple-lighter border-t border-figo-purple/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <img 
                src="/lovable-uploads/425a4488-2866-41f7-b642-dfe510a5e328.png" 
                alt="Figo Logo" 
                className="h-12"
              />
            </div>
            <p className="text-figo-purple/70 mb-6">
              A única plataforma multiadquirente que unifica todos os pagamentos e serviços financeiros em um só lugar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-figo-purple mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-figo-purple/70 hover:text-figo-green transition-colors">Home</a></li>
              <li><a href="#sobre" className="text-figo-purple/70 hover:text-figo-green transition-colors">Sobre</a></li>
              <li><a href="#desafios" className="text-figo-purple/70 hover:text-figo-green transition-colors">Desafios do Varejo</a></li>
              <li><a href="#servicos" className="text-figo-purple/70 hover:text-figo-green transition-colors">Serviços</a></li>
              <li><a href="#parceiros" className="text-figo-purple/70 hover:text-figo-green transition-colors">Para Parceiros</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-figo-purple mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-figo-green mr-2" />
                <span className="text-figo-purple/70">+55 11 91662‑9760</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-figo-green mr-2" />
                <span className="text-figo-purple/70">contato@figo.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-figo-green mr-2 mt-1" />
                <span className="text-figo-purple/70">Av. Paulista, 1000<br />São Paulo - SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-figo-purple/10 mt-12 pt-8 text-center text-figo-purple/60 text-sm flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://facebook.com/figo" target="_blank" rel="noopener noreferrer" className="text-figo-purple hover:text-figo-green transition-colors">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com/figo" target="_blank" rel="noopener noreferrer" className="text-figo-purple hover:text-figo-green transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://linkedin.com/company/figo" target="_blank" rel="noopener noreferrer" className="text-figo-purple hover:text-figo-green transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Figo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
