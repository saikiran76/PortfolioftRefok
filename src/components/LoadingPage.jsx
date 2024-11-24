import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import loadingAnimation from '../assets/jsonUse.json';

const LoadingPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const lottieStyle = {
    width: 400,
    height: 400
  };

  return (
    <div className="h-screen w-full bg-zinc-900 flex flex-col items-center justify-center">
      <div className="tooltip">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          autoplay={true}
          style={lottieStyle}
          onClick={() => null}
        />
      </div>

      {showMessage && (
        <div className="text-white text-center mt-8 max-w-md px-4 animate-fade-in">
          <p className="mb-4">
            The new version of the website is at{' '}
            <a href="xyz.com" className="text-green-400 hover:text-green-300 underline">
              xyz.com
            </a>
            , please visit this for upgraded version for best experience.
          </p>
          <p>
            or{' '}
            <Link to="/Home" className="text-green-400 hover:text-green-300 underline">
              continue
            </Link>{' '}
            to the old version.
          </p>
        </div>
      )}
    </div>
  );
};

export default LoadingPage; 