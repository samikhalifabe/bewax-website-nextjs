import Header from "@/components/Header";
import Image from "next/image";
// Import other components as needed

export default function TerrassesBois() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      {/* Hero Section (Replacing Revolution Slider) */}
      <section className="w-full h-[400px] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/bandeauhaut.jpg" // Assuming this image is in the public directory
          alt="Remise à neuf et entretien de terrasses en bois"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white">Remise à neuf et entretien</h1>
      </section>

      {/* Section with video and text */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Video */}
          <div className="w-full">
            <iframe
              src="https://player.vimeo.com/video/196717429"
              width="100%"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-bewax-green">Nettoyage et entretien de terrasses</h2>
            <div className="mt-4 text-bewax-gray">
              <p>Le bois est le revêtement qui s’intègre le mieux au jardin. Il crée une atmosphère intime et chaleureuse.</p>
              <p className="mt-4">Pour conserver sa beauté, le nettoyage et l’entretient régulier de votre terrasse est le meilleur moyen d’en profiter sereinement durant de longues années.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section with missions, advice, and image */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          {/* Text (Missions and Advice) */}
          <div>
            <h2 className="text-3xl font-bold text-bewax-dark text-center md:text-left">Nos missions et nos conseils</h2>
            <div className="mt-4 text-bewax-gray">
              <p>✔ Nous réalisons une remise à neuf complète de votre terrasse en bois par un nettoyage doux et en profondeur.</p>
              <p>✔ Nous savons que votre terrasse est importante, c’est pourquoi nous travaillons avec des produits naturels et de qualité qui respectent votre bois et votre jardin.</p>
              <p>✔ Nos machines sont spécialement conçues pour répondre à toutes les exigences particulières que demande le bois pour un nettoyage de qualité.</p>
              <p>✔ Nous prenons également en charge votre nouvelle construction et vous assurons une bonne protection pour bien démarrer sur des bases saines</p>
              <p>✔ Le nettoyage et l’entretient régulier de votre terrasse grâce à notre service de maintenance est votre garantie pour une terrasse durable</p>
              <p>✔ Evitez d’éclater les fibres et d’enlever la protection naturelle du bois par l’utilisation de nettoyeur haute pression</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/DSC_5030-2.jpg" // Assuming this image is in the public directory
              alt="Nettoyage de terrasse en bois"
              title="Nettoyage de terrasse en bois"
              width={800}
              height={389}
              layout="responsive"
            />
          </div>
        </div>
      </section>

      {/* Section about Wax being the solution */}
      <section className="w-full py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-bewax-green">Wax est la solution pour votre projet</h2>
          <div className="mt-4 text-bewax-gray">
            <h4 className="text-xl font-semibold text-bewax-dark">Pour redonner vie à votre terrasse ou pour bien démarrer avec votre nouvelle construction,</h4>
            <p className="mt-2">Parce que nous avons une grande expérience dans l’aménagement de terrasses en bois et parce que nous les avons suivies durant de nombreuses années, nous avons pu développer et mettre en place un concept innovant sur le marché pour une remise à neuf stupéfiante de votre terrasse ainsi qu’un service de maintenance performant, spécialement conçu pour les terrasses en bois.</p>
            <p className="mt-2">Grâce à notre expertise, vous avez la garantie que votre terrasse gardera la forme durant toute sa durée de vie</p>
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
