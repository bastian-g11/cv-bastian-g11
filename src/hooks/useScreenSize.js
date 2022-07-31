import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectScreenSize);

    return () => {
      window.removeEventListener('resize', detectScreenSize);
    };
  }, [screenSize]);

  return { screenSize };
};

export { useScreenSize };
