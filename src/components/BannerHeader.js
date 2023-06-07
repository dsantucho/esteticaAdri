import React from "react";
//import Img1 from 'https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header.jpg?alt=media';
//import Img2 from 'https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header-2.png?alt=media&token=d49518e5-4f5e-4746-9c98-bda8d6ba47d6';

const BannerHeader = () => {
  const styleImg2 = {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header-2.png?alt=media")',
  };
  const styleImg1 = {
    backgroundImage:
      'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-banner-header.jpg?alt=media")',
  };

  return (
    <div className="bg-sc-background flex-auto min-w-full lg:h-[500px] lg:items-center lg:flex">
      <div className="p-9 flex flex-col content-evenly justify-center items-center lg:flex-row-reverse lg:justify-evenly">
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
        <div className="lg:w-3/5 lg:h-96 lg:flex lg:items-center lg:justify-evenly hidden sm:hidden md:hidden lg:visible">

            <div
                className=" overflow-hidden flex flex-col items-center bg-cover bg-center h-[400px] w-[290px] mr-6"
                style={styleImg2}
            ></div>

            <div
                className=" overflow-hidden flex flex-col items-center bg-cover bg-center h-[230px] w-[250px]"
                style={styleImg1}
            ></div>
        </div>
        <div className="flex flex-col items-center lg:w-2/6">
          <h2 className="banner-header-h2 py-3 text-3xl font-bold leading-9 text-center align-middle text-typo-color lg:text-start">
            Tenemos nuevos tratamientos para sacar lo mejor de ti!
          </h2>
          <h3 className="py-2 text-xl antialiased font-light tracking-wide leading-7 text-center align-middle text-sc-typo-color lg:text-start">
            Encuentra la promoción perfecta para ti, contactanos y conoce como
            sacar tu mejor version
          </h3>
          <div className="flex w-64 h-16 text-center bg-btn-background justify-around lg:mt-3">
            <button className="text-2xl uppercase text-sc-typo-color">
              Contactanos <ion-icon name="logo-whatsapp"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHeader;
