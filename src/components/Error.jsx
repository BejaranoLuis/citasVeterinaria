import React, { useEffect } from "react"

export const Error = ({ msgError }) => {
    return (
        <div className="bg-red-600 text-white text-center p-2 rounded-md mb-4 uppercase">
            <p>{msgError}</p>
        </div>
    )
}

export default Error;
