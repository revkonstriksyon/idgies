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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-600 text-white p-3 rounded-xl">
                <h1 className="text-2xl font-bold">I</h1>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Administration Idgie's</h1>
                <p className="text-red-600 font-medium">Panneau de gestion du contenu</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Connecté en tant que</p>
                <p className="font-semibold text-gray-900">Administrateur</p>
              </div>
              <a
                href="/"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                data-testid="button-view-site"
              >
                Voir le Site
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 text-sm font-medium">Menu Items</p>
                  <p className="text-2xl font-bold text-red-800" data-testid="stat-menu-items">
                    {menuItems.length}
                  </p>
                </div>
                <div className="bg-red-600 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Images Galerie</p>
                  <p className="text-2xl font-bold text-blue-800" data-testid="stat-gallery-images">
                    {galleryImages.length}
                  </p>
                </div>
                <div className="bg-blue-600 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 text-sm font-medium">Avis Clients</p>
                  <p className="text-2xl font-bold text-green-800" data-testid="stat-reviews">
                    {reviews.length}
                  </p>
                </div>
                <div className="bg-green-600 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Statut</p>
                  <p className="text-lg font-bold text-purple-800">En Ligne</p>
                </div>
                <div className="bg-purple-600 text-white p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="menu" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white p-1 rounded-xl shadow-sm border border-red-100">
            <TabsTrigger 
              value="menu" 
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg font-semibold py-3"
            >
              🍽️ Menu
            </TabsTrigger>
            <TabsTrigger 
              value="gallery" 
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg font-semibold py-3"
            >
              📸 Galerie
            </TabsTrigger>
            <TabsTrigger 
              value="info" 
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg font-semibold py-3"
            >
              ℹ️ Informations
            </TabsTrigger>
            <TabsTrigger 
              value="reviews" 
              className="data-[state=active]:bg-red-600 data-[state=active]:text-white rounded-lg font-semibold py-3"
            >
              ⭐ Avis
            </TabsTrigger>
          </TabsList>

          {/* Menu Management */}
          <TabsContent value="menu" className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Plus size={24} />
                  </div>
                  Ajouter un Nouveau Plat
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleMenuSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Nom du plat *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      placeholder="Ex: Poulet Grillé Spécial"
                      data-testid="input-menu-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price" className="text-sm font-semibold text-gray-700">Prix *</Label>
                    <Input 
                      id="price" 
                      name="price" 
                      placeholder="Ex: 450 HTG" 
                      required 
                      className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      data-testid="input-menu-price"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-semibold text-gray-700">Catégorie *</Label>
                    <Select name="category" required>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500" data-testid="select-menu-category">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Spécialités Poulet">🍗 Spécialités Poulet</SelectItem>
                        <SelectItem value="Pizzas Artisanales">🍕 Pizzas Artisanales</SelectItem>
                        <SelectItem value="Salades Fraîches">🥗 Salades Fraîches</SelectItem>
                        <SelectItem value="Boissons & Jus">🥤 Boissons & Jus</SelectItem>
                        <SelectItem value="Entrées">🥙 Entrées</SelectItem>
                        <SelectItem value="Desserts">🍰 Desserts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image" className="text-sm font-semibold text-gray-700">URL de l'image</Label>
                    <Input 
                      id="image" 
                      name="image" 
                      type="url" 
                      className="h-12 border-gray-200 focus:border-red-500 focus:ring-red-500"
                      placeholder="https://exemple.com/image.jpg"
                      data-testid="input-menu-image"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Description *</Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      className="min-h-[100px] border-gray-200 focus:border-red-500 focus:ring-red-500 resize-none"
                      placeholder="Décrivez les ingrédients et la préparation du plat..."
                      required
                      data-testid="textarea-menu-description"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button 
                      type="submit" 
                      disabled={createMenuMutation.isPending}
                      className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 h-12 font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      data-testid="button-submit-menu"
                    >
                      {createMenuMutation.isPending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Ajout en cours...
                        </>
                      ) : (
                        <>
                          <Plus size={20} className="mr-2" />
                          Ajouter le Plat
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  Menu Actuel ({menuItems.length} plats)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {menuLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-500 border-t-transparent"></div>
                    <p className="ml-4 text-gray-600">Chargement du menu...</p>
                  </div>
                ) : menuItems.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg">Aucun plat dans le menu</p>
                    <p className="text-gray-400 text-sm">Ajoutez votre premier plat ci-dessus</p>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {menuItems.map((item) => (
                      <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200" data-testid={`menu-item-${item.id}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                item.isAvailable 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-red-100 text-red-800'
                              }`}>
                                {item.isAvailable ? '✓ Disponible' : '✗ Indisponible'}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                            <div className="flex items-center gap-4">
                              <p className="text-2xl font-bold text-red-600">{item.price}</p>
                              <span className="inline-flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                                📂 {item.category}
                              </span>
                            </div>
                            {item.image && (
                              <div className="mt-4">
                                <img 
                                  src={item.image} 
                                  alt={item.name}
                                  className="w-24 h-24 object-cover rounded-lg shadow-sm"
                                />
                              </div>
                            )}
                          </div>
                          <div className="flex flex-col gap-2 ml-6">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setActiveEditId(item.id)}
                              className="hover:bg-blue-50 hover:border-blue-300"
                              data-testid={`button-edit-${item.id}`}
                            >
                              <Edit size={16} className="mr-1" />
                              Modifier
                            </Button>
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => {
                                if (window.confirm(`Êtes-vous sûr de vouloir supprimer "${item.name}" ?`)) {
                                  deleteMenuMutation.mutate(item.id);
                                }
                              }}
                              className="hover:bg-red-700"
                              data-testid={`button-delete-${item.id}`}
                            >
                              <Trash2 size={16} className="mr-1" />
                              Supprimer
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Management */}
          <TabsContent value="gallery" className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Plus size={24} />
                  </div>
                  Ajouter une Nouvelle Image
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleGallerySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="url" className="text-sm font-semibold text-gray-700">URL de l'image *</Label>
                    <Input 
                      id="url" 
                      name="url" 
                      type="url" 
                      required 
                      className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="https://exemple.com/image.jpg"
                      data-testid="input-gallery-url"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="alt" className="text-sm font-semibold text-gray-700">Description de l'image *</Label>
                    <Input 
                      id="alt" 
                      name="alt" 
                      required 
                      className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Ex: Plats savoureux d'Idgie's Restaurant"
                      data-testid="input-gallery-alt"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-sm font-semibold text-gray-700">Catégorie *</Label>
                    <Select name="category" required>
                      <SelectTrigger className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500" data-testid="select-gallery-category">
                        <SelectValue placeholder="Sélectionner une catégorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Plats">🍽️ Plats</SelectItem>
                        <SelectItem value="Ambiance">🏛️ Ambiance</SelectItem>
                        <SelectItem value="Cuisine">👨‍🍳 Cuisine</SelectItem>
                        <SelectItem value="Service">🎯 Service</SelectItem>
                        <SelectItem value="Équipe">👥 Équipe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Description optionnelle</Label>
                    <Input 
                      id="description" 
                      name="description" 
                      className="h-12 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                      placeholder="Description additionnelle (optionnel)"
                      data-testid="input-gallery-description"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button 
                      type="submit" 
                      disabled={createGalleryMutation.isPending}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-12 font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      data-testid="button-submit-gallery"
                    >
                      {createGalleryMutation.isPending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Ajout en cours...
                        </>
                      ) : (
                        <>
                          <Plus size={20} className="mr-2" />
                          Ajouter à la Galerie
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Galerie Actuelle ({galleryImages.length} images)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {galleryLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent"></div>
                    <p className="ml-4 text-gray-600">Chargement de la galerie...</p>
                  </div>
                ) : galleryImages.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg">Aucune image dans la galerie</p>
                    <p className="text-gray-400 text-sm">Ajoutez votre première image ci-dessus</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {galleryImages.map((image) => (
                      <div key={image.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200" data-testid={`gallery-item-${image.id}`}>
                        <div className="relative group aspect-square">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200">
                            <div className="absolute bottom-3 right-3">
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => {
                                  if (window.confirm(`Êtes-vous sûr de vouloir supprimer cette image ?`)) {
                                    deleteGalleryMutation.mutate(image.id);
                                  }
                                }}
                                className="shadow-lg hover:scale-105 transition-transform"
                                data-testid={`button-delete-gallery-${image.id}`}
                              >
                                <Trash2 size={16} />
                              </Button>
                            </div>
                            <div className="absolute top-3 left-3">
                              <span className="inline-flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                                {image.category}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="font-medium text-gray-900 text-sm leading-relaxed">{image.alt}</p>
                          {image.description && (
                            <p className="text-xs text-gray-500 mt-1">{image.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Restaurant Info */}
          <TabsContent value="info" className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Save size={24} />
                  </div>
                  Informations du Restaurant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleRestaurantInfoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Nom du restaurant *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      defaultValue={restaurantInfo?.name || "Idgie's Restaurant"} 
                      required 
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      data-testid="input-restaurant-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Téléphone *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      defaultValue={restaurantInfo?.phone || "+509 4877-3957"} 
                      required 
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      data-testid="input-restaurant-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      defaultValue={restaurantInfo?.email || "contact@idgiesrestaurant.com"} 
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      data-testid="input-restaurant-email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-semibold text-gray-700">Adresse *</Label>
                    <Input 
                      id="address" 
                      name="address" 
                      defaultValue={restaurantInfo?.address || "Delmas, Port-au-Prince, Haïti"} 
                      required 
                      className="h-12 border-gray-200 focus:border-green-500 focus:ring-green-500"
                      data-testid="input-restaurant-address"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</Label>
                    <Textarea 
                      id="description" 
                      name="description" 
                      defaultValue={restaurantInfo?.description || "Le goût de la maison dans une ambiance moderne et conviviale."} 
                      className="min-h-[100px] border-gray-200 focus:border-green-500 focus:ring-green-500 resize-none"
                      data-testid="textarea-restaurant-description"
                    />
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <Button 
                      type="submit" 
                      disabled={updateRestaurantMutation.isPending}
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-12 font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                      data-testid="button-submit-restaurant-info"
                    >
                      {updateRestaurantMutation.isPending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mise à jour...
                        </>
                      ) : (
                        <>
                          <Save size={20} className="mr-2" />
                          Mettre à Jour les Informations
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews */}
          <TabsContent value="reviews" className="space-y-8">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  Avis Clients ({reviews.length} commentaires)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {reviewsLoading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-yellow-500 border-t-transparent"></div>
                    <p className="ml-4 text-gray-600">Chargement des avis...</p>
                  </div>
                ) : reviews.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg">Aucun avis client</p>
                    <p className="text-gray-400 text-sm">Les avis des clients apparaîtront ici</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200" data-testid={`review-${review.id}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                              {review.customerName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900 text-lg">{review.customerName}</h3>
                              <p className="text-sm text-gray-500">
                                {review.createdAt ? new Date(review.createdAt).toLocaleDateString('fr-FR', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                }) : 'Date inconnue'}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }, (_, i) => (
                              <svg
                                key={i}
                                className={`w-5 h-5 ${i < parseInt(review.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                            ))}
                            <span className="ml-2 text-sm font-medium text-gray-600">
                              {review.rating}/5
                            </span>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <p className="text-gray-700 leading-relaxed italic">"{review.comment}"</p>
                        </div>
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