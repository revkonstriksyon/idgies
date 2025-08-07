import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
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
                  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Plat signature"
                  className="w-full h-32 lg:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Pizza artisanale"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop"
                  alt="Salade fraîche"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                  alt="Poulet grillé"
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