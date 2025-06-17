
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { validateCNPJ, validateEmail } from "@/utils/contactFormValidation";
import { formatCNPJ, formatPhone } from "@/utils/inputFormatters";

interface FormData {
  empresa: string;
  cnpj: string;
  nome: string;
  sobrenome: string;
  celular: string;
  email: string;
  mensagem: string;
  origem: string;
}

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    empresa: "",
    cnpj: "",
    nome: "",
    sobrenome: "",
    celular: "",
    email: "",
    mensagem: "",
    origem: "Site Figo Pay"
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();

  // URL do webhook do Zapier configurada
  const ZAPIER_WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/23417097/uotxxgi/";

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

  const validateForm = () => {
    if (!formData.nome.trim()) {
      toast({
        title: "Erro",
        description: "Nome é obrigatório",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.sobrenome.trim()) {
      toast({
        title: "Erro",
        description: "Sobrenome é obrigatório",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.celular.trim()) {
      toast({
        title: "Erro",
        description: "Celular é obrigatório",
        variant: "destructive",
      });
      return false;
    }
    
    if (!formData.email.trim()) {
      toast({
        title: "Erro",
        description: "E-mail é obrigatório",
        variant: "destructive",
      });
      return false;
    }
    
    if (!validateEmail(formData.email)) {
      toast({
        title: "Erro",
        description: "E-mail inválido",
        variant: "destructive",
      });
      return false;
    }
    
    if (formData.cnpj && !validateCNPJ(formData.cnpj)) {
      toast({
        title: "Erro",
        description: "CNPJ inválido",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      console.log("Enviando dados para Zapier:", formData);
      
      // Mapear os dados do formulário para os campos esperados pelo Zapier/Zoho CRM Convert Lead
      const zapierData = {
        // Campos do Lead
        "Company": formData.empresa || (formData.cnpj ? `CNPJ: ${formData.cnpj}` : `${formData.nome} ${formData.sobrenome}`),
        "First Name": formData.nome,
        "Last Name": formData.sobrenome,
        "Email": formData.email,
        "Phone": formData.celular,
        "Description": formData.mensagem,
        "Lead Source": formData.origem,
        
        // Configurações do Convert Lead
        "Notify Lead Owner": true,
        "Notify New Entity Owner": true,
        "Account ID": "", // Será preenchido automaticamente pelo Zapier
        "Overwrite": false,
        "Contact ID": "", // Será preenchido automaticamente pelo Zapier
        "Assign To": "", // Deixar vazio para usar o padrão
        "Move Attachments To": "Contacts", // ou "Accounts" conforme sua preferência
        
        // Dados extras para rastreamento
        timestamp: new Date().toISOString(),
        triggered_from: window.location.origin,
        form_origin: "Contact Form - Site Figo Pay"
      };
      
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(zapierData),
      });

      toast({
        title: "Sucesso",
        description: "Formulário enviado com sucesso! Em breve entraremos em contato.",
      });
      
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

  const resetForm = () => {
    setFormData({
      empresa: "",
      cnpj: "",
      nome: "",
      sobrenome: "",
      celular: "",
      email: "",
      mensagem: "",
      origem: "Site Figo Pay"
    });
    setShowThankYou(false);
  };

  return {
    formData,
    isSubmitting,
    showThankYou,
    handleInputChange,
    handleSubmit,
    resetForm
  };
};
