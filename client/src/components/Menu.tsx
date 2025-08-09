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
            href="https://drive.google.com/file/d/1knZDFMWKbgepT5mgJkRLQTbkDsK34xHN/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Download size={20} className="mr-3 group-hover:scale-110 transition-transform" />
            Télécharger le Menu PDF
          </a>
        </div>

        {/* Menu Preview Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Spécialités Poulet</h3>
            <p className="text-gray-600">Poulet grillé, ailes BBQ, tenders croustillants</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Pizzas Artisanales</h3>
            <p className="text-gray-600">Créole, Margherita, BBQ Chicken</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Plats Traditionnels</h3>
            <p className="text-gray-600">Cuisine créole authentique et savoureuse</p>
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