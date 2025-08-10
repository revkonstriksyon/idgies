import { Download, Star, Clock, Users } from 'lucide-react';

const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-red-600">Menu</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Découvrez une sélection de plats préparés avec passion et des ingrédients frais, 
            alliant saveurs locales et influences internationales.
          </p>
          
          {/* Download PDF Button */}
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Download size={20} className="mr-3 group-hover:scale-110 transition-transform" />
            Voir le Menu Complet
          </a>
        </div>

        {/* Menu Highlights - Real Items */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Popular Dishes */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nos Spécialités</h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Poulet Grillé Complet</h4>
                    <p className="text-gray-600 text-sm mt-1">Avec riz, banane plantain et salade</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">450 HTG</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Pizza Créole</h4>
                    <p className="text-gray-600 text-sm mt-1">Spécialité maison avec ingrédients locaux</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">500 HTG</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Griot Traditionnel</h4>
                    <p className="text-gray-600 text-sm mt-1">Porc mariné avec pikliz et ti malice</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">400 HTG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Beverages & Sides */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Boissons & Accompagnements</h3>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Jus Naturels</h4>
                    <p className="text-gray-600 text-sm mt-1">Orange, ananas, passion, tamarin</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">150 HTG</span>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Akra & Marinad</h4>
                    <p className="text-gray-600 text-sm mt-1">Beignets traditionnels croustillants</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">100 HTG</span>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900">Pikliz Maison</h4>
                    <p className="text-gray-600 text-sm mt-1">Condiment épicé fait maison</p>
                  </div>
                  <span className="text-red-600 font-bold text-lg">50 HTG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Star size={32} className="text-yellow-300 mr-2" />
            <h3 className="text-3xl font-bold">Offres Spéciales</h3>
            <Star size={32} className="text-yellow-300 ml-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <Clock size={24} className="mr-2" />
                <h4 className="text-xl font-semibold">Menu Déjeuner Express</h4>
              </div>
              <p className="mb-3">Lundi - Vendredi, 11h00 - 14h00</p>
              <p className="text-lg font-bold">Plat + Boisson = 400 HTG</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-3">
                <Users size={24} className="mr-2" />
                <h4 className="text-xl font-semibold">Soirée Rooftop</h4>
              </div>
              <p className="mb-3">Vendredi - Samedi, à partir de 18h00</p>
              <p className="text-lg font-bold">Ambiance musicale + Menu spécial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;