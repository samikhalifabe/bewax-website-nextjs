import Image from "next/image";
import Header from "@/components/Header";
import { FaHome, FaTools, FaCalculator } from 'react-icons/fa';
import { MdContactMail, MdVideocam } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      {/* Hero Section (Replacing Revolution Slider) */}
      <section className="w-full h-[560px] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/bnadeauhome.jpg" // Assuming the hero image is in the public directory
          alt="Remise à neuf de terrasses en bois"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white">Remise à neuf de terrasses en bois</h1>
      </section>

      {/* Icon boxes section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Icon Box 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bewax-blue flex items-center justify-center text-white text-2xl">
              <FaHome />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bewax-dark">Remise à neuf et entretien</h3>
            <p className="mt-2 text-bewax-gray">
              Découvrez comment bien démarrer avec votre nouvelle terrasse en bois et comment redonner facilement éclat et jeunesse à une terrasse toute grisonnante…
            </p>
          </div>

          {/* Icon Box 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-bewax-green flex items-center justify-center text-white text-2xl">
              <FaTools />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bewax-dark">Professionnels</h3>
            <p className="mt-2 text-bewax-gray">
              Chez Wax, nous prenons soin de votre image de marque ! Une terrasse bien entretenue est la meilleure garantie d’une belle vie pour vos réalisations …et pour votre publicité&nbsp;!!…
            </p>
          </div>

          {/* Icon Box 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-2xl"> {/* Keep yellow for now */}
              <FaCalculator />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-bewax-dark">Formules et tarifs</h3>
            <p className="mt-2 text-bewax-gray">
              Pour vous permettre de profiter pleinement de votre terrasse sans tracas, Wax a développé des solutions légères et performantes qui vont vous simplifier la vie…
            </p>
          </div>
        </div>
      </section>

      {/* About WAX section */}
      <section className="w-full py-16 bg-gray-100"> {/* Keep gray-100 for background */}
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
            <h2 className="text-3xl font-bold text-bewax-green">Quelques mots sur WAX</h2>
            <div className="mt-4 text-bewax-gray">
              <div className="flex items-start mt-4">
                <div className="w-10 h-10 rounded-full bg-bewax-green flex items-center justify-center text-white text-xl mr-4">
                  <MdContactMail />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bewax-dark">Le concept</h3>
                  <p className="mt-2 text-bewax-gray">
                    Chez Wax, nous adorons la terrasse en bois et nous sommes soucieux qu’elle soit parfaitement mise en valeur durant toute la durée de sa vie.
                  </p>
                  <p className="mt-2 text-bewax-gray">
                    Fort de son expérience en aménagement, Wax a développé un concept innovant très simple et très efficace pour la remise à neuf et la protection des terrasses en bois.
                  </p>
                </div>
              </div>
              <div className="flex items-start mt-4">
                <div className="w-10 h-10 rounded-full bg-bewax-green flex items-center justify-center text-white text-xl mr-4">
                  <MdVideocam />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bewax-dark">Produits durables et équipement spécialisé</h3>
                  <p className="mt-2 text-bewax-gray">
                    Avec une large gamme de produits durable et un équipement spécialisé, nous pouvons vous offrir une remise à neuf stupéfiante de votre terrasse et une base solide pour la protection du bois.
                  </p>
                  <p className="mt-2 text-bewax-gray">
                    Nettoyer et entretenir votre terrasse n’a jamais été aussi simple… car grâce à notre expertise vous pouvez avoir la garantie de profiter sans soucis de votre terrasse au fil des années.
                  </p>
                </div>
              &</div>
            </div>
          </div>
        </div>
      </section>

      {/* New perspectives section */}
      <section className="w-full py-16"> {/* Keep white background */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
           {/* Text */}
           <div>
            <h2 className="text-3xl font-bold text-bewax-green">Nouvelles perspectives</h2>
            <div className="mt-4 text-bewax-gray">
              <div className="flex items-start mt-4">
                <div className="w-10 h-10 rounded-full bg-bewax-green flex items-center justify-center text-white text-xl mr-4">
                  <MdContactMail />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-bewax-dark">About Us</h3>
                  <p className="mt-2 text-bewax-gray">
                    Bernard Neyns a fondé il y a 21 ans son premier bureau d’architecte paysagiste. Privilégiant les matériaux durables et écologiques, il se spécialise dans la conception et la fabrication de terrasses en bois, notamment en bois de Robinier.
                  </p>
                  <p className="mt-2 text-bewax-gray">
                    C’est avec le suivis de ses réalisations qu’il se rend compte que le nettoyage et l’entretient régulier des terrasses est le meilleur moyen de valoriser durablement l’investissement de ses clients.
                  </p>
                </div>
              </div>
              <div className="w-full mt-8">
                <iframe
                  src="https://player.vimeo.com/video/194850351"
                  width="100%"
                  height="224"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <Image
              src="/pro6.jpg" // Assuming the image is in the public directory
              alt="Terrasse en bois"
              title="Terrasse en bois"
              width={800}
              height={532}
              className="object-cover"
            />
          </div>
        </div>
      </section>


      {/* Footer will go here */}
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
