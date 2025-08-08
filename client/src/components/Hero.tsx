import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/images/gallery/espas 2_1754683320129.jpg")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Le Goût de la Maison,<br />
              <span className="text-red-400">à deux pas de chez vous</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-4 font-medium">
              "C'est comme manger chez-soi !"
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Découvrez nos deux espaces uniques à Delmas : notre Fast-Food pour des repas rapides et savoureux, 
              et notre Rooftop avec vue imprenable pour des moments raffinés.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                Voir le Menu
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/50948773957"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Réserver une Table
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={18} className="mr-2 text-red-400" />
                <span className="text-sm">Delmas, Port-au-Prince</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Clock size={18} className="mr-2 text-red-400" />
                <span className="text-sm">Ouvert 7j/7</span>
              </div>
            </div>
          </div>

          {/* Featured Dishes Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/gallery/471716965_18057839926934301_2356221322912585588_n_1754683320126.jpg"
                  alt="Griot avec légumes créoles"
                  className="w-full h-32 lg:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/gallery/471635194_18057839908934301_6107939704202159619_n_1754683320125.jpg"
                  alt="Repas complet haïtien"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/gallery/471562965_18057839935934301_5619857303063158336_n_1754683320123.jpg"
                  alt="Menu du jour"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/images/gallery/471474551_18057839899934301_7183502847797456427_n_1754683320121.jpg"
                  alt="Plat signature Idgie"
                  className="w-full h-32 lg:h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;