import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BannerContact from "../components/BannerContact";

const Contact = () => {
  const phoneNumber = "+59899262217";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <div className=" bg-sc-background flex flex-row justify-center items-center mt-4">
      <div className="lg:w-full">
        <BannerContact />
      </div>
    </div>
  );
};

export default Contact;
