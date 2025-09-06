import { Building2, Globe, Award, TrendingUp } from 'lucide-react'

const BrandsSection = () => {
  const manufacturers = [
    {
      name: "Boeing",
      country: "Estados Unidos",
      founded: "1916",
      description: "Uma das maiores fabricantes de aeronaves comerciais e militares do mundo.",
      famousModels: ["737", "747", "777", "787 Dreamliner"],
      icon: <Building2 className="h-8 w-8" />,
      color: "blue"
    },
    {
      name: "Airbus",
      country: "Europa",
      founded: "1970",
      description: "Consórcio europeu líder mundial em aviação comercial e aeroespacial.",
      famousModels: ["A320", "A330", "A350", "A380"],
      icon: <Globe className="h-8 w-8" />,
      color: "indigo"
    },
    {
      name: "Embraer",
      country: "Brasil",
      founded: "1969",
      description: "Terceira maior fabricante de aviões comerciais do mundo, especializada em jatos regionais.",
      famousModels: ["E-Jets", "ERJ", "KC-390", "Phenom"],
      icon: <Award className="h-8 w-8" />,
      color: "green"
    },
    {
      name: "Bombardier",
      country: "Canadá",
      founded: "1942",
      description: "Fabricante canadense conhecida por jatos regionais e aviação executiva.",
      famousModels: ["CRJ Series", "Q400", "Global", "Challenger"],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "purple"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600 border-blue-200",
      indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
      green: "bg-green-100 text-green-600 border-green-200",
      purple: "bg-purple-100 text-purple-600 border-purple-200"
    }
    return colors[color] || colors.blue
  }

  return (
    <section id="marcas" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Principais Fabricantes de Aeronaves
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as marcas que moldaram a aviação mundial e continuam a inovar 
            no design e fabricação de aeronaves comerciais e militares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {manufacturers.map((manufacturer, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`flex items-center justify-center w-16 h-16 rounded-lg mr-4 ${getColorClasses(manufacturer.color)}`}>
                  {manufacturer.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {manufacturer.name}
                  </h3>
                  <p className="text-gray-600">
                    {manufacturer.country} • Fundada em {manufacturer.founded}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                {manufacturer.description}
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Modelos Famosos:</h4>
                <div className="flex flex-wrap gap-2">
                  {manufacturer.famousModels.map((model, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(manufacturer.color)}`}
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Estatísticas da Indústria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25,000+</div>
              <p className="text-gray-600">Aeronaves comerciais em operação mundial</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$150B+</div>
              <p className="text-gray-600">Valor anual do mercado de aviação comercial</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.5B</div>
              <p className="text-gray-600">Passageiros transportados anualmente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection

