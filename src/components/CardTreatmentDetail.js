import React, { useState }  from "react";

const CardTreatmentDetail = ({ treatmentData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (

      <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden m-2">
        <div className="p-4">
          <h2 className="text-xl font-semibold">{treatmentData.name}</h2>
          {!isExpanded && (
            <p className="mt-2">
              Contenido de muestra. Mostrar más para ver el contenido completo.
            </p>
          )}
          {isExpanded && (
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae felis eget ante laoreet luctus. Nulla ac neque quis eros
                iaculis condimentum non eget orci. Quisque hendrerit ligula id
                consequat vulputate.
              </p>
              <p>
                Phasellus euismod pharetra libero, id vulputate lacus molestie
                in. Mauris dignissim nisi in volutpat malesuada. Aenean vehicula
                facilisis elit sed fermentum.
              </p>
            </div>
          )}
        </div>
        <div className="px-4 py-2 bg-gray-100">
          <button className="font-medium" onClick={handleToggle}>
            {isExpanded ? "Mostrar menos" : "Mostrar más"}
          </button>
        </div>
      </div>

  );
};

export default CardTreatmentDetail;
