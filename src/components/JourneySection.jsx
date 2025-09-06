import { Heart, Target, Lightbulb, ArrowRight, Star, BookOpen } from 'lucide-react'

const JourneySection = () => {
  const journeySteps = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Faculdade",
      description: "Dois anos na universidade com excelentes notas, mas sem sentir realização pessoal.",
      color: "gray"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Descoberta",
      description: "A ideia de ser piloto sempre me atraiu e começou a ganhar força como uma possibilidade real.",
      color: "yellow"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Decisão",
      description: "Tomei a corajosa decisão de largar a universidade para seguir o sonho da aviação.",
      color: "red"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "ATPL",
      description: "Agora estou a entrar no curso ATPL integrado para me tornar piloto comercial.",
      color: "blue"
    }
  ]

  const goals = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Ser Feliz",
      description: "Encontrar realização pessoal e profissional fazendo o que amo."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Sucesso Financeiro",
      description: "Alcançar estabilidade financeira e ter um bom rendimento."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Aproveitar a Vida",
      description: "Viver experiências únicas e aproveitar as oportunidades que a aviação oferece."
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      gray: "bg-gray-100 text-gray-600",
      yellow: "bg-yellow-100 text-yellow-600",
      red: "bg-red-100 text-red-600",
      blue: "bg-blue-100 text-blue-600"
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="jornada" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Minha Jornada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma mudança de rumo corajosa em busca da realização pessoal e profissional na aviação.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            O Meu Percurso
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {journeySteps.map((step, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                      <div className="flex items-center mb-4">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-lg mr-4 ${getColorClasses(step.color)}`}>
                          {step.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge Section */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              O Maior Desafio
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Largar a universidade onde tinha das melhores notas do curso foi uma decisão difícil. 
              Para muitos, parecia "do nada", mas para mim era o caminho certo para encontrar a realização 
              que não sentia no percurso académico tradicional.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Os Meus Objetivos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg mx-auto mb-4">
                  <div className="text-white">
                    {goal.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-3">
                  {goal.title}
                </h4>
                <p className="text-blue-100">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Section */}
        <div className="mt-16 text-center">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              O Futuro
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Esta jornada está apenas a começar. À medida que progredo no curso ATPL, 
              vou partilhar aqui as experiências, desafios e conquistas que encontrar pelo caminho.
            </p>
            <div className="flex items-center justify-center text-gray-600">
              <span className="mr-2">Mais histórias em breve</span>
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneySection

