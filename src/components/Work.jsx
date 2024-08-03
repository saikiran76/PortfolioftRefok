import { useScroll, motion, useTransform } from "framer-motion";
import { useState } from "react";
import { gsap } from "gsap";
import Toolbar from "./Bar";

const Work = () => {
  const { scrollYProgress } = useScroll();

  const hoverStyles = {
    backgroundColor: '#dbf26e',
    backgroundImage: 'linear-gradient(329deg, #22C55E 107%, #61fa74 57%, #1cfdd6 100%)',
    transition: 'background-color 1s ease',
  };

  const [images, setImages] = useState([
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwGrXa6QB6ih3I_6F3lPaJpJHSY-C1nZL0Nf9MJgFUeA&s", top: "42%", left: "50%", isActive: false },
    { url: "https://www.financialexpress.com/wp-content/uploads/2023/07/yt-reuters-4.jpg", top: "52%", left: "57%", isActive: false },
    { url: "https://startuptrak.com/wp-content/uploads/2020/12/Swiggy-Food-Startup.jpg", top: "59%", left: "60%", isActive: false },
  ]);

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1 ? { ...item, isActive: false } :
            { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 2:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
    }
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div className="bg-green-200 max-w-screen-xl md:max-w-screen-lg mx-auto relative font-serif h-[480px] md:h-screen overflow-hidden">
      <motion.h1
        style={{ ...hoverStyles, scale }}
        onMouseEnter={(e) => (e.target.style = hoverStyles)}
        onMouseLeave={(e) => (e.target.style = null)}
        className="text-medium tracking-tighter text-[20vh] md:text-[40vh] text-center px-4 text-green-700"
      >
        Hey!!!
      </motion.h1>

      <motion.h1 style={{...hoverStyles, scale}} className="text-medium tracking-tighter text-[10vh] md:text-[20vh] text-center text-white rounded px-4">
        Welcome
      </motion.h1>

      <div className="w-full h-[90vh] sm:h-96 absolute top-20 md:top-12 left-14">
        {images.map((item, index) => (
          item.isActive && (
            <img
              key={index}
              src={item.url}
              className="absolute w-32 sm:w-64 rounded-lg -translate-x-1/2 -translate-y-1/2"
              style={{ top: item.top, left: item.left }}
              alt="Net"
            />
          )
        ))}
        {/* {<img src={image} className="absolute w-32 sm:w-64 rounded-lg -translate-x-1/2 -translate-y-1/2" style={{ top: "69%", left: "63%" }} />} */}
        <div className="absolute top-0">
          <Toolbar />
        </div>
        
      </div>
    </div>
  );
};

export default Work;
