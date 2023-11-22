'use client';

import React, { useEffect, useRef, useState } from 'react';
import useDeviceScreenSize from '../hooks/useDeviceScreenSize';
import useDraw from '../hooks/useDraw';

export function CanvasBoard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const [options, setOptions] = useState<CtxOptions>({
    lineColor: '#000',
    lineWidth: 5,
  });

  const { handleEndDrawing, handleStartDrawing, handleDraw, drawing } = useDraw(
    options,
    ctxRef.current,
  );

  const [width, height] = useDeviceScreenSize();

  useEffect(() => {
    console.log({ width, height });
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctxRef.current = ctx;
      }
    }
  }, [width, height]);

  return (
    <>
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        onMouseDown={(e) => handleStartDrawing(e.clientX, e.clientY)}
        onMouseUp={handleEndDrawing}
        onMouseMove={(e) => handleDraw(e.clientX, e.clientY)}
        onTouchStart={(e) =>
          handleStartDrawing(
            e.changedTouches[0].clientX,
            e.changedTouches[0].clientY,
          )
        }
        onTouchEnd={handleEndDrawing}
        onTouchMove={(e) =>
          handleDraw(e.changedTouches[0].clientX, e.changedTouches[0].clientY)
        }
      />
    </>
  );
}
