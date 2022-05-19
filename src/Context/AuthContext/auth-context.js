import {createContext,useContext,useReducer,useEffect} from "react";
import {authReducer} from "../../Reducer/authReducer";

const defaultValue = {user:JSON.parse(localStorage.getItem('user')) || null,token:localStorage.getItem('token') || null};

const AuthContext = createContext(defaultValue);

const AuthProvider = ({children}) => {
    const [authState,authDispatch] = useReducer(authReducer,defaultValue);
    
    useEffect(()=>{
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        authDispatch({type:"CHECKUSER",payload:{token,user}});
    },[]);

    return(
        <AuthContext.Provider value={{authState,authDispatch}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export {AuthProvider,useAuth};