import { data } from "autoprefixer";
import { motion, useScroll } from "framer-motion"
import { useState } from "react";
import ReactPlayer from "react-player";

const Work = () =>{
  const {scrollYProgress } = useScroll();

    const hoverStyles = {
        backgroundColor: '#dbf26e',
        backgroundImage: 'linear-gradient(319deg, #dbf26e 0%, #61fa74 37%, #1cfdd6 100%)',
        transition: 'background-color 1s ease', 
      };

    const [images, setImages] = useState([
      {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGrXa6QB6ih3I_6F3lPaJpJHSY-C1nZL0Nf9MJgFUeA&s", top:"50%", left:"50%", isActive:false },
      {url:"https://www.financialexpress.com/wp-content/uploads/2023/07/yt-reuters-4.jpg", top:"57%", left:"57%", isActive:false},
      {url:"https://startuptrak.com/wp-content/uploads/2020/12/Swiggy-Food-Startup.jpg", top:"63%", left:"60%", isActive:false},
      // {url:"https://www.financialexpress.com/wp-content/uploads/2023/07/yt-reuters-4.jpg", top:"69%", left:"65%", isActive:"false"}
    ]);

    scrollYProgress.on("change", (data)=>{
      function imagesShow(arr){
        setImages((prev)=>
        prev.map((item, index)=>
          arr.indexOf(index) === -1 ? {...item, isActive:false} :
          {...item, isActive:true}
        ))
      }

      switch(Math.floor(data*100)){
        case 0:
           imagesShow([])
           break;
        case 3:
           imagesShow([0])
           break;
        case 5:
          imagesShow([0, 1])
          break;
        case 7:
          imagesShow([0, 1, 2])
          break;
          
      }
    })

    return(
      <div className="max-w-screen-lg mx-auto relative font-serif h-full">
      <h1
        style={hoverStyles}
        onMouseEnter={(e) => (e.target.style = hoverStyles)}
        onMouseLeave={(e) => (e.target.style = null)}
        className="text-medium tracking-tighter text-[10vh] sm:text-[50vh] text-center text-white"
      >
        Work
      </h1>
    
      <div className="w-full h-[50vh] sm:h-96 absolute top-0">
        {images.map((item, index) => (
          item.isActive && (
            <img
              key={index}
              src={item.url}
              className="absolute w-32 sm:w-64 rounded-lg -translate-x-50% -translate-y-50%"
              style={{ top: item.top, left: item.left }}
              alt="Net"
            />
          )
        ))}
      </div>
    </div>
    
    )
}

export default Work;