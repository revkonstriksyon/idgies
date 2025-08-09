import { MapPin, Phone, Clock, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const openingHours = [
    { day: 'Lundi - Samedi', hours: '07:00 - 21:00' },
    { day: 'Dimanche', hours: '08:00 - 21:00' },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nous <span className="text-red-600">Contacter</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nous sommes là pour vous accueillir et répondre à toutes vos questions. 
            N'hésitez pas à nous contacter ou à passer nous voir directement !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Informations de Contact</h3>
            
            {/* Address */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <MapPin size={24} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                <p className="text-gray-700 leading-relaxed">
                  Delmas 59<br />
                  Port-au-Prince, Haïti
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <Phone size={24} className="text-red-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                <a 
                  href="tel:+50948773957"
                  className="text-red-600 hover:text-red-700 font-medium text-lg transition-colors"
                >
                  +509 48 77 3957
                </a>
                <p className="text-gray-600 text-sm mt-1">Réservations et informations</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-200">
              <div className="bg-red-100 p-3 rounded-xl flex-shrink-0">
                <Clock size={24} className="text-red-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-3">Horaires d'Ouverture</h4>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Reservation */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Réservation Rapide</h4>
              <p className="mb-6 text-green-100">
                Réservez votre table en quelques secondes via WhatsApp. 
                Notre équipe vous confirmera votre réservation immédiatement.
              </p>
              <a
                href="https://wa.me/50948773957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg group"
              >
                <ExternalLink size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                Réserver via WhatsApp
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">Nous Trouver</h3>
            
            {/* Google Maps Embed Placeholder */}
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg h-96 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Carte Google Maps</p>
                  <p className="text-sm text-gray-500">Zone Eglise Altagrace, Delmas</p>
                </div>
              </div>
              {/* You would replace this with actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.8177431573437!2d-72.29847248528208!3d18.54838098741341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb9c6b58b42f7b9%3A0x2f7b9b7b7b7b7b7b!2sDelmas%2059%2C%20Port-au-Prince%2C%20Haiti!5e0!3m2!1sen!2sus!4v1629123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-75"
              ></iframe>
            </div>

            {/* Directions */}
            <div className="bg-red-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Comment nous trouver</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  En transport en commun : Tap-tap ou bus jusqu'à Delmas 59
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  En voiture : Parking disponible à proximité
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  Repère : Angle Route de Delmas et Delmas 59, près de l'Église Altagrace
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;