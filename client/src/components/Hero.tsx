import { ArrowRight, MapPin, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-16 lg:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/456879230_18045232618934301_8047943265727651158_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRHFPAcJlsap9ooLNY3dmeKajBBKsJOOcpqMEEqwk454hVexpE8-qsMZJv8u93r0KJvSUNC1wXpnkLo4cLihQ5&_nc_ohc=J2E1s69JIOoQ7kNvwGGTaks&_nc_oc=AdlhiXbir_oN5mioswYQsYil2KLJqcngm2D58FQ40FHauvM5kKDrzJvskrjMb4ZUNLk&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=1vSySLHXx0OzzTlKImI--Q&oh=00_AfTNBJvOgJbGiDJYfKPk1K5Alm-HIYuxem0")'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Le Goût de la Maison,<br />
              <span className="text-red-400">à deux pas de chez vous</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-4 font-medium">
              "C'est comme manger chez-soi !"
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Découvrez nos deux espaces uniques à Delmas : notre Fast-Food pour des repas rapides et savoureux, 
              et notre Rooftop avec vue imprenable pour des moments raffinés.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#menu"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center group shadow-lg"
              >
                Voir le Menu
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/50948773957"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Réserver une Table
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-white/80">
              <div className="flex items-center justify-center lg:justify-start">
                <MapPin size={18} className="mr-2 text-red-400" />
                <span className="text-sm">Delmas, Port-au-Prince</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <Clock size={18} className="mr-2 text-red-400" />
                <span className="text-sm">Ouvert 7j/7</span>
              </div>
            </div>
          </div>

          {/* Featured Dishes Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://scontent.fpap3-1.fna.fbcdn.net/v/t51.75761-15/471716965_18057839926934301_2356221322912585588_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHigza6MRBbwTBC-m42himQmGrIvoMxYDWYasi-gzFgNQzC047EdQ2SMxF9H-fIQTS6KokKCaWdAeemclbJHEbk&_nc_ohc=ozjJbFdpIswQ7kNvwF2drtL&_nc_oc=AdnEyMkcJIlo3SPuYdlM3k8mWh-WKvHfogW6jTcdt3nMQoylRuGEsY2vQV1wq990dic&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-1.fna&_nc_gid=KtIzKh4tDjhjbvmLAYmPzQ&oh=00_AfTO54ivtSPs1X2NFzmh5ujcuSfpqXJhRjR0mSJu8bE&oe=688E8B23"
                  alt="Plats savoureux d'Idgie's"
                  className="w-full h-32 lg:h-40 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://scontent.fpap3-2.fna.fbcdn.net/v/t51.75761-15/471635194_18057839908934301_6107939704202159619_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFVYqo2snRKWqP9WozBXipr-46RTW1hbFj7jpFNbWFsWMScktr30tJ_LMzcAtEqpZ24d4VVVdc1WCKtceMYEySC&_nc_ohc=0Uks9ippSasQ7kNvwEa4C9O&_nc_oc=AdnBtbUcp_Q7zbYj7pYuLebXPNoWyUQtxcCjQvmfU1fktZJpOUa4IPUqtxquhg0OhjY&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=-Xq4bdPTV4Q60uobxIplLA&oh=00_AfRd9aJ0fi4Cr3E1_-hkFQUZ7dK1Yz1tJNJotEQw1o&oe=688E7F45"
                  alt="Spécialités cuisinées"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-12">
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://scontent.fpap3-2.fna.fbcdn.net/v/t51.75761-15/471562965_18057839935934301_5619857303063158336_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwBBEsAEf772CZ4J20h0cPM5yzQpZZLJEznLNCllkskRgYWeKqiTz_3s0iJKAUfeNi9CBLHwmHpa7-es_NQ8d7&_nc_ohc=l1XaK0GM2BkQ7kNvwEDm6Hc&_nc_oc=AdnKNVledVz-4gGdHbzmox2S8p8oRc_ag4-9xcyr_Cn1qbXJVScqIMxdvPgzK99NzLg&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=KQQD_14vaT8N2kSjn_RjDg&oh=00_AfT5mlOIqTQOa0jvVzkUPiw5uxkfpOaZweDgArP8Q&oe=688E6C12"
                  alt="Plats frais préparés"
                  className="w-full h-24 lg:h-32 object-cover rounded-xl"
                />
              </div>
              <div className="bg-white rounded-2xl p-2 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://scontent.fpap3-2.fna.fbcdn.net/v/t51.75761-15/471474551_18057839899934301_7183502847797456427_n.jpg?stp=dst-jpegr_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEOBwuVP7tmkoZ4HxXcsaihLeaXyL5r8r8t5pfIvmvyvyZZAbh17RiWeMlNQNTjZXoyhB60pES94zLBs6M5IGfx&_nc_ohc=CBmv41UxV7YQ7kNvwG1Lxeh&_nc_oc=AdmjFNuGXaH_Hf9KZ_IL4pXD_F3-pIyRJ_f3zQWPYqt2X8XbBu0reVf5q9VEU7Ntd6Y&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=wH8k4aLq9j7a4CgMEmsLQQ&oh=00_AfRk8b8KcwjAhq_M5kpCJ3tAA4iroW2XgKZyPSw&oe=688E9A45"
                  alt="Délicieuse cuisine locale"
                  className="w-full h-32 lg:h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;