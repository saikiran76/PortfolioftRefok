import { useState } from "react";
import Card from "./card";
import { motion } from "framer-motion";
import myVideo from "../assets/N.mp4"
import ReactPlayer from "react-player";

const Cards = () =>{
    const [pos, setPos] = useState(6);
    const mover = (val) =>{
        setPos(val*13);
    }


    const cards = [{
        name:"Netflix-GPT",
        description:"Netflix GPT is a cutting-edge project that combines the power of Netflix-style movie browsing with the intelligence of OpenAI's GPT technology. With a sleek design and seamless user experience, this project aims to revolutionize how users discover and interact with movie content.",
        link:"https://netgpt-b774f.web.app"
    }, {
        name:"MyTube",
        description:"Youtube built from scratch from its native styling to its functionality. Includes Sections like Header, sidebar, Category list, Home, Video page, comment sectio. The data is not hard-coded, the data from Youtube API has been used for nativity. It is built using my favourite frontend javascript framework React and Redux is also used for advanced state (data) management.",
        link:"https://my-tube-amber.vercel.app/"
    }, {
        name: "FoodOnline",
        description: "Order your food online and your needs on your way at your doorstep. A Frontend application like Swiggy built with love using React.",
        link: "https://github.com/saikiran76/FoodOnline"
    }, {
        name: "Alike Airbnb",
        description: "an exceptional end-to-end application that mirrors the renowned features of Airbnb. From exploring listings to adding new ones as authorized users, our application boasts a stunning user interface coupled with robust authentication functionalities. Leveraging the Mapbox API for seamless geocoding, our project is a testament to innovation and user-centric design.",
        link:"https://airbnb-n57n.onrender.com/"
    },
    {
        name: "Portfolio Website",
        description:"This portfolio project is a visually stunning and interactive showcase of my work, inspired by the exceptional user interface, typography, and animations of the Refokus website. Built from scratch using the React framework, this portfolio presents my projects and showcases my skills in the latest web development technologies.",
        link:""
       }
]
    return(
        <div className="border-zinc-700 min-w-xl font-serif py-20 text-white relative">
            {
                cards.map((item, index)=>(
                    <Card key={index} name={item.name} desc={item.description} mover={mover} link={item.link} count={index} />

                ))
            }



        <div className="absolute w-full h-full pointer-events-none top-0">
            <motion.div initial={{y:pos, x:"-50%"}}
             animate={{y:pos+`rem`}}
             transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}}
             className="window absolute -translate-x-[50%] -translate-y-[50%] h-[12rem] w-[13rem] left-[44%] bg-green-500 top-0 rounded-lg overflow-hidden">
dc
                <a className="cursor-pointer" href="https://netgpt-b774f.web.app"><p className="text-white px-3 pt-3 cursor-pointer">Current Trending Project</p></a>
                <ReactPlayer
                    className="player"
                    url={myVideo}
                    width="100%"
                    height="120%"
                    playing={true}
                    muted={true}
                />
                <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}} animate={{y:pos+`rem`}} className=" w-full h-full -translate-x-[50%]  bg-red-200 rounded-lg left-[44%]"></motion.div>
                <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}} animate={{y:-pos+`rem`}} className=" w-full h-full -translate-x-[50%]  bg-red-300 rounded-lg left-[44%]"></motion.div>
                <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}} animate={{y:-pos+`rem`}} className="w-full h-full -translate-x-[50%]  bg-red-400 rounded-lg left-[44%]"></motion.div>
                <motion.div transition={{ease:[0.76, 0, 0.24, 1], duration:0.6}} animate={{y:-pos+`rem`}} className=" w-full h-full -translate-x-[50%]  bg-green-400 rounded-lg left-[44%]"></motion.div>

            </motion.div>
        </div>
            
        </div>

    )

}

export default Cards;