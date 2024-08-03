import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ai from "./AI.png"

const Toolbar = () => {
  const dockRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const icons = iconsRef.current;
    const dock = dockRef.current;
    const firstIcon = icons[0];

    const min = 48;
    const max = 120;
    const bound = min * Math.PI;

    gsap.set(icons, {
      transformOrigin: '50% -20%',
      height: 40,
    });

    gsap.set(dock, {
      position: 'relative',
      height: 100,
    });

    const updateIcons = (pointer) => {
      for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        const distance = (i * min + min / 2) - pointer;
        let x = 0;
        let scale = 1;

        if (-bound < distance && distance < bound) {
          const rad = (distance / min) * 0.5;
          scale = 1 + ((max / min) - 1) * Math.cos(rad);
          x = 2 * (max - min) * Math.sin(rad);
        } else {
          x = (-bound < distance ? 2 : -2) * (max - min);
        }

        gsap.to(icon, {
          duration: 0.3,
          x: x,
          scale: scale,
        });
      }
    };

    const handleMouseMove = (event) => {
      const offset = dock.getBoundingClientRect().left + firstIcon.offsetLeft;
      updateIcons(event.clientX - offset);
    };

    const handleMouseLeave = () => {
      gsap.to(icons, {
        duration: 0.3,
        scale: 1,
        x: 0,
      });
    };

    dock.addEventListener('mousemove', handleMouseMove);
    dock.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dock.removeEventListener('mousemove', handleMouseMove);
      dock.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const images = [
    20
  ];

  return (
    <div className="flex justify-center">
      <ul className="inline-flex justify-center m-0 p-2 bg-opacity-25 list-none relative h-10" ref={dockRef}>
        {images.map((image, index) => (
          <li
            className="w-10 mx-1"
            key={image}
            ref={(el) => (iconsRef.current[index] = el)}
          >
            <a className="block" href="https://open-router-chat.vercel.app/">
              <img
                className="block w-full h-auto rounded-full"
                src={ai}
                alt=""
              />
            </a>
            <p className='text-xs text-white hover:text-black'>Trending Project</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Toolbar;

