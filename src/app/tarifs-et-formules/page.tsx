import Header from "@/components/Header";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
        <div className="container mx-auto px-4 flex justify-center"> {/* Center the card */}
          {/* Pricing Column */}
          <Card className="w-full md:w-1/2 text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-bewax-dark">8€ du m²</CardTitle>
              <div className="mt-2">
                <h4 className="text-4xl font-bold text-bewax-green">
                  WASH
                </h4>
              </div>
            </CardHeader>

            <CardContent className="mt-8 text-bewax-gray">
              <div className="space-y-2"> {/* Add spacing between features */}
                <p>✔ Prise en charge complète de la rénovation de votre terrasse</p>
                <p>✔ Nettoyage en profondeur et en douceur</p>
                <p>✔ Forfait 320€ terrasse de moins de 25m²</p>
                <p>✔ 8€ par m² supplémentaire</p>
                <p>________________</p>
                <p className="font-semibold">EN OPTION</p>
                <p>Petites réparations</p>
                <p>✔ Fourniture d'une huile adaptée</p>
                <p>✔ Application de l'huile</p>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center mt-8"> {/* Center the button */}
              <Button asChild>
                <a href="tel:0472321597"><span>0472 32 15 97</span></a>
              </Button>
            </CardFooter>
          </Card>
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
