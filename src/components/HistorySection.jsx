import { Clock, Users, Plane } from 'lucide-react'

const HistorySection = () => {
  const milestones = [
    {
      year: "1903",
      title: "Primeiro Voo dos Irmãos Wright",
      description: "Os irmãos Wright realizaram o primeiro voo motorizado bem-sucedido da história.",
      icon: <Plane className="h-6 w-6" />
    },
    {
      year: "1906",
      title: "14-Bis de Santos Dumont",
      description: "Alberto Santos Dumont realizou o primeiro voo público de um avião mais pesado que o ar.",
      icon: <Users className="h-6 w-6" />
    },
    {
      year: "1914",
      title: "Primeiro Voo Comercial",
      description: "Início da aviação comercial com o primeiro voo de passageiros entre St. Petersburg e Tampa.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      year: "1969",
      title: "Era dos Jatos Comerciais",
      description: "O Boeing 747 revolucionou a aviação comercial, tornando as viagens aéreas acessíveis ao público.",
      icon: <Plane className="h-6 w-6" />
    }
  ]

  return (
    <section id="historia" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            História da Aviação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde os primeiros sonhos de voar até aos modernos jatos comerciais, 
            a aviação transformou o mundo e conectou continentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <div className="text-blue-600">
                  {milestone.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {milestone.year}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {milestone.title}
              </h3>
              <p className="text-gray-600">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Evolução Tecnológica</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Primeiros Tempos</h4>
              <p className="text-gray-600 mb-4">
                Os primeiros aviões eram construídos principalmente de madeira e tecido, 
                com motores simples e limitações significativas de velocidade e altitude.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Estruturas de madeira e tecido</li>
                <li>Motores de baixa potência</li>
                <li>Voos de curta distância</li>
                <li>Navegação visual</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Era Moderna</h4>
              <p className="text-gray-600 mb-4">
                A aviação moderna incorpora tecnologias avançadas, materiais compostos 
                e sistemas de navegação sofisticados para voos seguros e eficientes.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Materiais compostos avançados</li>
                <li>Motores a jato eficientes</li>
                <li>Sistemas de navegação GPS</li>
                <li>Piloto automático e fly-by-wire</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistorySection

