import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Usercontext from "../contexts/Usercontext";


export function useSignUp(){
    const navigate = useNavigate()

    return (body) => {

    axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, body)
  .then( res => navigate("/"))
  .catch( error => console.log(error.data) )
    }
}

export function useSignIn(){
    const navigate = useNavigate();
    const { setToken, setprofileName} = useContext(Usercontext)

    return (body) => {

    axios
      .post(`${import.meta.env.VITE_API_URL}/sign-in`, body)
      .then((res) => {
        setToken(res.data.token)
        setprofileName(res.data.profileName)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("profileName", res.data.profileName )
        console.log(res.data)
        navigate("/home")
      })
      .catch((error) => console.log(error.data));
    }
    }