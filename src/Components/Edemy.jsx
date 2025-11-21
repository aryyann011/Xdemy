import React from "react";

function Edemy({className=""}){

    return (
        <div className={`h-full w-1/2 absolute flex flex-row items-center gap-1 text-2xl ${className}`}>
            <img src="/image/logo-icon.svg" className="h-6 top-1 w-6" alt="Logo" />
            <h1 className="font-bold">Xdemy</h1>
        </div>
    )
}

export default Edemy