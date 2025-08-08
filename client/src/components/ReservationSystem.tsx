import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ReservationSystem = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const reservationData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      guests: formData.get('guests') as string,
      space: formData.get('space') as string,
      specialRequests: formData.get('specialRequests') as string,
    };

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Réservation envoyée!",
        description: "Nous vous contacterons sous peu pour confirmer votre réservation.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="reservation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Réservation <span className="text-red-600">de Table</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Réservez votre table dès maintenant pour une expérience culinaire mémorable. 
            Choisissez entre notre espace principal ou notre rooftop avec vue panoramique.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Calendar className="mr-3 text-red-600" size={24} />
                Faire une Réservation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom Complet *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Votre nom complet"
                      data-testid="input-reservation-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      required 
                      placeholder="+509 XXXX-XXXX"
                      data-testid="input-reservation-phone"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="votre@email.com"
                    data-testid="input-reservation-email"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input 
                      id="date" 
                      name="date" 
                      type="date" 
                      required
                      min={new Date().toISOString().split('T')[0]}
                      data-testid="input-reservation-date"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Heure *</Label>
                    <Select name="time" required>
                      <SelectTrigger data-testid="select-reservation-time">
                        <SelectValue placeholder="Choisir l'heure" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="11:00">11:00</SelectItem>
                        <SelectItem value="11:30">11:30</SelectItem>
                        <SelectItem value="12:00">12:00</SelectItem>
                        <SelectItem value="12:30">12:30</SelectItem>
                        <SelectItem value="13:00">13:00</SelectItem>
                        <SelectItem value="13:30">13:30</SelectItem>
                        <SelectItem value="14:00">14:00</SelectItem>
                        <SelectItem value="18:00">18:00</SelectItem>
                        <SelectItem value="18:30">18:30</SelectItem>
                        <SelectItem value="19:00">19:00</SelectItem>
                        <SelectItem value="19:30">19:30</SelectItem>
                        <SelectItem value="20:00">20:00</SelectItem>
                        <SelectItem value="20:30">20:30</SelectItem>
                        <SelectItem value="21:00">21:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="guests">Nb. Personnes *</Label>
                    <Select name="guests" required>
                      <SelectTrigger data-testid="select-reservation-guests">
                        <SelectValue placeholder="Personnes" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i + 1} value={(i + 1).toString()}>
                            {i + 1} {i === 0 ? 'personne' : 'personnes'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="space">Espace Préféré</Label>
                  <Select name="space">
                    <SelectTrigger data-testid="select-reservation-space">
                      <SelectValue placeholder="Choisir un espace" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Restaurant Principal</SelectItem>
                      <SelectItem value="rooftop">Rooftop (Vue panoramique)</SelectItem>
                      <SelectItem value="terrasse">Terrasse</SelectItem>
                      <SelectItem value="no-preference">Pas de préférence</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="specialRequests">Demandes Spéciales</Label>
                  <Textarea 
                    id="specialRequests" 
                    name="specialRequests"
                    placeholder="Anniversaire, allergies, demandes particulières..."
                    data-testid="textarea-special-requests"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700" 
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="button-submit-reservation"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Confirmer la Réservation'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Reservation Info & Contact */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-br from-red-50 to-red-100">
              <CardHeader>
                <CardTitle className="text-red-800">Informations Importantes</CardTitle>
              </CardHeader>
              <CardContent className="text-red-700">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Clock className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Réservations acceptées jusqu'à 21h00</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Pour plus de 12 personnes, appelez-nous directement</span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span>Confirmation par téléphone dans les 24h</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Réservation par Téléphone</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="mr-3 text-red-600" size={20} />
                    <div>
                      <p className="font-semibold">Appelez-nous directement</p>
                      <a 
                        href="tel:+50948773957" 
                        className="text-red-600 hover:underline text-lg font-bold"
                        data-testid="phone-reservation-link"
                      >
                        (509) 4877-3957
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="mr-3 text-red-600" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a 
                        href="mailto:reservation@idgiesrestaurant.com" 
                        className="text-red-600 hover:underline"
                        data-testid="email-reservation-link"
                      >
                        reservation@idgiesrestaurant.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Horaires de Réservation</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Lun - Jeu:</strong> 10h00 - 22h00</p>
                    <p><strong>Ven - Sam:</strong> 10h00 - 23h00</p>
                    <p><strong>Dimanche:</strong> 12h00 - 21h00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Espaces Disponibles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Restaurant Principal</h4>
                    <p className="text-sm text-gray-600">Ambiance climatisée, parfait pour les familles</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Rooftop</h4>
                    <p className="text-sm text-gray-600">Vue panoramique, idéal pour les soirées romantiques</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Terrasse</h4>
                    <p className="text-sm text-gray-600">Espace semi-ouvert avec végétation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSystem;