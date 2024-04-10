// import React from "react";
import { BsArrow90DegRight } from "react-icons/bs";

const Button = ({name = "Get Started", link}) =>{
    return(
        <div className="w-40 h-10 px-3 py-2 bg-zinc-100 rounded-full cursor-pointer hover:bg-green-300 flex justify-between font-serif">
            <a href={link}><span className="font-medium text-sm text-black hover:text-white px-1">{name}</span></a>
            <BsArrow90DegRight style ={{color: "black",paddingTop:"5px"}}/>
        </div>
    )
}

export default Button;
























