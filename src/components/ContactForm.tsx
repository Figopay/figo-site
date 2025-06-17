
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormFields } from "./ContactFormFields";
import { ContactFormThankYou } from "./ContactFormThankYou";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const {
    formData,
    isSubmitting,
    showThankYou,
    handleInputChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  const handleClose = () => {
    resetForm();
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
          <ContactFormThankYou onClose={handleClose} />
        ) : (
          <ContactFormFields
            formData={formData}
            isSubmitting={isSubmitting}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
