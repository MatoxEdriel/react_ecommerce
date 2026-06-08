//practice 


import { createContext } from 'react';


//con esto puedo guardarlo en un contexto global y acceder a el desde cualquier componente sin necesidad de pasar props por cada nivel de componentes, esto es especialmente util para datos que son necesarios en muchos lugares de la aplicacion como el usuario autenticado, configuraciones globales, etc.
const DataContext = createContext({});

//necesitamos un proveedor para dar este contexto 


type DataContextProviderProps = {
    children: React.ReactNode
}

/*
type → para props de componentes y tipos simples
interface → para objetos que pueden extenderse o para definir contratos más complejos

*/



function DataContexProvider({ children }: DataContextProviderProps) {

    //Aqui se pone la data que se quiere compartir, puede ser un estado, una funcion, etc.

    const contextData = 100;


    const value = contextData;

    //este provider admite componentes desde el interior 
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}



