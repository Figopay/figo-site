import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    cnpj: "",
    nome: "",
    sobrenome: "",
    celular: "",
    email: "",
    mensagem: "",
    origem: "Site Figo Pay"
  });
  
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  // Máscara para CNPJ
  const formatCNPJ = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 14) {
      return numbers.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return value;
  };

  // Máscara para celular
  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    return value;
  };

  // Validação de CNPJ
  const validateCNPJ = (cnpj: string) => {
    const numbers = cnpj.replace(/\D/g, '');
    if (numbers.length !== 14) return false;
    
    // Algoritmo de validação de CNPJ
    let tamanho = numbers.length - 2;
    let numeros = numbers.substring(0, tamanho);
    let digitos = numbers.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== parseInt(digitos.charAt(0))) return false;
    
    tamanho = tamanho + 1;
    numeros = numbers.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    
    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) pos = 9;
    }
    
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultado === parseInt(digitos.charAt(1));
  };

  // Validação de email
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field: string, value: string) => {
    let formattedValue = value;
    
    if (field === 'cnpj') {
      formattedValue = formatCNPJ(value);
    } else if (field === 'celular') {
      formattedValue = formatPhone(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [field]: formattedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validações
    if (!formData.nome.trim()) {
      toast({
        title: "Erro",
        description: "Nome é obrigatório",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.sobrenome.trim()) {
      toast({
        title: "Erro",
        description: "Sobrenome é obrigatório",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.celular.trim()) {
      toast({
        title: "Erro",
        description: "Celular é obrigatório",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Erro",
        description: "E-mail é obrigatório",
        variant: "destructive",
      });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Erro",
        description: "E-mail inválido",
        variant: "destructive",
      });
      return;
    }
    
    if (formData.cnpj && !validateCNPJ(formData.cnpj)) {
      toast({
        title: "Erro",
        description: "CNPJ inválido",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Se tem webhook URL, envia para Zapier
      if (webhookUrl.trim()) {
        console.log("Enviando dados para Zapier:", formData);
        
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            triggered_from: window.location.origin,
          }),
        });

        toast({
          title: "Sucesso",
          description: "Dados enviados para o Zapier! Verifique o histórico do seu Zap para confirmar.",
        });
      } else {
        // Fallback para console log
        console.log("Dados do formulário:", formData);
        
        toast({
          title: "Formulário enviado",
          description: "Configure um webhook do Zapier para integrar com o Zoho CRM.",
        });
      }
      
      setShowThankYou(true);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      toast({
        title: "Erro",
        description: "Erro ao enviar dados. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({
      cnpj: "",
      nome: "",
      sobrenome: "",
      celular: "",
      email: "",
      mensagem: "",
      origem: "Site Figo Pay"
    });
    setWebhookUrl("");
    setShowThankYou(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-figo-purple text-center">
            {showThankYou ? "Obrigado!" : "Entre em contato"}
          </DialogTitle>
        </DialogHeader>
        
        {showThankYou ? (
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
              onClick={handleClose}
              className="bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <Label htmlFor="webhook" className="text-blue-800 font-medium">
                Webhook do Zapier (opcional)
              </Label>
              <Input
                id="webhook"
                type="url"
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-blue-600 mt-1">
                Cole aqui a URL do webhook do seu Zap para integrar com o Zoho CRM
              </p>
            </div>

            <div>
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input
                id="cnpj"
                type="text"
                placeholder="00.000.000/0000-00"
                value={formData.cnpj}
                onChange={(e) => handleInputChange('cnpj', e.target.value)}
                maxLength={18}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome *</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="sobrenome">Sobrenome *</Label>
                <Input
                  id="sobrenome"
                  type="text"
                  placeholder="Seu sobrenome"
                  value={formData.sobrenome}
                  onChange={(e) => handleInputChange('sobrenome', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="celular">Celular *</Label>
              <Input
                id="celular"
                type="text"
                placeholder="(11) 91234-5678"
                value={formData.celular}
                onChange={(e) => handleInputChange('celular', e.target.value)}
                maxLength={15}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">E-mail *</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="mensagem">Mensagem</Label>
              <Textarea
                id="mensagem"
                placeholder="Conte-nos mais sobre suas necessidades..."
                value={formData.mensagem}
                onChange={(e) => handleInputChange('mensagem', e.target.value)}
                rows={4}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-figo-green hover:bg-figo-green/80 text-figo-purple font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};
