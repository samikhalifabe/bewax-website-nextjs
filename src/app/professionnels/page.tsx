"use client"; // Add use client directive for carousel functionality

import Header from "@/components/Header";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Professionnels() {
  const images = [
    "/pro8.jpg",
    "/pro2.jpg",
    "/pro1.jpg",
    "/pro3.jpg",
    "/pro4.jpg",
    "/pro5.jpg",
    "/pro6.jpg",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      {/* Hero Section (Replacing Revolution Slider) */}
      <section className="w-full h-[400px] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/DSC_2282l.jpg" // Assuming this image is in the public directory
          alt="Professionnels"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white">Professionnels</h1>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-gray-100"> {/* Keep gray-100 for background */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Image Carousel */}
          <Card className="w-full">
            <CardContent className="p-0"> {/* Remove default padding */}
              <Carousel>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={image}
                        alt={`Professional terrace cleaning image ${index + 1}`}
                        title={`Professional terrace cleaning image ${index + 1}`}
                        width={800}
                        height={532}
                        layout="responsive"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Text Content */}
          <Card className="w-full">
            <CardHeader> {/* Added CardHeader for the title */}
              <h2 className="text-3xl font-bold text-bewax-green">Professionnels</h2>
            </CardHeader>
            <CardContent className="mt-4 text-bewax-gray">
              <p>Une terrasse bien entretenue, c’est la garantie de satisfaire vos clients à 110% …et de faire parler de vous…</p>
              <p className="mt-4">Le bouche à oreille est la meilleure des publicités et c’est entièrement gratuit !!!</p>
              <p className="mt-4">Valorisez votre travail et votre savoir faire en proposant à vos ancien clients la remise à neuf complète de leur terrasse pour qu’ils puissent à nouveau apprécier pleinement votre construction.</p>
              <p className="mt-4">Et n’oubliez pas, un client satisfait à 110%, est la meilleure des publicités pour vous… !!</p>
              <p className="mt-4">Prenez maintenant contact avec Bernard Neyns qui vous aidera à trouver les formules les plus simples et légères pour satisfaire vos clients à 110% et développer votre activité !!</p>
              <p className="mt-4">Une nouvelle terrasse est un investissement durable. Pour bien débuter en toute sérénité, vous pouvez proposer à vos clients un suivis de leur nouvelle terrasse, de 1mois à 5 ans.</p>
              <p className="mt-4">Nous réaliserons un premier nettoyage et un entretient peu après la fin de votre chantier. Au début du printemps un simple passage d’entretien pourra permettre de garder le suivis de votre clientèle et leur offrir la joie de profiter pleinement d’une terrasse impeccable !</p>
            </CardContent>
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
