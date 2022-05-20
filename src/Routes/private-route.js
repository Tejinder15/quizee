import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext/auth-context";

export function PrivateRoute(){
    const {authState} = useAuth();
    if(authState.token){
        return <Outlet/>;
    }else{
        return <Navigate to="/login" replace/>;
    }
};