import { Facebook, Instagram, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#apropos' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Avis', href: '#avis' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/idgiesht',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/idgiesht',
      color: 'hover:text-pink-600'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-red-500 mb-2">Idgie's</h3>
              <p className="text-lg text-gray-300">Restaurant</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Le goût de la maison, à deux pas de chez vous. 
              Découvrez une expérience culinaire unique dans une ambiance chaleureuse 
              au cœur de Delmas.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-3 rounded-full text-gray-400 ${social.color} transition-colors duration-200 hover:bg-gray-700`}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Liens Rapides</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 leading-relaxed">
                    Zone Eglise Altagrace<br />
                    Angle Route de Delmas, et Delmas 59<br />
                    Port-au-Prince 6110
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-red-500 flex-shrink-0" />
                <a 
                  href="tel:+50948773957"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  +509 48 77 3957
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-red-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <div className="mb-2">
                    <p className="font-medium text-white">Lundi - Samedi</p>
                    <p>07:00 - 21:00</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Dimanche</p>
                    <p>08:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Idgie's Restaurant. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://wa.me/50948773957"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Réserver Maintenant
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TikTok Note */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            Suivez-nous aussi sur TikTok : 
            <a 
              href="https://www.tiktok.com/@idgiesht" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 ml-1 font-medium"
            >
              @idgiesht
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;