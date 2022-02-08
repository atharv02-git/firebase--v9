import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if(!context){
        throw Error("useAuthContext should be used inside an AuthContextProvider and not outside its scope")
    }

    return context
}