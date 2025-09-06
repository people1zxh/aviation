import { Briefcase, DollarSign, TrendingUp, Users, Wrench, Headphones, MapPin } from 'lucide-react'

const CareerSection = () => {
  const careers = [
    {
      title: "Piloto Comercial",
      description: "Comandar aeronaves comerciais transportando passageiros e carga.",
      salary: "€40,000 - €200,000+",
      requirements: ["ATPL", "Experiência de voo", "Inglês fluente"],
      icon: <Briefcase className="h-8 w-8" />,
      color: "blue"
    },
    {
      title: "Comissário de Bordo",
      description: "Garantir a segurança e conforto dos passageiros durante o voo.",
      salary: "€25,000 - €50,000",
      requirements: ["Curso específico", "Idiomas", "Boa apresentação"],
      icon: <Users className="h-8 w-8" />,
      color: "green"
    },
    {
      title: "Controlador de Tráfego Aéreo",
      description: "Coordenar e controlar o movimento de aeronaves no espaço aéreo.",
      salary: "€35,000 - €80,000",
      requirements: ["Curso especializado", "Certificação", "Boa comunicação"],
      icon: <Headphones className="h-8 w-8" />,
      color: "purple"
    },
    {
      title: "Mecânico de Aeronaves",
      description: "Manutenção, reparação e inspeção de aeronaves e seus sistemas.",
      salary: "€30,000 - €70,000",
      requirements: ["Curso técnico", "Certificação ANAC", "Experiência prática"],
      icon: <Wrench className="h-8 w-8" />,
      color: "orange"
    },
    {
      title: "Engenheiro Aeronáutico",
      description: "Projetar, desenvolver e testar aeronaves e sistemas aeroespaciais.",
      salary: "€45,000 - €120,000",
      requirements: ["Engenharia Aeronáutica", "Experiência em design", "Software especializado"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "indigo"
    },
    {
      title: "Despachante Operacional",
      description: "Planejar rotas de voo, calcular combustível e coordenar operações.",
      salary: "€28,000 - €60,000",
      requirements: ["Curso específico", "Conhecimento meteorológico", "Análise de dados"],
      icon: <MapPin className="h-8 w-8" />,
      color: "red"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      indigo: "bg-indigo-100 text-indigo-600",
      red: "bg-red-100 text-red-600"
    }
    return colors[color] || colors.blue
  }

  const industryStats = [
    {
      number: "2.8M",
      label: "Empregos diretos na aviação mundial",
      icon: <Users className="h-6 w-6" />
    },
    {
      number: "65M",
      label: "Empregos totais suportados pela aviação",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      number: "15%",
      label: "Crescimento esperado até 2030",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      number: "$3.5T",
      label: "Contribuição anual para o PIB global",
      icon: <DollarSign className="h-6 w-6" />
    }
  ]

  return (
    <section id="carreira" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oportunidades de Carreira
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A indústria da aviação oferece uma ampla gama de oportunidades profissionais, 
            desde pilotos até engenheiros, cada uma com suas próprias recompensas e desafios.
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {careers.map((career, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-16 h-16 rounded-lg mr-4 ${getColorClasses(career.color)}`}>
                  {career.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {career.title}
                  </h3>
                  <div className="flex items-center text-green-600 font-semibold">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {career.salary}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {career.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requisitos:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {career.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm">{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Estatísticas da Indústria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {industryStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-lg text-white p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Caminhos de Carreira na Aviação
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Operações de Voo</h4>
              <ul className="space-y-2 text-green-100">
                <li>• Piloto Privado → Piloto Comercial → Comandante</li>
                <li>• Instrutor de Voo → Piloto de Linha Aérea</li>
                <li>• Piloto de Táxi Aéreo → Aviação Corporativa</li>
                <li>• Piloto Militar → Aviação Civil</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Suporte Técnico</h4>
              <ul className="space-y-2 text-green-100">
                <li>• Técnico → Mecânico → Inspetor de Manutenção</li>
                <li>• Engenheiro Júnior → Engenheiro Sénior → Gestor</li>
                <li>• Controlador → Supervisor → Gestor de Torre</li>
                <li>• Despachante → Coordenador → Gestor de Operações</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareerSection

