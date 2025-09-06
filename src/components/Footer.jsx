import { Plane, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Aviação</span>
            </div>
            <p className="text-gray-300 mb-4">
              Um website dedicado à história da aviação, formação de pilotos e partilha 
              de experiências pessoais no mundo aeronáutico.
            </p>
            <p className="text-gray-400 text-sm">
              Criado com paixão pela aviação e o desejo de partilhar conhecimento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#historia" className="text-gray-300 hover:text-blue-400 transition-colors">
                  História da Aviação
                </a>
              </li>
              <li>
                <a href="#militar" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Aviação Militar
                </a>
              </li>
              <li>
                <a href="#formacao" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Formação de Piloto
                </a>
              </li>
              <li>
                <a href="#carreira" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Oportunidades de Carreira
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#marcas" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Fabricantes de Aeronaves
                </a>
              </li>
              <li>
                <a href="#jornada" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Minha Jornada
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Website de Aviação. Feito com</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>para a comunidade aeronáutica.</span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Hospedado gratuitamente no GitHub Pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

