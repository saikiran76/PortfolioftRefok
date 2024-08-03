import { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";
import Button from "./Button";
import { FaUserSecret, FaBars} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (menuRef.current) {
      gsap.from(menuRef.current.children, {
        y: -55,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        stagger: 0.3
      });
    }
  }, []);

  const menuItems = [
    { name: "Home", target: "home" },
    { name: "Projects", target: "projects" },
    { name: "Skills", target: "skills" },
    { name: "", target: "" },
    { name: "Contact", target: "contact" }
  ];

  return (
    <div className="max-w-screen-lg mx-auto py-4 text-white flex flex-wrap gap-2 items-center justify-between border-b-[1px] border-zinc-700 font-serif">
      <div className="flex items-center gap-8 text-sm ml-12">
        <FaUserSecret style={{ color: "#ffffff", fontSize: "30px" }} />
        <div ref={menuRef} className="hidden md:flex gap-8">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              className="p-2 cursor-pointer hover:text-green-400"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.75px #00FF19" }}
                  className="inline-block bg-green-400 w-1 h-1"
                ></span>
              )}
              {item.name}
              {item.name === "" && (
                <span className="w-[1px] h-9 bg-zinc-700"></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => toggleMenu()}>
          {isMenuOpen ? (
            <FaTimes style={{ color: "#ffffff", fontSize: "24px" }} />
          ) : (
            <FaBars style={{ color: "#ffffff", fontSize: "24px" }} />
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-sky-800 py-4 px-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.target}
                smooth={true}
                duration={500}
                className="p-2 cursor-pointer hover:text-green-400"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.75px #00FF19" }}
                    className="inline-block bg-green-400 w-1 h-1"
                  ></span>
                )}
                {item.name}
                {item.name === "" && (
                  <span className="w-[1px] h-9 bg-zinc-700"></span>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="mr-8">
        <Button name="Github" link="https://github.com/saikiran76" />
      </div>
    </div>
  );
};

export default NavBar;
