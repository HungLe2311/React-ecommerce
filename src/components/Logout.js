import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";

function Logout() {
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    let {setIsLogged} = useContext(AppContext);
    setIsLogged(false);

    
    return (
        <Navigate to="/login" replace={true}/>
    )
}

export default Logout;