import { ArrowDown } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import airplaneSky from '../assets/airplane-sky.jpg'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${airplaneSky})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Bem-vindo ao Mundo da Aviação
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Descubra a história fascinante da aviação, explore oportunidades de carreira e acompanhe uma jornada pessoal rumo aos céus
        </p>
        <div className="space-x-4 animate-fade-in-up animation-delay-400">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
            onClick={() => document.getElementById('historia').scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar História
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
            onClick={() => document.getElementById('jornada').scrollIntoView({ behavior: 'smooth' })}
          >
            Minha Jornada
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  )
}

export default Hero

