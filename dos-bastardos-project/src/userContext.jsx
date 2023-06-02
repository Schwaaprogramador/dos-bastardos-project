import { createContext, useState } from "react";

export const userContext = createContext({})

export const UserContextProvider = ({children})=>{

    const [userInfo, setUserInfo] = useState(null);

    return (

        <userContext.Provider value ={{userInfo, setUserInfo}}>

        {children}

        </userContext.Provider>
    )
}