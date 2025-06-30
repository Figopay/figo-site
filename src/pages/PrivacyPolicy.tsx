
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold text-figo-purple mb-8">Política de Privacidade – Figo Pay</h1>
        
        <div className="prose prose-lg max-w-none text-figo-purple/80">
          <p className="mb-6">
            Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você acessa ou utiliza o site Figo Pay.
          </p>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">1. Informações que coletamos</h2>
          <p className="mb-4">Podemos coletar as seguintes informações:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Dados de identificação:</strong> nome, CPF/CNPJ, telefone, endereço de e-mail.</li>
            <li><strong>Dados de pagamento:</strong> informações necessárias para processar compras e transações.</li>
            <li><strong>Informações de navegação:</strong> endereço IP, data e hora de acesso, dispositivo, navegador e cookies.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">2. Finalidade da coleta de dados</h2>
          <p className="mb-4">Utilizamos seus dados para:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Processar pedidos, pagamentos e fornecer os serviços contratados;</li>
            <li>Cumprir obrigações legais e regulatórias;</li>
            <li>Personalizar sua experiência e melhorar nossos produtos;</li>
            <li>Realizar comunicações, enviar ofertas, newsletters e materiais de marketing, desde que autorizado;</li>
            <li>Garantir a segurança e prevenção de fraudes.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">3. Compartilhamento de informações</h2>
          <p className="mb-4">Podemos compartilhar seus dados com:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Prestadores de serviços essenciais (meios de pagamento, parceiros logísticos, sistemas de CRM e automação);</li>
            <li>Autoridades governamentais, quando exigido por lei;</li>
            <li>Parceiros de tecnologia para análise de dados e melhorias de performance.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">4. Armazenamento e segurança dos dados</h2>
          <p className="mb-6">
            Adotamos medidas técnicas e administrativas para proteger suas informações contra acessos não autorizados, perda, destruição ou alteração. Seus dados são armazenados de forma segura enquanto forem necessários para as finalidades descritas ou conforme exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">5. Direitos do titular dos dados</h2>
          <p className="mb-4">Você pode, a qualquer momento:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Acessar e corrigir seus dados;</li>
            <li>Solicitar a exclusão ou anonimização de informações pessoais, quando aplicável;</li>
            <li>Revogar consentimentos;</li>
            <li>Solicitar a portabilidade de dados.</li>
          </ul>
          <p className="mb-6">
            Para exercer seus direitos, entre em contato pelo e-mail <a href="mailto:contato@figopay.com.br" className="text-figo-green hover:underline">contato@figopay.com.br</a>
          </p>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">6. Cookies e tecnologias de rastreamento</h2>
          <p className="mb-6">
            Utilizamos cookies e tecnologias semelhantes para melhorar a experiência de navegação, analisar tráfego e personalizar conteúdo. Você pode gerenciar suas preferências de cookies através do banner de consentimento.
          </p>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">7. Alterações nesta Política</h2>
          <p className="mb-6">
            Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças em nossos serviços ou requisitos legais. Recomendamos que você revise periodicamente.
          </p>

          <h2 className="text-2xl font-semibold text-figo-purple mt-8 mb-4">8. Contato</h2>
          <p className="mb-4">Em caso de dúvidas ou solicitações, entre em contato:</p>
          <div className="bg-figo-purple-lighter p-6 rounded-lg mb-6">
            <p className="mb-2"><strong>Figo Pay | Figo Shop</strong></p>
            <p className="mb-2">CNPJ: 06.353.004/0001-30</p>
            <p className="mb-2">E-mail: <a href="mailto:contato@figopay.com.br" className="text-figo-green hover:underline">contato@figopay.com.br</a></p>
            <p>Endereço: Av.Andromeda, 855 - Alphavile<br />Barueri - SP</p>
          </div>

          <p className="text-sm text-figo-purple/60 mt-8">
            <strong>Última atualização:</strong> 30 de Junho de 2025
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
