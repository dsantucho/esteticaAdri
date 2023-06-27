import React, {createContext, useState} from "react";
//PASOS
/*
1 - Crear el contexto con el hook createContext() 
2 - crear el componente provider
3 - retornar nuestro contexto con un .provider 
4 - props.children o children
*/
export const ServiceContext = createContext();

export const ServiceProvider = ({children}) => {
    const [tab, setTab] = useState();

    return(
        <ServiceContext.Provider value = {{tab, setTab}}>{children}</ServiceContext.Provider>
    )

}

export default ServiceContext