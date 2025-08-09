import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const LocationMap = () => {
  const restaurantLocation = {
    name: "Idgie's Restaurant",
    address: "Delmas 59, Port-au-Prince, Haïti",
    phone: "(509) 4877-3957",
    coordinates: "18.5392° N, 72.3078° W", // Approximate coordinates for Delmas
    googleMapsUrl: "https://maps.app.goo.gl/eYQucKc2mkkSKfXQ9?g_st=iwb"
  };

  return (
    <section id="localisation" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre <span className="text-red-600">Localisation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Facilement accessible dans le cœur de Delmas, nous vous accueillons dans un cadre moderne 
            avec vue panoramique depuis notre rooftop.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder & Directions */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-3 text-red-600" size={24} />
                  Carte et Itinéraire
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Interactive Map Placeholder */}
                <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="text-center">
                    <MapPin size={48} className="text-red-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Idgie's Restaurant</h3>
                    <p className="text-gray-600">{restaurantLocation.address}</p>
                    <p className="text-sm text-gray-500 mt-2">{restaurantLocation.coordinates}</p>
                  </div>
                  
                  {/* Decorative elements to simulate a map */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-red-300 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-16 h-16 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-green-300 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    asChild
                    className="w-full bg-red-600 hover:bg-red-700"
                    data-testid="button-google-maps"
                  >
                    <a 
                      href={restaurantLocation.googleMapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Navigation size={20} className="mr-2" />
                      Ouvrir dans Google Maps
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    asChild
                    className="w-full"
                    data-testid="button-waze"
                  >
                    <a 
                      href={`https://waze.com/ul?q=${encodeURIComponent(restaurantLocation.address)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Navigation size={20} className="mr-2" />
                      Ouvrir dans Waze
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Hours */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-3 text-red-600" size={24} />
                  Informations de Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
                  <p className="text-gray-600 leading-relaxed">{restaurantLocation.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Zone accessible en tap-tap, voiture et moto-taxi</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Téléphone</h4>
                  <a 
                    href={`tel:${restaurantLocation.phone}`}
                    className="text-red-600 hover:underline font-semibold text-lg"
                    data-testid="phone-contact-link"
                  >
                    {restaurantLocation.phone}
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <a 
                    href="https://wa.me/50948773957"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-semibold"
                    data-testid="whatsapp-contact-link"
                  >
                    Contactez-nous sur WhatsApp
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-3 text-red-600" size={24} />
                  Horaires d'Ouverture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Lundi - Jeudi</span>
                    <span className="text-gray-600">10h00 - 22h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Vendredi - Samedi</span>
                    <span className="text-gray-600">10h00 - 23h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Dimanche</span>
                    <span className="text-gray-600">12h00 - 21h00</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">Note Importante</h4>
                  <p className="text-red-700 text-sm">
                    Le rooftop ferme 30 minutes avant l'heure de fermeture générale. 
                    Dernières commandes acceptées 1 heure avant la fermeture.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Informations Pratiques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Parking disponible sur place</p>
                  <p>• Accessible aux personnes à mobilité réduite</p>
                  <p>• WiFi gratuit pour nos clients</p>
                  <p>• Terrasse climatisée disponible</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


      </div>
    </section>
  );
};

export default LocationMap;