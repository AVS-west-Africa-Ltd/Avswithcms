import React from "react";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Image from "next/image";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-black flex flex-col w-full h-full">
      <div className=" md:absolute top-0 h-20 p-4 pl-6 md:pl-20 w-40 md:w-60">
        <Logo />
      </div>
      <div className="text-white px-6 md:px-20 py-10 md:py-40">
        <h1 className="font-khand">Contact Us</h1>
        <h2 className="md:text-5xl text-2xl w-2/3">
          Share with your project brief and ideas. Let’s make it happen.
        </h2>
      </div>
      <div className="bg-gradient-to-l from-stone-600 to-stone-700 w-full md:pl-20">
        <Form />
      </div>
      <Footer />
    </div>
  );
}
