import { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Trash2, Plus, Save, Edit } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { MenuItem, GalleryImage, Review, RestaurantInfo } from '@shared/schema';

const Admin = () => {
  const { toast } = useToast();
  const [activeEditId, setActiveEditId] = useState<number | null>(null);

  // Fetch data
  const { data: menuItems = [], isLoading: menuLoading } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  const { data: galleryImages = [], isLoading: galleryLoading } = useQuery<GalleryImage[]>({
    queryKey: ['/api/gallery'],
  });

  const { data: reviews = [], isLoading: reviewsLoading } = useQuery<Review[]>({
    queryKey: ['/api/reviews'],
  });

  const { data: restaurantInfo } = useQuery<RestaurantInfo>({
    queryKey: ['/api/restaurant-info'],
  });

  // Menu mutations
  const createMenuMutation = useMutation({
    mutationFn: (data: any) => apiRequest('/api/menu', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/menu'] });
      toast({ title: "Plat ajouté avec succès!" });
    },
  });

  const updateMenuMutation = useMutation({
    mutationFn: ({ id, data }: { id: number; data: any }) =>
      apiRequest(`/api/menu/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/menu'] });
      setActiveEditId(null);
      toast({ title: "Plat mis à jour!" });
    },
  });

  const deleteMenuMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/menu/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/menu'] });
      toast({ title: "Plat supprimé!" });
    },
  });

  // Gallery mutations
  const createGalleryMutation = useMutation({
    mutationFn: (data: any) => apiRequest('/api/gallery', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
      toast({ title: "Image ajoutée à la galerie!" });
    },
  });

  const deleteGalleryMutation = useMutation({
    mutationFn: (id: number) => apiRequest(`/api/gallery/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/gallery'] });
      toast({ title: "Image supprimée!" });
    },
  });

  // Restaurant info mutation
  const updateRestaurantMutation = useMutation({
    mutationFn: (data: any) => apiRequest('/api/restaurant-info', { method: 'PUT', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/restaurant-info'] });
      toast({ title: "Informations mises à jour!" });
    },
  });

  const handleMenuSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      price: formData.get('price') as string,
      category: formData.get('category') as string,
      image: formData.get('image') as string,
    };
    createMenuMutation.mutate(data);
    (e.target as HTMLFormElement).reset();
  };

  const handleGallerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      url: formData.get('url') as string,
      alt: formData.get('alt') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
    };
    createGalleryMutation.mutate(data);
    (e.target as HTMLFormElement).reset();
  };

  const handleRestaurantInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
      address: formData.get('address') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
    };
    updateRestaurantMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Panneau d'Administration</h1>
          <p className="text-gray-600">Gérez facilement le contenu de votre restaurant</p>
        </div>

        <Tabs defaultValue="menu" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="gallery">Galerie</TabsTrigger>
            <TabsTrigger value="info">Informations</TabsTrigger>
            <TabsTrigger value="reviews">Avis</TabsTrigger>
          </TabsList>

          {/* Menu Management */}
          <TabsContent value="menu" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus size={20} />
                  Ajouter un nouveau plat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMenuSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom du plat</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="price">Prix</Label>
                    <Input id="price" name="price" placeholder="ex: 250 HTG" required />
                  </div>
                  <div>
                    <Label htmlFor="category">Catégorie</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entrées">Entrées</SelectItem>
                        <SelectItem value="Plats Principaux">Plats Principaux</SelectItem>
                        <SelectItem value="Pizzas">Pizzas</SelectItem>
                        <SelectItem value="Poulet">Poulet</SelectItem>
                        <SelectItem value="Boissons">Boissons</SelectItem>
                        <SelectItem value="Desserts">Desserts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="image">URL de l'image</Label>
                    <Input id="image" name="image" type="url" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" disabled={createMenuMutation.isPending}>
                      {createMenuMutation.isPending ? 'Ajout...' : 'Ajouter le plat'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Menu actuel</CardTitle>
              </CardHeader>
              <CardContent>
                {menuLoading ? (
                  <p>Chargement...</p>
                ) : (
                  <div className="grid gap-4">
                    {menuItems.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-lg font-bold text-red-600">{item.price}</p>
                          <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setActiveEditId(item.id)}
                          >
                            <Edit size={16} />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => deleteMenuMutation.mutate(item.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management */}
          <TabsContent value="gallery" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus size={20} />
                  Ajouter une nouvelle image
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleGallerySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="url">URL de l'image</Label>
                    <Input id="url" name="url" type="url" required />
                  </div>
                  <div>
                    <Label htmlFor="alt">Description de l'image</Label>
                    <Input id="alt" name="alt" required />
                  </div>
                  <div>
                    <Label htmlFor="category">Catégorie</Label>
                    <Select name="category" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plats">Plats</SelectItem>
                        <SelectItem value="Ambiance">Ambiance</SelectItem>
                        <SelectItem value="Cuisine">Cuisine</SelectItem>
                        <SelectItem value="Service">Service</SelectItem>
                        <SelectItem value="Équipe">Équipe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="description">Description optionnelle</Label>
                    <Input id="description" name="description" />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" disabled={createGalleryMutation.isPending}>
                      {createGalleryMutation.isPending ? 'Ajout...' : 'Ajouter à la galerie'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Galerie actuelle</CardTitle>
              </CardHeader>
              <CardContent>
                {galleryLoading ? (
                  <p>Chargement...</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="border rounded-lg overflow-hidden">
                        <img src={image.url} alt={image.alt} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="font-semibold">{image.alt}</h3>
                          <span className="inline-block bg-gray-100 px-2 py-1 rounded text-xs mt-2">
                            {image.category}
                          </span>
                          <Button
                            variant="destructive"
                            size="sm"
                            className="mt-2 w-full"
                            onClick={() => deleteGalleryMutation.mutate(image.id)}
                          >
                            <Trash2 size={16} className="mr-2" />
                            Supprimer
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Restaurant Info */}
          <TabsContent value="info" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Save size={20} />
                  Informations du restaurant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRestaurantInfoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom du restaurant</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      defaultValue={restaurantInfo?.name || "Idgie's Restaurant"} 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      defaultValue={restaurantInfo?.phone || "+509 4877-3957"} 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      defaultValue={restaurantInfo?.email || "contact@idgiesrestaurant.com"} 
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">Adresse</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      defaultValue={restaurantInfo?.address || "Delmas, Port-au-Prince, Haïti"} 
                      required 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      defaultValue={restaurantInfo?.description || "Le goût de la maison dans une ambiance moderne et conviviale."} 
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" disabled={updateRestaurantMutation.isPending}>
                      {updateRestaurantMutation.isPending ? 'Mise à jour...' : 'Mettre à jour les informations'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Avis clients</CardTitle>
              </CardHeader>
              <CardContent>
                {reviewsLoading ? (
                  <p>Chargement...</p>
                ) : (
                  <div className="grid gap-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{review.customerName}</h3>
                          <span className="text-yellow-500">{'★'.repeat(parseInt(review.rating))}</span>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {review.createdAt ? new Date(review.createdAt).toLocaleDateString('fr-FR') : 'Date inconnue'}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;