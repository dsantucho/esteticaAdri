import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const phoneNumber = "+59899262217";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  const portrait = {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fportrait-about.jpg?alt=media")',
  };

  return (
    // flex flex-row justify-center
    <div className=" m-auto lg:m-0 flex flex-col">
      <div className="">
        {/* Estan las imagenes de inicio */}
        <div className="flex flex-row justify-center">
          {/* mobile */}
          <img
            className="sm: block md:hidden lg:hidden xl:hidden p-5  w-11/12 mt-4"
            src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fabout-sm.png?alt=media"
            alt="banner"
          />
          {/* tablet  */}
          <img
            className="sm: hidden md:block lg:hidden xl:hidden p-5  w-11/12 mt-4"
            src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fabout-md.png?alt=media"
            alt="banner"
          />
          {/* web */}
          <img
            className="sm: hidden md:hidden lg:block xl:hidden p-5  w-11/12 "
            src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fabout-lg.png?alt=media"
            alt="banner"
          />
          {/* web XL */}
          <img
            className="sm: hidden md:hidden lg:hidden xl:block p-5 "
            src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fabout-xl.png?alt=media"
            alt="banner"
          />
        </div>

        {/* Texto de la clinica + video */}
        <div className="bg-sc-background w-full flex flex-row justify-center">
          <div className="max-w-5xl flex flex-col p-3 md:flex-row md:justify-around md:items-center">
            {/* texto */}
            <div className="flex flex-col md:w-1/2">
              <h2 className="banner-services-h2 py-5 text-start text-2xl leading-8 tracking-wider text-typo-color lg:text-3xl">
                La Clinica
              </h2>
              <p className="font-extralight leading-6 tracking-wider text-base lg:text-lg">
                Texto Texto Texto Texto Texto TextoTextoTextoTexto Texto
                TextoTextoTexto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto
                Texto TextoTexto Texto Texto Texto Texto Texto Texto{" "}
              </p>
              <div className="flex text-center bg-btn-background justify-around mt-3">
                <button className="text-xl uppercase text-sc-typo-color p-2">
                  <Link
                    to={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 hover:text-gray-400 duration-500"
                  >
                    Conoce nuestra clinica{" "}
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </Link>
                </button>
              </div>
            </div>
            {/* video */}
            <div className="max-w-5xl flex md:w-1/2 py-4  md:py-0 md:px-2 md:items-center md:h-[600px] md:justify-around">
              <video
                src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/about%2Fabout-video-text.mp4?alt=media"
                controls
                className="w-full h-[450px] md:h-[550px]"
              />
            </div>
          </div>
        </div>

        {/* Texto sobre Adriana Aguilar */}
        <div className="w-full flex flex-row justify-center">
          <div className="max-w-5xl flex flex-col p-3 md:flex-row-reverse md:justify-around">
            {/* texto */}
            <div className=" flex flex-col md:w-1/2">
              <h2 className="banner-services-h2 py-5 text-start text-2xl leading-8 tracking-wider text-typo-color">
                {" "}
                Adriana Aguilar
              </h2>
              <p className="font-extralight leading-6 tracking-wider text-base">
                {" "}
                Bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio
                bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio{" "}
              </p>
            </div>
            {/* imagen portrait adriana */}
            <div
              className=" m-3 flex min-h-[450px] max-h-[874px]  overflow-hidden items-center bg-contain bg-center bg-no-repeat md:w-1/2"
              style={portrait}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
