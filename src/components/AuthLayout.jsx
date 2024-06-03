import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function AuthLayout({authentication = true, children}) {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        // if(authStatus){
        //     navigate("/");
        // }else if(!authStatus){
        //     navigate("/login");
        // }

        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authentication, navigate, authStatus]);

    return loader ? <Loader /> : <>{children}</>;
}

export default AuthLayout;
