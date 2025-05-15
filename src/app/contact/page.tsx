import Header from "@/components/Header";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Import other components as needed

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />

      {/* Hero Section */}
      <section className="w-full h-[400px] flex items-center justify-center relative overflow-hidden">
        <Image
          src="/bandeaucontact-2.jpg" // Assuming this image is in the public directory
          alt="Contact Us"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold text-center text-white">Contact</h1>
      </section>

      {/* Contact Information and Form Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Contact Information */}
          <Card className="bg-bewax-dark text-white p-8 rounded-lg"> {/* Apply background and text color to Card */}
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mb-4">Wax</CardTitle> {/* Keep text-white for title */}
            </CardHeader>
            <CardContent className="space-y-4"> {/* Keep space-y-4 for content spacing */}
              <div>
                <p>Rue du Manypré , 109A</p>
                <p>1325 Corroy-Le-Grand</p>
                <p>Belgique</p>
              </div>
              <div className="flex items-center">
                {/* Icon placeholder */}
                <span className="text-xl mr-2">📧</span>
                <p><a href="mailto:bernardneyns@gmail.com" className="hover:underline text-white">bernardneyns@gmail.com</a></p> {/* Ensure link text is white */}
              </div>
              <div className="flex items-center">
                 {/* Icon placeholder */}
                <span className="text-xl mr-2">📞</span>
                <p><a href="tel:+32472321597" className="hover:underline text-white">+32 (0)472.32.15.97</a></p> {/* Ensure link text is white */}
              </div>
               <div className="flex items-center">
                 {/* Icon placeholder */}
                <span className="text-xl mr-2">🌐</span>
                <p><a href="http://www.bewax.be" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">www.bewax.be</a></p> {/* Ensure link text is white */}
              </div>
            </CardContent>
          </Card>

          {/* Contact Form and Additional Info */}
          <div>
            <h2 className="text-2xl font-semibold text-bewax-dark mb-4">Envoyez-nous des photos et les dimensions de votre terrasse et recevez un devis dans les 24 heures.</h2>
            <h2 className="text-xl font-semibold text-bewax-dark mb-4">Bernard Neyns 0472 32 15 97</h2>
            {/* Contact Form Placeholder */}
            <Card className="bg-gray-100 p-8 rounded-lg"> {/* Apply background and padding to Card */}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-bewax-dark mb-4">Contact Form</CardTitle> {/* Keep text-bewax-dark for title */}
              </CardHeader>
              <CardContent className="text-bewax-gray"> {/* Keep text-bewax-gray for content */}
                <p>Placeholder for the contact form. Form functionality requires backend implementation.</p>
                {/* You would integrate a contact form library or build your own here */}
              </CardContent>
            </Card>

             {/* Image */}
            <div className="w-full mt-8">
              <Image
                src="/bernardneyns.jpg" // Assuming this image is in the public directory
                alt="Bernard Neyns"
                title="Bernard Neyns"
                width={800}
                height={728}
                layout="responsive"
              />
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
