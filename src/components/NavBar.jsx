// import React from "react";
import Button from "./Button";
import {useRef} from "react";
import { FaUserSecret } from "react-icons/fa6";
// import Card from "./card";

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const targetRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToTarget = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto md:max-w-screen-lg py-4 text-white flex flex-wrap gap-2 items-center justify-between border-b-[1px] border-zinc-700 font-serif">
      <div className="nleft flex flex-wrap gap-8 text-xs ml-12 items-center justify-between">
        <FaUserSecret style={{ color: '#ffffff', fontSize: '30px' }} />
        <div className={`md:flex md:flex-wrap md:gap-8 ${isMenuOpen ? 'hidden' : 'flex'}`}>
          {['Home', 'Projects', 'skills', '', 'Contact'].map((item, index) => (
            <a
              key={item}
              onClick={scrollToTarget}
              href="#"
              className="flex flex-wrap p-2"
            >
                
              {index === 1 && (
                <span
                  style={{ boxShadow: '0 0 0.75 #00FF19' }}
                  className="inline-block bg-green-400 w-1 h-1"
                ></span>
              )}
              {item}
              {item.length === 0 && (
                <span className="w-[1px] h-9 bg-zinc-700"></span>
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => toggleMenu()}>
          {isMenuOpen ? (
            <FaTimes style={{ color: '#ffffff', fontSize: '24px' }} />
          ) : (
            <FaBars style={{ color: '#ffffff', fontSize: '24px' }} />
          )}
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-sky-800 py-4 px-8 hidden">
            {['Home', 'Projects', 'skills', '', 'Contact'].map((item, index) => (
              <a
                key={item}
                onClick={scrollToTarget}
                href="#"
                className="flex flex-wrap p-2"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: '0 0 0.75 #00FF19' }}
                    className="inline-block bg-green-400 w-1 h-1"
                  ></span>
                )}
                {item}
                {item.length === 0 && (
                  <span className="w-[1px] h-9 bg-zinc-800"></span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      <Button name="Work" link="https://github.com/saikiran76" />
      {/* <Card ref={targetRef}/> */}
    </div>
  );
};

export default NavBar;

