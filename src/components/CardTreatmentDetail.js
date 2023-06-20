import React, { useState } from "react";

const CardTreatmentDetail = ({ treatmentData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col max-w-md bg-white rounded-md shadow-md overflow-hidden m-2 lg:max-w-none ">
      <div className="p-4 min-w-[300px] min-h-[404px]">
        {/* div imagen */}
        <div
          className="rounded-md overflow-hidden flex flex-col items-center bg-cover bg-center h-[200px] "
          style={treatmentData.img}
        ></div>
        {/* div de info */}
        <div>
          <div className="flex flex-row my-4">
            <span className="mr-2 bg-typo-color p-2 rounded-lg text-white">
              Hombre
            </span>
            <span className="bg-tag-mujer p-2 rounded-lg text-black">
              Mujer
            </span>
          </div>

          <h2 className="text-xl font-semibold">{treatmentData.name}</h2>

          {!isExpanded && (
            <div>
              <div className="mt-2 block lg:hidden">
                <p className="">{treatmentData.descriptionResume}</p>
              </div>

              <div className="mt-2 hidden lg:block">
                <p>{treatmentData.descriptionFull}</p>
                <p>
                  <strong>Beneficios: </strong> {treatmentData.advantage}
                </p>
              </div>
              <p>
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
