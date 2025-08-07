import { Star, ExternalLink, MessageCircle } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      author: "Maddog D.",
      rating: 4,
      text: "Le temps d'attente est assez long, et il y a un bar au 2ème étage qui est assez intime et aéré avec beaucoup de plantes et vraiment charmant. La nourriture est correcte, je prends habituellement du poulet et des pizzas qui sont corrects et pas si chers. Je recommande le restaurant pour les réunions et les rendez-vous simples et le bar pour des choses plus intimes."
    },
    {
      author: "Mythzard T.",
      rating: 5,
      text: "Nourriture fraîche, très bonne salade, leur jus tonique est une tuerie."
    },
    {
      author: "Un client satisfait",
      rating: 5,
      text: "C'est mon restaurant préféré à Delmas. La nourriture y est incroyable. C'est un environnement paisible pour prendre un repas tranquille."
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}
      />
    ));
  };

  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Avis de nos <span className="text-red-600">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez ce que pensent nos clients de leur expérience chez Idgie's Restaurant. 
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                <div className="flex mr-3">
                  {renderStars(review.rating)}
                </div>
                <span className="text-gray-600 font-medium">{review.rating}/5</span>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold text-lg">
                    {review.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{review.author}</h4>
                  <p className="text-gray-500 text-sm">Client vérifié</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews & Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-2xl mr-4">
                <MessageCircle size={32} className="text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Plus d'Avis</h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Consultez tous nos avis clients sur Google Maps et n'hésitez pas à partager 
              votre propre expérience après votre visite chez Idgie's.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg group"
              >
                <ExternalLink size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                Voir tous les avis sur Google
              </a>
              <a
                href="https://wa.me/50948773957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
              >
                Partager votre avis via WhatsApp
              </a>
            </div>
          </div>

          {/* Rating Summary */}
          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">4.7</div>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-red-100">Note moyenne</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">150+</div>
                <p className="text-red-100">Avis clients</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-red-100">Recommandent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;