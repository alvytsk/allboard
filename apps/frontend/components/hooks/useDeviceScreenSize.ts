import React, { useEffect, useState } from 'react';
import { debounce } from '../utils';

const useDeviceScreenSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', debounce(handleWindowResize));
    // unsubscribe from the event on component unmount
    return () =>
      window.removeEventListener('resize', debounce(handleWindowResize));
  }, []);

  return [width, height];
};

export default useDeviceScreenSize;
