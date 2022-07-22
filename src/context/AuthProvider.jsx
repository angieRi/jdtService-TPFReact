import React,{useState} from "react";
import AuthContext from "./AuthContext";
import {useNavigate} from "react-router-dom";


function AuthProvider(props){
    const [isLogin,setIslogin] = useState(localStorage.getItem("isLogin")|| false)
    const navigate = useNavigate()

    const loginUser =(user) => {
        setIslogin(true)

        localStorage.setItem("isLogin",true)
    }
    const logoutUser = () =>{
        setIslogin(false)
        localStorage.removeItem("isLogin")
        navigate('/')

    }
    return(
        <AuthContext.Provider
            value = {{
                isLogin,
                loginUser,
                logoutUser,

            }}
            >
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;