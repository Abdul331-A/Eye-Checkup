import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AppContext = createContext()


export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isseller, setIsSeller] = useState(null);


    const value={user,navigate,setUser,isseller,setIsSeller}

    
    return <AppContext.Provider>
        {children}
    </AppContext.Provider>



}

export const useAppContext=()=>{
    return useContext(AppContext)
}
