import React from 'react';
import { Camera, ExternalLink } from 'lucide-react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      url: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Plat signature du restaurant",
      category: "Plats"
    },
    {
      url: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Pizza artisanale",
      category: "Plats"
    },
    {
      url: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Salade fraîche",
      category: "Plats"
    },
    {
      url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Ambiance du restaurant",
      category: "Ambiance"
    },
    {
      url: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Poulet grillé",
      category: "Plats"
    },
    {
      url: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Rooftop avec vue",
      category: "Ambiance"
    },
    {
      url: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Jus frais",
      category: "Boissons"
    },
    {
      url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Espace fast-food",
      category: "Ambiance"
    },
    {
      url: "https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      alt: "Cuisine ouverte",
      category: "Ambiance"
    }
  ];

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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
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