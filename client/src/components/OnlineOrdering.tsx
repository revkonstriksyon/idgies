import { ShoppingCart, Plus, Minus, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { MenuItem } from '@shared/schema';

interface CartItem extends MenuItem {
  quantity: number;
}

const OnlineOrdering = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch menu items
  const { data: menuItems = [], isLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart(prev => {
      return prev.reduce((acc, cartItem) => {
        if (cartItem.id === itemId) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace(' HTG', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const menuByCategory = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  return (
    <section id="commander" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Commander <span className="text-red-600">en Ligne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Commandez vos plats préférés directement depuis chez vous. 
            Livraison rapide dans tout Delmas et Port-au-Prince.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <Clock size={20} className="mr-2" />
              Livraison 30-45 min
            </div>
            <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
              <MapPin size={20} className="mr-2" />
              Zone: Delmas & Port-au-Prince
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items */}
          <div className="flex-1">
            {isLoading ? (
              <div className="text-center py-8">
                <p className="text-xl text-gray-600">Chargement du menu...</p>
              </div>
            ) : (
              <div className="space-y-12">
                {Object.entries(menuByCategory).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{category}</h3>
                    <div className="grid gap-4">
                      {items.map((item) => (
                        <Card key={item.id} className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                                  {item.isAvailable && <Badge variant="secondary" className="bg-green-100 text-green-800">Disponible</Badge>}
                                </div>
                                <p className="text-gray-600 mb-3">{item.description}</p>
                                <p className="text-xl font-bold text-red-600">{item.price}</p>
                              </div>
                              <div className="ml-6">
                                <Button
                                  onClick={() => addToCart(item)}
                                  disabled={!item.isAvailable}
                                  className="bg-red-600 hover:bg-red-700"
                                  data-testid={`button-add-to-cart-${item.id}`}
                                >
                                  <Plus size={16} className="mr-1" />
                                  Ajouter
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Shopping Cart */}
          <div className="lg:w-96">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ShoppingCart size={20} className="mr-2" />
                    Votre Commande
                  </div>
                  <Badge variant="outline" data-testid="cart-items-count">
                    {getTotalItems()} items
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg" data-testid={`cart-item-${item.id}`}>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-900">{item.name}</h5>
                          <p className="text-sm text-gray-500">{item.price}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            data-testid={`button-decrease-${item.id}`}
                          >
                            <Minus size={12} />
                          </Button>
                          <span className="w-8 text-center" data-testid={`quantity-${item.id}`}>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => addToCart(item)}
                            data-testid={`button-increase-${item.id}`}
                          >
                            <Plus size={12} />
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 mt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-xl font-bold text-red-600" data-testid="cart-total">
                          {getTotalPrice()} HTG
                        </span>
                      </div>
                      
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700" 
                        size="lg"
                        data-testid="button-checkout"
                      >
                        Passer la Commande
                      </Button>
                      
                      <div className="text-center mt-4">
                        <p className="text-sm text-gray-500">Ou appelez-nous:</p>
                        <a 
                          href="tel:+50948773957" 
                          className="text-red-600 font-semibold hover:underline"
                          data-testid="phone-order-link"
                        >
                          (509) 4877-3957
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Delivery Info */}
        <div className="mt-16 bg-red-600 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Informations de Livraison</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Horaires de Livraison</h4>
              <p className="text-red-100">Tous les jours: 11h00 - 21h30</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Frais de Livraison</h4>
              <p className="text-red-100">
                50 HTG (Gratuit pour commandes &gt; 1000 HTG)
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Zones de Livraison</h4>
              <p className="text-red-100">Delmas, Pétion-Ville, Port-au-Prince</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineOrdering;