import { Download, Star, Clock, Users } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import type { MenuItem } from '@shared/schema';

const Menu = () => {
  // Fetch menu items from CMS
  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  // Group menu items by category
  const menuCategories = menuItems.reduce((acc, item) => {
    const category = acc.find(cat => cat.name === item.category);
    if (category) {
      category.items.push(item);
    } else {
      acc.push({
        name: item.category,
        items: [item]
      });
    }
    return acc;
  }, [] as Array<{ name: string; items: MenuItem[] }>);

  // Fallback categories for initial load
  const fallbackCategories = [
    {
      name: 'Spécialités Poulet',
      items: [
        { name: 'Poulet Grillé Idgie\'s', price: '450 HTG', description: 'Poulet mariné aux épices locales, grillé à la perfection' },
        { name: 'Ailes de Poulet BBQ', price: '350 HTG', description: 'Ailes croustillantes sauce barbecue maison' },
        { name: 'Tenders de Poulet', price: '400 HTG', description: 'Filets de poulet panés, sauce au choix' },
      ]
    },
    {
      name: 'Pizzas Artisanales',
      items: [
        { name: 'Pizza Créole', price: '600 HTG', description: 'Base tomate, fromage, jambon de pays, légumes locaux' },
        { name: 'Pizza Margherita', price: '500 HTG', description: 'Tomate, mozzarella fraîche, basilic' },
        { name: 'Pizza BBQ Chicken', price: '650 HTG', description: 'Base BBQ, poulet grillé, oignons rouges, fromage' },
      ]
    },
    {
      name: 'Salades Fraîches',
      items: [
        { name: 'Salade Tropicale', price: '300 HTG', description: 'Mix de légumes frais, fruits tropicaux, vinaigrette passion' },
        { name: 'César au Poulet', price: '400 HTG', description: 'Salade César classique avec poulet grillé' },
        { name: 'Salade Verte Simple', price: '250 HTG', description: 'Légumes verts frais, tomates, vinaigrette maison' },
      ]
    },
    {
      name: 'Boissons & Jus',
      items: [
        { name: 'Jus Tonique Maison', price: '150 HTG', description: 'Notre spécialité rafraîchissante' },
        { name: 'Jus de Fruits Frais', price: '120 HTG', description: 'Orange, ananas, ou fruits de saison' },
        { name: 'Sodas & Eaux', price: '80 HTG', description: 'Sélection de boissons rafraîchissantes' },
      ]
    }
  ];

  // Use CMS data if available, otherwise use fallback
  const categoriesToDisplay = menuCategories.length > 0 ? menuCategories : fallbackCategories;

  if (isLoading) {
    return (
      <section id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600">Chargement du menu...</p>
          </div>
        </div>
      </section>
    );
  }

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
            href="#"
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <Download size={20} className="mr-3 group-hover:scale-110 transition-transform" />
            Télécharger le Menu PDF
          </a>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {categoriesToDisplay.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-gray-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-red-100"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-bold text-gray-900">{item.name}</h4>
                      <span className="text-2xl font-bold text-red-600">{item.price}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    {'image' in item && item.image && (
                      <div className="mt-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-center text-white">
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