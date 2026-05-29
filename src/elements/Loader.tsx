import { useEffect, useRef, useState } from "react";

const Loader = ({
  duration = 1000,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (!visible) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;


    const W = 640;
    const H = 140;
    const CY = H / 2;

    const pts = [
      [0, CY],
      [60, CY],
      [120, CY - 30],
      [160, CY + 60],
      [200, CY - 55],
      [230, CY + 35],
      [255, CY - 25],
      [270, CY + 18],
      [290, CY - 10],
      [310, CY + 28],
      [325, CY - 18],
      [335, CY + 22],
      [350, CY + 5],
      [365, CY - 14],
      [385, CY + 24],
      [410, CY - 10],
      [435, CY + 18],
      [460, CY - 8],
      [485, CY + 12],
      [510, CY - 5],
      [535, CY + 6],
      [560, CY],
      [600, CY],
      [640, CY],
    ];

    function buildPath() {
      ctx.beginPath();
      ctx.moveTo(pts[0][0], pts[0][1]);

      for (let i = 1; i < pts.length - 1; i++) {
        const mx = (pts[i][0] + pts[i + 1][0]) / 2;
        const my = (pts[i][1] + pts[i + 1][1]) / 2;

        ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
      }

      ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
    }

    const totalLen = W * 1.62;
    const animDur = 2700;

    let start: number | null = null;

    function easeInOut(x: number) {
      return x < 0.5
        ? 2 * x * x
        : 1 - Math.pow(-2 * x + 2, 2) / 2;
    }

    function draw(ts: number) {
      if (!start) start = ts;

      const t = ((ts - start) % animDur) / animDur;

      ctx.clearRect(0, 0, W, H);

      const eT = easeInOut(t);
      const eStart = easeInOut(Math.max(0, t - 0.35));

      const startOff = eStart * totalLen;
      const endOff = eT * totalLen;

      const dashLen = Math.max(0, endOff - startOff);

      buildPath();

      const grad = ctx.createLinearGradient(
        startOff * (W / totalLen),
        0,
        endOff * (W / totalLen),
        0
      );

      grad.addColorStop(0, "rgba(61, 92, 219, 0.853)");
      grad.addColorStop(0.5, "rgba(13, 77, 160, 1)");
      grad.addColorStop(1, "rgba(83, 94, 213, 0.9)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 5.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      ctx.setLineDash([dashLen, totalLen]);
      ctx.lineDashOffset = -startOff;

      ctx.stroke();

      ctx.setLineDash([]);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center gap-7">
      <canvas
        ref={canvasRef}
        width={640}
        height={140}
        className="w-[320px] h-[70px]"
      />
    </div>
  );
};

export default Loader;