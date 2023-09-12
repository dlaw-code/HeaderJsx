import React from "react";
import Input from "./Input";


const Login = () => {
    return(
        <div>
            <Input 
                type="text"
                placeholder="Username"
            />
            <Input 
                type="password"
                placeholder="Password"
            />
            <button>Login</button>
        </div>
        

    );
}

export default Login