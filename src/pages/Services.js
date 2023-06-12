import React, { useState } from "react";

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(0); // Estado para realizar un seguimiento del tab seleccionado

  const handleTabClick = (index) => {
    if (index >= 0 && index <= 2) {
      setSelectedTab(index);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <img
          className="sm: hidden md:block lg:block p-5  w-11/12 "
          src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fsevice-banner-msn.png?alt=media"
          alt="banner"
        />
        <img
          className="sm: block md:hidden lg:hidden p-5  w-11/12 mt-4"
          src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fbanner-services-msn-mobile.png?alt=media"
          alt="banner"
        />
      </div>

      <div className="flex flex-col bg-sc-background items-center">
        <nav className="flex w-11/12 text-xl flex-row items-center  text-typo-color justify-around p-4 lg:text-4xl">
          <ion-icon
            name="chevron-back-circle-outline"
            onClick={() => handleTabClick(selectedTab - 1)}
            className={`cursor-pointer ${selectedTab <= 0 ? "opacity-50" : ""}`}
            style={{ color: selectedTab <= 0 ? "#999999" : "" }}
            size="large"
          ></ion-icon>
          <p
            className={`cursor-pointer ml-4 ${
              selectedTab === 0 ? "border-b-2" : "hidden md:block"
            }`}
            onClick={() => handleTabClick(0)}
          >
            Tratamientos Corporales
          </p>
          <p
            className={`cursor-pointer ml-4 ${
              selectedTab === 1 ? "border-b-2" : "hidden md:block"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Depilacion
          </p>
          <p
            className={`cursor-pointer ml-4 ${
              selectedTab === 2 ? "border-b-2" : "hidden md:block"
            }`}
            onClick={() => handleTabClick(2)}
          >
            Relajacion
          </p>
          <ion-icon
            name="chevron-forward-circle-outline"
            onClick={() => handleTabClick(selectedTab + 1)}
            className={`cursor-pointer ml-4 ${
              selectedTab >= 2 ? "opacity-50" : ""
            }`}
            style={{ color: selectedTab >= 2 ? "#999999" : "" }}
            disabled={selectedTab >= 2}
            size="large"
          ></ion-icon>
        </nav>

        <div className="flex flex-col tex-xl text-typo-color p-4 w-11/12 lg:text-4xl ">
        {selectedTab === 0 && (
          <div>
            <div>
              <h2>Tratamientos 1</h2>
              <p>Información sobre tratamientos</p>
            </div>
            <div>
              <h2>Tratamientos 2</h2>
              <p>Información sobre tratamientos</p>
            </div>
          </div>
          
        )}
        {selectedTab === 1 && (
          <div>
            <h2>Depilación</h2>
            <p>Información sobre depilación</p>
          </div>
        )}
        {selectedTab === 2 && (
          <div>
            <h2>Relajación</h2>
            <p>Información sobre relajación</p>
          </div>
        )}
      </div>

      </div>

     
    </div>
  );
};

export default Services;
