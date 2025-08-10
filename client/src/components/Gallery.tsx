import { Camera, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  // Images statiques du dossier public/images/gallery
  const staticImages = [
    {
      url: '/images/gallery/456908738_18045232627934301_6600163501045261616_n_1754683320117.jpg',
      alt: 'Plat délicieux',
      category: 'plats',
      description: 'Délicieux plats haïtiens'
    },
    {
      url: '/images/gallery/burger_1754683320128.jpg',
      alt: 'Burger spécial',
      category: 'plats',
      description: 'Notre burger signature'
    },
    {
      url: '/images/gallery/pla pwason_1754683320132.jpg',
      alt: 'Plat de poisson',
      category: 'plats',
      description: 'Poisson frais préparé à la haïtienne'
    },
    {
      url: '/images/gallery/espas 2_1754683320129.jpg',
      alt: 'Espace restaurant',
      category: 'ambiance',
      description: 'Vue de notre salle à manger'
    },
    {
      url: '/images/gallery/Idgies_1754683320130.jpg',
      alt: 'Restaurant Idgie',
      category: 'ambiance',
      description: 'Vue extérieure du restaurant'
    },
    {
      url: '/images/gallery/457108108_18045232327934301_7304619967249284568_n_1754683320118.jpg',
      alt: 'Plat traditionnel',
      category: 'plats',
      description: 'Cuisine traditionnelle haïtienne'
    },
    {
      url: '/images/gallery/469179862_18055497832934301_2010378637651852501_n_1754683320119.jpg',
      alt: 'Spécialité maison',
      category: 'plats',
      description: 'Une de nos spécialités'
    },
    {
      url: '/images/gallery/471474144_18057839917934301_8480462483126705147_n_1754683320120.jpg',
      alt: 'Délice culinaire',
      category: 'plats',
      description: 'Plat préparé avec soin'
    }
  ];

  const imagesToDisplay = staticImages;

  const filteredImages = filter === 'all' 
    ? imagesToDisplay 
    : imagesToDisplay.filter(img => img.category.toLowerCase() === filter.toLowerCase());

  const categories = ['all', 'plats', 'ambiance'];

  return (
    <section id="galerie" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-red-600">Galerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez l'atmosphère chaleureuse de nos espaces et la beauté de nos créations culinaires 
            à travers cette sélection d'images qui racontent notre histoire.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'Tout' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                        {image.category}
                      </span>
                      <p className="text-white font-medium">{image.alt}</p>
                    </div>
                    <button className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors">
                      <ExternalLink size={20} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Link */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-2xl mr-4">
                <Camera size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Plus de Photos</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Suivez-nous sur nos réseaux sociaux pour découvrir encore plus de photos de nos plats, 
              de notre ambiance et des moments partagés avec nos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/idgiesht"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                @idgiesht sur Instagram
              </a>
              <a
                href="https://www.facebook.com/idgiesht"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300"
              >
                @idgiesht sur Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;