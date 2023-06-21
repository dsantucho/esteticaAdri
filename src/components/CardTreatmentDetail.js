import React, { useState } from "react";

const CardTreatmentDetail = ({ treatmentData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col max-w-md bg-white rounded-md shadow-md overflow-hidden m-2 lg:max-w-none ">
      <div className="p-4 min-w-[300px] min-h-[404px] flex flex-col lg:flex-row lg:min-h-0">
        {/* div imagen */}
        <div
          className="rounded-md overflow-hidden flex flex-col items-center bg-cover bg-center h-[200px] lg:w-[100%] lg:h-auto lg:mr-4 "
          style={treatmentData.img}
        ></div>
        {/* div de info */}
        <div className="lg:flex lg:flex-col ">
          {/* tags H/M */}
          <div className="flex flex-row my-4 lg:mb-4 lg:mt-0">
            <span className="mr-2 bg-typo-color p-2 rounded-lg text-white text-base text-center align-middle">
              Hombre
            </span>
            <span className="bg-tag-mujer p-2 rounded-lg text-black text-base text-center align-middle">
              Mujer
            </span>
          </div>

          <h2 className="text-xl font-semibold">{treatmentData.name}</h2>

          {!isExpanded && (
            <div>
              <div className="mt-2 block lg:hidden">
                <p className="">{treatmentData.descriptionResume}</p>
              </div>
              {/* info > 1024 lg */}
              <div className=" hidden lg:mt-2 lg:flex lg:flex-row ">
                <div className=" mr-2">
                  <p>{treatmentData.descriptionFull}</p>
                </div>
                <div className="">
                  <p>
                    <strong>Beneficios: </strong> {treatmentData.advantage}
                  </p>
                </div>
              </div>
              <p className="mt-3">
                <strong>Tiempo Estimado: </strong>
                {treatmentData.time}
              </p>
            </div>
          )}
          {isExpanded && (
            <div className="">
              <p>{treatmentData.descriptionFull}</p>
              <p>
                <strong>Beneficios: </strong> {treatmentData.advantage}
              </p>
              <p>
                <strong>Tiempo Estimado: </strong>
                {treatmentData.time}
              </p>
            </div>
          )}
        </div>
      </div>
      {/* div de boton read more */}
      <div className="px-4 py-2 bg-gray-100 text-end lg:hidden">
        <button className="font-medium" onClick={handleToggle}>
          {isExpanded ? "Mostrar menos" : "Mostrar más"}
        </button>
      </div>
    </div>
  );
};

export default CardTreatmentDetail;
