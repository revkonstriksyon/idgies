import { Utensils, Users, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            À Propos d'<span className="text-red-600">Idgie's</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expérience culinaire unique dans une ambiance chaleureuse et un cadre moderne, 
            alliant tradition et innovation au cœur de Delmas.
          </p>
        </div>

        {/* Story Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Idgie's Restaurant est né de la passion de créer un lieu où chaque client se sent comme à la maison. 
              Nous avons imaginé un concept unique qui répond aux besoins de tous : ceux qui cherchent un repas rapide 
              et savoureux, et ceux qui souhaitent savourer un moment privilégié dans un cadre exceptionnel.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Notre engagement ? Offrir une cuisine de qualité, préparée avec des ingrédients frais et locaux, 
              dans une atmosphère conviviale qui fait de chaque visite un moment mémorable.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-red-600">
                <Heart size={24} className="mr-2" />
                <span className="font-semibold">Passion culinaire</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/images/gallery/Idgies_1754683320130.jpg"
              alt="Ambiance chaleureuse d'Idgie's Restaurant"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Two Concepts */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Fast-Food Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-4 rounded-2xl mr-4">
                <Utensils size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Le Fast-Food</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Pour un repas rapide, simple et savoureux, servi avec le sourire. Idéal pour une pause déjeuner 
              ou un dîner sur le pouce. Notre menu fast-food privilégie la qualité sans compromis sur la rapidité du service.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Service rapide et efficace
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Poulet grillé & pizzas artisanales
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Prix accessibles
              </li>
            </ul>
          </div>

          {/* Rooftop Section */}
          <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-4 rounded-2xl mr-4">
                <Users size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Le Rooftop</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Profitez d'une vue imprenable tout en dégustant des plats élaborés à partir d'un menu varié. 
              Un cadre convivial et détendu pour vos soirées et événements privés, avec beaucoup de plantes dans un environnement intime et aéré.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Vue panoramique exceptionnelle
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Ambiance intime avec plantes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                Parfait pour événements privés
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;