import React, { useState, useContext } from "react";
import CardTreatmentDetail from "../components/CardTreatmentDetail";

//context
import ServiceContext from "../contexts/ServiceContext";

const Services = () => {
  const servicesDetail = [
    {
      type: 0,
      name: "HIFU - Facial & Corporal",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-1.jpg?alt=media")',
      },
      time: '1hr',
      descriptionResume: 'La HIFU es un tratamiento no invasivo que utiliza ultrasonido focalizado de alta intensidad para rejuvenecer la piel y esculpir el cuerpo. Ideal para quienes buscan tensar la piel del rostro, reducir arrugas o eliminar grasa localizada en zonas como abdomen, brazos y muslos. Todo sin cirugía ni tiempo de recuperación.',
      descriptionFull: 'El HIFU es un tratamiento no invasivo que utiliza ultrasonido focalizado de alta intensidad para rejuvenecer la piel y esculpir el cuerpo. Ideal para quienes buscan tensar la piel del rostro, reducir arrugas o eliminar grasa localizada en zonas como abdomen, brazos y muslos. Todo sin cirugía ni tiempo de recuperación.',
      advantage: [
        'Rejuvenecimiento facial con efecto lifting.',
        'Reducción de grasa localizada y tonificación corporal.',
        'Estimula la producción natural de colágeno.',
        'Procedimiento rápido, seguro y sin dolor'
      ]
    },
    {
      type: 0,
      name: "EMSCULPT Slim Beauty",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-2.png?alt=media")',
      },
      time: '30 minutos por area',
      descriptionResume: 'EMSCULPT combina tecnología de campo electromagnético de alta intensidad para quemar grasa y desarrollar músculo simultáneamente. Es perfecto para quienes buscan tonificar su abdomen, glúteos o brazos sin esfuerzo físico intenso.',
      descriptionFull: 'EMSCULPT combina tecnología de campo electromagnético de alta intensidad para quemar grasa y desarrollar músculo simultáneamente. Es perfecto para quienes buscan tonificar su abdomen, glúteos o brazos sin esfuerzo físico intenso.',
      advantage: [
        'Tonificación muscular visible.',
        'Reducción de grasa en áreas específicas.',
        'Ideal para complementar un estilo de vida saludable.',
        'Sin dolor ni tiempo de recuperació'
      ]
    },
    {
      type: 0,
      name: "ELECTRODOS",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-3.png?alt=media")',
      },
      time: '40min por area',
      descriptionResume: 'Los electrodos estimulan los músculos a través de impulsos eléctricos, ayudando a tonificar, reafirmar y reducir la grasa acumulada en zonas específicas. Es un tratamiento no invasivo, ideal para complementar rutinas de ejercicio y mejorar la apariencia general del cuerpo.',
      descriptionFull: 'Los electrodos estimulan los músculos a través de impulsos eléctricos, ayudando a tonificar, reafirmar y reducir la grasa acumulada en zonas específicas. Es un tratamiento no invasivo, ideal para complementar rutinas de ejercicio y mejorar la apariencia general del cuerpo.',
      advantage: [
        'Tonificación muscular visible en sesiones cortas.',
        'Reducción de grasa localizada en abdomen, muslos y glúteos.',
        'Estimulación del drenaje linfático para desintoxicar el cuerpo.',
        'Procedimiento indoloro y relajante.'
      ]
    },
    {
      type: 0,
      name: "Cavitador",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '30-45 minutos por áreapr',
      descriptionResume: 'El cavitador utiliza ultrasonido de baja frecuencia para romper células grasas de forma segura y no invasiva. Este tratamiento es ideal para reducir medidas y mejorar la firmeza de la piel en zonas problemáticas como abdomen, brazos o muslos.',
      descriptionFull: 'El cavitador utiliza ultrasonido de baja frecuencia para romper células grasas de forma segura y no invasiva. Este tratamiento es ideal para reducir medidas y mejorar la firmeza de la piel en zonas problemáticas como abdomen, brazos o muslos.',
      advantage: [
        'Eliminación de grasa localizada sin cirugía.',
        'Mejora de la textura y firmeza de la piel.',
        'Complemento perfecto para un plan de pérdida de peso.',
        'Sesiones rápidas y resultados visibles en pocas semanas.'
      ]
    },
    {
      type: 0,
      name: "PRESOTERAPIA",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '30-45 minutos',
      descriptionResume: 'Un tratamiento que utiliza presión de aire controlada para estimular el drenaje linfático, mejorando la circulación y reduciendo la retención de líquidos. Perfecto para aliviar piernas cansadas y combatir la celulitis de manera relajante y eficaz.',
      descriptionFull: 'Un tratamiento que utiliza presión de aire controlada para estimular el drenaje linfático, mejorando la circulación y reduciendo la retención de líquidos. Perfecto para aliviar piernas cansadas y combatir la celulitis de manera relajante y eficaz.',
      advantage: [
        'Estimula la eliminación de toxinas.',
        'Reduce la hinchazón y mejora la circulación.',
        'Alivio inmediato para piernas pesadas.',
        'Procedimiento cómodo y no invasivo.'
      ]
    },
    {
      type: 0,
      name: "DRENAJE LINFATICO",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '30 minutos',
      descriptionResume: 'Técnica manual que estimula el sistema linfático para eliminar toxinas, reducir inflamación y mejorar la circulación. Ideal para quienes buscan desintoxicar su cuerpo o complementar tratamientos estéticos.',
      descriptionFull: 'Técnica manual que estimula el sistema linfático para eliminar toxinas, reducir inflamación y mejorar la circulación. Ideal para quienes buscan desintoxicar su cuerpo o complementar tratamientos estéticos.',
      advantage: [
        'Reduce la retención de líquidos.',
        'Mejora la circulación y desinflama.',
        'Relajante y libre de molestias.',
        'Favorece la recuperación postquirúrgica.'
      ]
    },
    {
      type: 0,
      name: "EXFOLIACION CORPORAL",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '30 minutos',
      descriptionResume: 'Un tratamiento que elimina células muertas de la piel para dejarla suave, renovada y luminosa. Utilizamos productos de alta calidad que hidratan y nutren profundamente.',
      descriptionFull: 'Un tratamiento que elimina células muertas de la piel para dejarla suave, renovada y luminosa. Utilizamos productos de alta calidad que hidratan y nutren profundamente.',
      advantage: [
        'Piel más suave y radiante al instante.',
        'Mejora la absorción de productos hidratantes.',
        'Estimula la regeneración celular.',
        'Ideal como preparación para otros tratamientos.'
      ]
    },

    {
      type: 1,
      name: "DEPILACION DEFINITIVA LASER",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: 'Variable según la zona.',
      descriptionResume: 'Elimina el vello de forma permanente con nuestra tecnología láser de última generación, diseñada para hombres y mujeres. Es un método seguro y eficaz para cualquier zona del cuerpo.',
      descriptionFull: 'Elimina el vello de forma permanente con nuestra tecnología láser de última generación, diseñada para hombres y mujeres. Es un método seguro y eficaz para cualquier zona del cuerpo.',
      advantage: [
        'Reducción permanente del vello.',
        'Seguro para todo tipo de pieles.',
        'Sesiones rápidas y cómodas.',
        'Ahorra tiempo y esfuerzo a largo plazo.'
      ]
    },
    {
      type: 1,
      name: "Depilacion con cera",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: 'Variable según la zona.',
      descriptionResume: 'Un método clásico y eficaz para eliminar el vello desde la raíz, dejando la piel suave y libre de vello durante semanas. Utilizamos cera de alta calidad para minimizar molestias.',
      descriptionFull: 'Un método clásico y eficaz para eliminar el vello desde la raíz, dejando la piel suave y libre de vello durante semanas. Utilizamos cera de alta calidad para minimizar molestias.',
      advantage: [
        'Resultados inmediatos y duraderos.',
        'Piel suave al tacto.',
        'Rápido y adaptable a cualquier zona.',
        'Ideal para pieles sensibles.'
      ]
    },

    {
      type: 2,
      name: "Masajes Terapeuticos",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '1hr',
      descriptionResume: 'Técnica manual diseñada para aliviar dolores musculares, reducir estrés y mejorar la movilidad. Personalizado según tus necesidades específicas.',
      descriptionFull: 'Técnica manual diseñada para aliviar dolores musculares, reducir estrés y mejorar la movilidad. Personalizado según tus necesidades específicas.',
      advantage: [
        'Alivio inmediato de tensiones musculares.',
        'Reduce el estrés y mejora la relajación.',
        'Estimula la circulación y la flexibilidad.',
        'Ideal para personas con dolores crónicos.'
      ]
    },
    {
      type: 2,
      name: "MASAJES DEPORTIVOS",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '45-60 minutos',
      descriptionResume: 'Un masaje específico para deportistas que mejora el rendimiento físico, acelera la recuperación y previene lesiones. Perfecto antes o después de una actividad física intensa.',
      descriptionFull: 'Un masaje específico para deportistas que mejora el rendimiento físico, acelera la recuperación y previene lesiones. Perfecto antes o después de una actividad física intensa.',
      advantage: [
        'Reduce contracturas y tensiones musculares.',
        'Acelera la recuperación postentrenamiento.',
        'Mejora la flexibilidad y el rango de movimiento.',
        'Previene lesiones recurrentes.'
      ]
    },
    {
      type: 2,
      name: "MASAJES REDUCTORES",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '45 minutos',
      descriptionResume: 'Un masaje enfocado en reducir medidas y modelar la silueta, combinando técnicas manuales con productos especializados para potenciar los resultados.',
      descriptionFull: 'Un masaje enfocado en reducir medidas y modelar la silueta, combinando técnicas manuales con productos especializados para potenciar los resultados.',
      advantage: [
        'Reduce medidas en zonas específicas.',
        'Mejora la circulación y combate la celulitis.',
        'Estimula el metabolismo y la eliminación de toxinas.',
        'Complemento perfecto para un plan de reducción de peso.'
      ]
    },
    {
      type: 2,
      name: "REFLEXOLOGIA",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '40 minutos',
      descriptionResume: 'Una técnica basada en la estimulación de puntos reflejos en los pies que corresponden a distintas partes del cuerpo. Mejora el equilibrio físico y emocional de manera relajante.',
      descriptionFull: 'Una técnica basada en la estimulación de puntos reflejos en los pies que corresponden a distintas partes del cuerpo. Mejora el equilibrio físico y emocional de manera relajante.',
      advantage: [
        'Alivia tensiones y mejora el bienestar general.',
        'Estimula la función de órganos internos.',
        'Reduce el estrés y equilibra la energía.',
        'Ideal para quienes buscan un enfoque holístico.'
      ]
    },
    {
      type: 2,
      name: "PIEDRAS CALIENTES",
      img: {
        backgroundImage:
          'url("https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/img-services-card-4.png?alt=media")',
      },
      time: '1hr',
      descriptionResume: 'Una experiencia relajante que combina masaje terapéutico con piedras calientes, ayudando a liberar tensiones, mejorar la circulación y equilibrar la energía del cuerpo.',
      descriptionFull: 'Una experiencia relajante que combina masaje terapéutico con piedras calientes, ayudando a liberar tensiones, mejorar la circulación y equilibrar la energía del cuerpo.',
      advantage: [
        'Relaja músculos y alivia tensiones.',
        'Mejora la circulación y reduce el estrés.',
        'Promueve un equilibrio energético profundo.',
        'Ideal para quienes buscan relajación total.'
      ]
    },
  ];
  const { tab } = useContext(ServiceContext); //cuando viene de home -> bannerServices
  const [selectedTab, setSelectedTab] = useState(tab || 0); // Estado para realizar un seguimiento del tab seleccionado

  const handleTabClick = (index) => {
    if (index >= 0 && index <= 2) {
      setSelectedTab(index);
    }
  };


  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <img
          className="sm: hidden md:block lg:block p-5 w-4/5 "
          src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fsevice-banner-msn.png?alt=media"
          alt="banner"
        />
        <img
          className="sm: block md:hidden lg:hidden p-5  w-4/5 mt-4"
          src="https://firebasestorage.googleapis.com/v0/b/estetica-adriana-aguilar.appspot.com/o/services%2Fbanner-services-msn-mobile.png?alt=media"
          alt="banner"
        />
      </div>

      <div className="flex flex-col bg-sc-background items-center">
        <nav className="flex w-11/12 text-xl flex-row items-center  text-typo-color justify-around p-4 lg:text-2xl">
          <ion-icon
            name="chevron-back-circle-outline"
            onClick={() => handleTabClick(selectedTab - 1)}
            className={`cursor-pointer ${selectedTab <= 0 ? "opacity-50" : ""}`}
            style={{ color: selectedTab <= 0 ? "#999999" : "" }}
            size="large"
          ></ion-icon>
          <p
            className={`cursor-pointer ml-4 ${selectedTab === 0 ? "border-b-2" : "hidden md:block"
              }`}
            onClick={() => handleTabClick(0)}
          >
            Tratamientos Corporales
          </p>
          <p
            className={`cursor-pointer ml-4 ${selectedTab === 1 ? "border-b-2" : "hidden md:block"
              }`}
            onClick={() => handleTabClick(1)}
          >
            Depilacion
          </p>
          <p
            className={`cursor-pointer ml-4 ${selectedTab === 2 ? "border-b-2" : "hidden md:block"
              }`}
            onClick={() => handleTabClick(2)}
          >
            Relajacion
          </p>
          <ion-icon
            name="chevron-forward-circle-outline"
            onClick={() => handleTabClick(selectedTab + 1)}
            className={`cursor-pointer ml-4 ${selectedTab >= 2 ? "opacity-50" : ""
              }`}
            style={{ color: selectedTab >= 2 ? "#999999" : "" }}
            disabled={selectedTab >= 2}
            size="large"
          ></ion-icon>
        </nav>

        <div className="flex flex-col items-center text-base text-typo-color p-4 w-11/12 lg:text-lg ">
          {selectedTab === 0 &&
            servicesDetail
              .filter((e) => e.type === 0)
              .map((e) => <CardTreatmentDetail treatmentData={e} key={e.name} />)}
          {selectedTab === 1 &&
            servicesDetail
              .filter((e) => e.type === 1)
              .map((e) => <CardTreatmentDetail treatmentData={e} key={e.name} />)}
          {selectedTab === 2 &&
            servicesDetail
              .filter((e) => e.type === 2)
              .map((e) => <CardTreatmentDetail treatmentData={e} key={e.name} />)}
        </div>
      </div>
    </div>
  );
};

export default Services;
