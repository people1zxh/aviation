import { Shield, Target, Truck, Radar } from 'lucide-react'

const MilitarySection = () => {
  const aircraftTypes = [
    {
      type: "Aviões de Caça",
      description: "Aeronaves de combate aéreo projetadas para superioridade aérea e interceptação.",
      icon: <Target className="h-8 w-8" />,
      examples: ["F-16 Fighting Falcon", "F-22 Raptor", "Eurofighter Typhoon"]
    },
    {
      type: "Bombardeiros",
      description: "Aeronaves especializadas em ataques de precisão e missões estratégicas.",
      icon: <Shield className="h-8 w-8" />,
      examples: ["B-52 Stratofortress", "B-2 Spirit", "Tornado GR4"]
    },
    {
      type: "Transporte Militar",
      description: "Aeronaves para transporte de tropas, equipamentos e suprimentos.",
      icon: <Truck className="h-8 w-8" />,
      examples: ["C-130 Hercules", "A400M Atlas", "C-17 Globemaster"]
    },
    {
      type: "Reconhecimento",
      description: "Aeronaves especializadas em vigilância, inteligência e reconhecimento.",
      icon: <Radar className="h-8 w-8" />,
      examples: ["U-2 Dragon Lady", "Global Hawk", "Predator"]
    }
  ]

  return (
    <section id="militar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aviação Militar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A aviação militar desempenha um papel crucial na defesa nacional, 
            com aeronaves especializadas para diferentes missões e operações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aircraftTypes.map((aircraft, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-lg mr-4">
                  <div className="text-red-600">
                    {aircraft.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {aircraft.type}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {aircraft.description}
              </p>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Exemplos:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {aircraft.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-lg text-white p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Importância Estratégica</h3>
              <p className="text-red-100 mb-4">
                A aviação militar é fundamental para a segurança nacional, proporcionando:
              </p>
              <ul className="list-disc list-inside text-red-100 space-y-2">
                <li>Defesa do espaço aéreo nacional</li>
                <li>Projeção de poder e dissuasão</li>
                <li>Apoio a operações terrestres e navais</li>
                <li>Missões humanitárias e de peacekeeping</li>
                <li>Transporte estratégico e logística</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Tecnologia Avançada</h3>
              <p className="text-red-100 mb-4">
                As aeronaves militares incorporam as mais avançadas tecnologias:
              </p>
              <ul className="list-disc list-inside text-red-100 space-y-2">
                <li>Sistemas de radar e guerra eletrónica</li>
                <li>Tecnologia stealth (invisibilidade)</li>
                <li>Armamento de precisão guiado</li>
                <li>Sistemas de comunicação seguros</li>
                <li>Capacidades de reabastecimento em voo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MilitarySection

