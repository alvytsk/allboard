import { useEffect, useState } from 'react';

const useDraw = (
  options: CtxOptions,
  ctx?: CanvasRenderingContext2D | null,
) => {
  const [drawing, setDrawing] = useState(false);

  useEffect(() => {
    if (ctx) {
      ctx.lineJoin = 'round';
      ctx.lineCap = 'round';
      ctx.lineWidth = options.lineWidth;
      ctx.strokeStyle = options.lineColor;
    }
  });

  const handleStartDrawing = (x: number, y: number) => {
    if (!ctx) return;

    setDrawing(true);

    ctx.beginPath();
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleEndDrawing = () => {
    if (!ctx) return;

    //TODO!!! here we have to emit changes to server

    setDrawing(false);
    ctx.closePath();
  };

  const handleDraw = (x: number, y: number) => {
    if (ctx && drawing) {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  return {
    handleEndDrawing,
    handleStartDrawing,
    handleDraw,
    drawing,
  };
};

export default useDraw;
