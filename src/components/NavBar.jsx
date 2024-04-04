// import React from "react";
import Button from "./Button";
import { FaUserSecret } from "react-icons/fa6";


const NavBar = () =>{
    return(
        <div className="max-w-screen-lg mx-auto py-4 text-white flex gap-2 items-center justify-between border-b-[1px] border-zinc-700 font-serif">
            <div className="nleft flex gap-8 text-xs ml-12 items-center justify-between">
                <FaUserSecret style={{
                            color: "#ffffff",
                            fontSize: "30px",
                            }} />
                {   
                    ['Home', 'Elegance', 'About', '', 'Contact'].map((item, index)=>(
                        <a key={item} href="#" className="flex p-2">
                            {index == 1 && (<span style={{boxShadow: "0 0 0.75 #00FF19"}} className="inline-block bg-green-400 w-1 h-1 "></span>) }
                            {item}
                            {item.length === 0 && (<span className="w-[1px] h-9 bg-zinc-700">
                                </span>)}
                            
                        </a>
                        
                    ))
                    
                }
            </div>

            <Button/>
        </div>
    )
}

export default NavBar;