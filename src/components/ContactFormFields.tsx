import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

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

interface ContactFormFieldsProps {
  formData: FormData;
  isSubmitting: boolean;
  onInputChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const ContactFormFields = ({ 
  formData, 
  isSubmitting, 
  onInputChange, 
  onSubmit 
}: ContactFormFieldsProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="empresa">Empresa *</Label>
        <Input
          id="empresa"
          type="text"
          placeholder="Nome da empresa"
          value={formData.empresa}
          onChange={(e) => onInputChange('empresa', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="cnpj">CNPJ</Label>
        <Input
          id="cnpj"
          type="text"
          placeholder="00.000.000/0000-00"
          value={formData.cnpj}
          onChange={(e) => onInputChange('cnpj', e.target.value)}
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
            onChange={(e) => onInputChange('nome', e.target.value)}
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
            onChange={(e) => onInputChange('sobrenome', e.target.value)}
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
          onChange={(e) => onInputChange('celular', e.target.value)}
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
          onChange={(e) => onInputChange('email', e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="mensagem">Mensagem *</Label>
        <Textarea
          id="mensagem"
          placeholder="Conte-nos mais sobre suas necessidades..."
          value={formData.mensagem}
          onChange={(e) => onInputChange('mensagem', e.target.value)}
          rows={4}
          required
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
  );
};
