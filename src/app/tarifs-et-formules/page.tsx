import Header from "@/components/Header";
import Image from "next/image";
// Import other components as needed

export default function TarifsEtFormules() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      {/* Hero Section (Replacing Revolution Slider) */}
      <section className="w-full h-[400px] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/DSC_2208.jpg" // Assuming this image is in the public directory
          alt="Tarifs et formules"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white">Tarifs et formules</h1>
      </section>

      {/* Pricing Table Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Pricing Table */}
          <div className="pricetable" id="pt_xz6anq3qzzvap948s4qf">
            <div className="pricetable-inner">
              {/* Pricing Column */}
              <div className="pricetable-column pricetable-standard pricetable-first pricetable-last pt_col_nb_0 w-full md:w-1/2 mx-auto border border-gray-200 rounded-lg overflow-hidden">
                <div className="pricetable-column-inner p-8 text-center">
                  <div className="pricetable-header">
                    <h3 className="pricetable-name text-2xl font-semibold text-bewax-dark">8€ du m²</h3>
                    <div className="pt_price_ctn mt-2">
                      <h4 className="pricetable-price text-4xl font-bold text-bewax-green">
                        <span className="pt_price">WASH</span>
                        <span className="price_details"></span>
                      </h4>
                    </div>
                  </div>

                  <div className="features mt-8 text-bewax-gray">
                    <div className="pricetable-feature pricetable-first">
                      ✔ Prise en charge complète de la rénovation de votre terrasse
                    </div>
                    <div className="pricetable-feature ">
                      ✔ Nettoyage en profondeur et en douceur
                    </div>
                    <div className="pricetable-feature ">
                      ✔ Forfait 320€ terrasse de moins de 25m²
                    </div>
                    <div className="pricetable-feature ">
                      ✔ 8€ par m² supplémentaire
                    </div>
                    <div className="pricetable-feature ">
                      ________________
                    </div>
                    <div className="pricetable-feature ">
                      EN OPTION
                    </div>
                    <div className="pricetable-feature ">
                      Petites réparations
                    </div>
                    <div className="pricetable-feature ">
                      ✔ Fourniture d'une huile adaptée
                    </div>
                    <div className="pricetable-feature ">
                      ✔ Application de l'huile
                    </div>
                  </div>

                  <div className="pricetable-button-container mt-8">
                    <a href="tel:0472321597" className="inline-block bg-bewax-green text-white text-lg font-semibold py-3 px-8 rounded-md hover:bg-opacity-90 transition duration-300">
                      0472 32 15 97
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer will go here */}
      {/* Assuming Footer component will be created later */}
      <footer className="w-full bg-bewax-dark text-bewax-light-gray py-8">
        <div className="container mx-auto text-center">
          <p>
            Copyright 2017 <a href="#" target="_blank" className="text-bewax-green">Go2Web</a> | All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
}
