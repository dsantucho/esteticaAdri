import React from "react";
import { Link } from 'react-router-dom'; 

const BannerHeader = () => {
  const phoneNumber = '+59899262217';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const styleImg2 = {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header-2.png?alt=media")',
  };
  const styleImg1 = {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header.jpg?alt=media")',
  };
  const tituloBannerHeader = 'Descubre los tratamientos que transformarán tu piel y realzarán tu belleza natural.';
  const subTituloBannerHeader = 'Tratamientos personalizados con tecnología avanzada, diseñados para ti.';
  const ctaBannerHeader = 'Reserva tu consulta ahora';
  const disclaimerBannerHeader = '* Consulta inicial gratuita. ¡Escríbenos!';
  return (
    <div className="bg-sc-background w-screen flex-auto lg:items-center lg:flex-col lg:justify-center lg:px-32 lg:py-2 overflow-x-hidden">
      <div className="px-7 pt-7 flex flex-col content-evenly justify-center items-center lg:flex-row-reverse lg:justify-evenly lg:max-w-6xl lg:px-0 lg:pt-0">
        {/* Imagen mobile */}
        <div className="relative h-72 w-80 mx-3 lg:hidden">
          <div
            className="h-[230px] w-[250px] absolute left-0 overflow-hidden flex flex-col items-center bg-cover bg-center   lg:h-[330px] lg:w-[350px]"
            style={styleImg1}
          ></div>
          <div
            className="h-[150px] w-[165px] absolute bottom-0 right-0 overflow-hidden flex flex-col items-center bg-cover bg-center lg:h-[400px] lg:w-[300px]"
            style={styleImg2}
          ></div>
        </div>
        {/* Imagen en web */}
        <div className="lg:w-3/5 lg:h-96 lg:flex lg:items-center lg:justify-evenly hidden sm:hidden md:hidden lg:visible">

            <div
                className=" overflow-hidden flex flex-col items-center bg-cover bg-center h-[350px] w-[250px] mr-6"
                style={styleImg2}
            ></div>

            <div
                className=" overflow-hidden flex flex-col items-center bg-cover bg-center h-[230px] w-[250px]"
                style={styleImg1}
            ></div>
        </div>
        {/* Titulo, sub y cta */}
        <div className="flex flex-col items-center lg:w-2/6">
          <h2 className="banner-header-h2 py-2 text-xl font-bold leading-9 text-center align-middle text-typo-color lg:text-start">
          {tituloBannerHeader}
          </h2>
          <h3 className="pb-2 text-base antialiased font-light tracking-wide leading-7 text-center align-middle text-sc-typo-color lg:text-start lg:text-xl">
          {subTituloBannerHeader}
          </h3>
          {/* botton cta */}
          <div className="flex p-3 h-16 text-center bg-btn-background justify-around lg:mt-3">
            <button className="text-lg uppercase text-sc-typo-color">
              <Link to={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-400 duration-500">
              {ctaBannerHeader} <ion-icon name="logo-whatsapp"></ion-icon>
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* Disclaimer */}
      <div className="px-7 py-3 lg: flex">
        <text className="text-sm antialiased font-light tracking-wide leading-7 align-middle text-sc-typo-color">{disclaimerBannerHeader}</text>
      </div>
    </div>
  );
};

export default BannerHeader;
