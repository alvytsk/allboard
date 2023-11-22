import React, { useEffect } from 'react';

type MouseCoords = {
  x: null | number;
  y: null | number;
};

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState<MouseCoords>({
    x: null,
    y: null,
  });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};
export default useMousePosition;
