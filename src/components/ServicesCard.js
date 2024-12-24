import React, {useContext} from "react";
import ServiceContext from "../contexts/ServiceContext";
import { Link } from "react-router-dom";

const ServicesCard = ({ data }) => {
  const { setTab } = useContext(ServiceContext);

  const handleClick = () => {
    setTab(data.type);
    console.log('Valor establecido en TAB:', data.type);
  };
  return (
    <div
      className="cardServicesCard h-[350px] w-[325px] border-2 flex flex-col  justify-end overflow-hidden items-center bg-cover bg-center"
      style={data.img}
    >
      <Link
        to="/services"
        className="serviceCardTiteleBox w-full flex p-6 justify-center align-middle text-center lg:h-20 lg:p-2"
        onClick={handleClick}
      >
        <div className="lg:flex lg:items-center">
          <h2 className="text-center text-lg font-light leading-6 text-white lg:text-lg lg:align-middle">
            {data.name}{" "}
          </h2>
        </div>
        <div className="text-center text-xl font-light leading-6 text-white mt-1 pl-1 lg:flex lg:items-center">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </Link>
    </div>
  );
};

export default ServicesCard;
