'use client';

import React, { useEffect, useRef } from 'react';
import useDeviceScreenSize from '../hooks/useDeviceScreenSize';

export function CanvasBoard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [width, height] = useDeviceScreenSize();

  useEffect(() => {
    console.log({ width, height });
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.rect(20, 20, 150, 100);
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [width, height]);

  return <canvas ref={canvasRef} height={height} width={width} />;
}
