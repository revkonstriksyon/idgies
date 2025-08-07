import { Camera, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      url: "https://scontent.fpap3-1.fna.fbcdn.net/v/t51.75761-15/471716965_18057839926934301_2356221322912585588_n.jpg?stp=dst-jpegr_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHigza6MRBbwTBC-m42himQmGrIvoMxYDWYasi-gzFgNQzC047EdQ2SMxF9H-fIQTS6KokKCaWdAeemclbJHEbk&_nc_ohc=ozjJbFdpIswQ7kNvwF2drtL&_nc_oc=AdnEyMkcJIlo3SPuYdlM3k8mWh-WKvHfogW6jTcdt3nMQoylRuGEsY2vQV1wq990dic&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-1.fna&_nc_gid=KtIzKh4tDjhjbvmLAYmPzQ&oh=00_AfTO54ivtSPs1X2NFzmh5ujcuSfpqXJhRjR0mS",
      alt: "Plats savoureux d'Idgie's Restaurant",
      category: "Plats"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t51.75761-15/471635194_18057839908934301_6107939704202159619_n.jpg?stp=dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFVYqo2snRKWqP9WozBXipr-46RTW1hbFj7jpFNbWFsWMScktr30tJ_LMzcAtEqpZ24d4VVVdc1WCKtceMYEySC&_nc_ohc=0Uks9ippSasQ7kNvwEa4C9O&_nc_oc=AdnBtbUcp_Q7zbYj7pYuLebXPNoWyUQtxcCjQvmfU1fktZJpOUa4IPUqtxquhg0OhjY&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=-Xq4bdPTV4Q60uobxIplLA&oh=00_AfRd9aJ0fi4Cr3E1_-hkFQUZ7dK1Yz1tJNJotE",
      alt: "Spécialités cuisinées avec passion",
      category: "Plats"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t51.75761-15/471562965_18057839935934301_5619857303063158336_n.jpg?stp=dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEwBBEsAEf772CZ4J20h0cPM5yzQpZZLJEznLNCllkskRgYWeKqiTz_3s0iJKAUfeNi9CBLHwmHpa7-es_NQ8d7&_nc_ohc=l1XaK0GM2BkQ7kNvwEDm6Hc&_nc_oc=AdnKNVledVz-4gGdHbzmox2S8p8oRc_ag4-9xcyr_Cn1qbXJVScqIMxdvPgzK99NzLg&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=KQQD_14vaT8N2kSjn_RjDg&oh=00_AfT5mlOIqTQOa0jvVzkUPiw5uxkfpOaZweDgAr",
      alt: "Délicieux plats préparés frais",
      category: "Plats"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/469179862_18055497832934301_2010378637651852501_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH5WO0BxyEc4KtJC87BGMatt__USCYlFIq3_9RIJiUUigPQC4RndQQK4USmKsNJM-h8pjRV_WxQXP9uK47a-4Qc&_nc_ohc=QhmQ7G0V4EAQ7kNvwFzbysR&_nc_oc=AdnQtKsVZjKvuoBSeqFDji9eCj3byISGzdwEHW2PS8B4dRapf6_LXfBH1pPmtSsHq3U&_nc_zt=23&_nc_ht=scontent.fpap3-2.fna&_nc_gid=ByFSqyXvfU3dLSfCMNfNKQ&oh=00_AfQ0CcEiHm6534PF4R-CgJp6DDE-zZuqQLjnxE7Y1DexeQ&oe=688E9B88",
      alt: "Ambiance chaleureuse du restaurant",
      category: "Ambiance"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/456879230_18045232618934301_8047943265727651158_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFRHFPAcJlsap9ooLNY3dmeKajBBKsJOOcpqMEEqwk454hVexpE8-qsMZJv8u93r0KJvSUNC1wXpnkLo4cLihQ5&_nc_ohc=J2E1s69JIOoQ7kNvwGGTaks&_nc_oc=AdlhiXbir_oN5mioswYQsYil2KLJqcngm2D58FQ40FHauvM5kKDrzJvskrjMb4ZUNLk&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=1vSySLHXx0OzzTlKImI--Q&oh=00_AfTNBJvOgJbGiDJYfKPk1K5Alm-HIYuxem0",
      alt: "Espace rooftop avec vue magnifique",
      category: "Ambiance"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/457128015_18045232318934301_1358730448357741076_n.jpg?stp=cp6_dst-jpegr_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLAwpOTZr2CdmM1fqHHK_AXs9WDrqKYv9ez1YOuopi_yH3whPnuDZCu3xpS2I_d-rU_EKlGLVCJ3Ukc5fLahmc&_nc_ohc=O8yPyCKfYqIQ7kNvwEOIhGm&_nc_oc=AdmDHFgh-x94LbDl-hq7iQAv56pDiOFo_7wV0zWJxLMTsVQDDkc1JnifrYns21ZwzSk&_nc_zt=23&se=-1&_nc_ht=scontent.fpap3-2.fna&_nc_gid=oORduWErhSqW7Vpw35X2ig&oh=00_AfRMKba_LMcIci1EUO5E_JkXQ9PtAQVY915",
      alt: "Terrasse et espace extérieur",
      category: "Ambiance"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/469386370_18055497844934301_469280859006035696_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIv6CWbESv5FEUdnhwtOgeopswU4Xgje2imzBTheCN7VZ3MABb_ln0cVnvyntad2u69z-cdQZHN4eT7t97ph0w&_nc_ohc=f6tV9s4-sSkQ7kNvwEBdTQp&_nc_oc=Adm2RBm9Bm4cT69GumZYQUPzatbnA8FKizrXfImHUhPCZ78ebNacyoas0X8IvsXkfOs&_nc_zt=23&_nc_ht=scontent.fpap3-2.fna&_nc_gid=M_dKLEhTcMY6EM306Cd0jA&oh=00_AfTeLZs2REnIVcYf3u2zAYRHqpyphIE4SxsyJ54SIhYp6g&oe=688E95D3",
      alt: "Cuisine moderne et équipée",
      category: "Cuisine"
    },
    {
      url: "https://scontent.fpap3-2.fna.fbcdn.net/v/t39.30808-6/469162800_18055497856934301_3220792700536978420_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-e-vHuXeDh1T3VVELiWdvlIgsRR6f5viUiCxFHp_m-EBtJg-ZVu6ECpqoaXoPJKADnA2kw2JRojIRx8howmXx&_nc_ohc=fNYzPIFx9CUQ7kNvwGs9RmW&_nc_oc=Adn4aEja2aodXsqU1sWUI5q3-K7jfu41JdzucylJxEA-2172_F6hApB6FeSsnIbNkEs&_nc_zt=23&_nc_ht=scontent.fpap3-2.fna&_nc_gid=pmtCpS2hdjWD9qn-DmcFpA&oh=00_AfSkStnjJAoyaXI7eP1_nIGHxJkXstqhuSE6ROBoGCFpNQ&oe=688EB1E6",
      alt: "Service et présentation des plats",
      category: "Service"
    },
    {
      url: "https://scontent.fpap3-1.fna.fbcdn.net/v/t39.30808-6/469174616_18055497871934301_3933390767356727855_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG1LcetM6t5EPp8u7Ha290DW7Ae1kmsoOtbsB7WSayg69kVnEIL9J27Uk815IHVChqEgyn89a2lvmspSy9bRLqe&_nc_ohc=Djiu3PLNFYcQ7kNvwHiS1Vf&_nc_oc=Adl9QC1Va4RX5NecR8bQQIAqSJKfVG1tI6AH5IRhaQ4BZIt7mMiOpddqyYrjxRMGD4w&_nc_zt=23&_nc_ht=scontent.fpap3-1.fna&_nc_gid=x3oxtWn95p1O8a2GvLyGnw&oh=00_AfQbnnWFk6nwRmj--vZygx4MFP95cjZsjPrcIMZRdBaVvQ&oe=688E980E",
      alt: "Équipe et ambiance conviviale",
      category: "Équipe"
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