import { Mail, MessageSquare, Send } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tem alguma pergunta sobre aviação ou quer partilhar a sua própria jornada? 
            Entre em contacto comigo!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-900">
                Envie uma Mensagem
              </h3>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="O seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="o.seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Assunto da mensagem"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Escreva a sua mensagem aqui..."
                ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              >
                <Send className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">
                  Informações de Contacto
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">contacto@aviacao-jornada.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Resposta</h4>
                  <p className="text-gray-600">
                    Normalmente respondo dentro de 24-48 horas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
              <h3 className="text-xl font-bold mb-4">
                Partilhe a Sua Jornada
              </h3>
              <p className="text-blue-100 mb-4">
                Se também está a seguir uma carreira na aviação ou tem uma história interessante 
                para partilhar, adoraria ouvir de si!
              </p>
              <ul className="list-disc list-inside text-blue-100 space-y-2">
                <li>Experiências de formação</li>
                <li>Desafios enfrentados</li>
                <li>Conselhos para futuros pilotos</li>
                <li>Histórias inspiradoras</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-2">Nota</h4>
              <p className="text-gray-700 text-sm">
                Este formulário é apenas para demonstração. Num site real, seria necessário 
                implementar um backend para processar as mensagens ou usar um serviço como 
                Formspree, Netlify Forms ou EmailJS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

