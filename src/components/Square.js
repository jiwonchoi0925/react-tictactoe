import React from "react";
import "./Square.css";

const Square=({onClick,value})=>{ /*다른곳에서도 사용 가능함* */
    return (
       
        <button className="square"onClick={()=>{onClick( ) }}>
            {value}
         </button>
        
    )
}

export default Square;