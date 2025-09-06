import { GraduationCap, Clock, CheckCircle, BookOpen } from 'lucide-react'
import cockpitPilots from '../assets/cockpit-pilots.jpg'

const TrainingSection = () => {
  const licenses = [
    {
      name: "Piloto Privado (PP)",
      duration: "3-6 meses",
      minAge: "17 anos",
      requirements: [
        "Ensino médio completo",
        "Certificado Médico Aeronáutico",
        "40 horas de voo mínimas",
        "Aprovação em exame teórico"
      ],
      description: "Permite voar aeronaves para uso pessoal, sem remuneração."
    },
    {
      name: "Piloto Comercial (PC)",
      duration: "6-12 meses",
      minAge: "18 anos",
      requirements: [
        "Licença de Piloto Privado",
        "200 horas de voo mínimas",
        "Curso teórico específico",
        "Exame prático avançado"
      ],
      description: "Permite voar comercialmente como copiloto ou comandante em aeronaves menores."
    },
    {
      name: "ATPL - Airline Transport Pilot",
      duration: "18-24 meses",
      minAge: "23 anos",
      requirements: [
        "Licença de Piloto Comercial",
        "1500 horas de voo mínimas",
        "Curso integrado ou modular",
        "Exames teóricos e práticos rigorosos"
      ],
      description: "Licença mais avançada, permite comandar aeronaves comerciais de grande porte."
    }
  ]

  const steps = [
    {
      step: "1",
      title: "Exame Médico",
      description: "Obtenção do Certificado Médico Aeronáutico (CMA) de 1ª ou 2ª classe."
    },
    {
      step: "2",
      title: "Curso Teórico",
      description: "Estudo de matérias como navegação, meteorologia, regulamentos e performance."
    },
    {
      step: "3",
      title: "Exame Teórico",
      description: "Aprovação nos exames da ANAC com nota mínima de 70%."
    },
    {
      step: "4",
      title: "Voo Prático",
      description: "Treinamento prático com instrutor certificado até atingir as horas mínimas."
    },
    {
      step: "5",
      title: "Check Ride",
      description: "Exame prático final com examinador credenciado pela ANAC."
    }
  ]

  return (
    <section id="formacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Formação de Piloto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra os diferentes tipos de licenças de piloto e os passos necessários 
            para iniciar sua carreira na aviação.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div 
            className="h-64 md:h-96 bg-cover bg-center rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${cockpitPilots})` }}
          >
            <div className="h-full bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <GraduationCap className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Torne-se um Piloto Profissional
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* License Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Tipos de Licenças
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {licenses.map((license, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  <h4 className="text-lg font-bold text-gray-900">
                    {license.name}
                  </h4>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <Clock className="h-4 w-4 mr-1" />
                    Duração: {license.duration}
                  </div>
                  <div className="text-sm text-gray-600">
                    Idade mínima: {license.minAge}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">
                  {license.description}
                </p>

                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Requisitos:</h5>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {license.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Steps */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Passos para se Tornar Piloto
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white text-blue-600 rounded-full font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-blue-100 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Costs Information */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <BookOpen className="h-6 w-6 text-yellow-600 mr-2" />
            <h3 className="text-xl font-bold text-gray-900">Custos Estimados</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Piloto Privado</h4>
              <p className="text-gray-600">€8,000 - €15,000</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Piloto Comercial</h4>
              <p className="text-gray-600">€25,000 - €40,000</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">ATPL Integrado</h4>
              <p className="text-gray-600">€80,000 - €150,000</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            * Os custos podem variar significativamente dependendo da escola, localização e tipo de aeronave utilizada.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrainingSection

