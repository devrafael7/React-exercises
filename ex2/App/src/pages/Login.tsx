//import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate();

    return (
        <>
            <Header/>
            <Button onClick={()=> navigate("/Home")} className="text-white bg-blue-300 px-3 py-1 mt-7">
                Go To Home Page
            </Button>
        </>
    )    
};

export default Login;

