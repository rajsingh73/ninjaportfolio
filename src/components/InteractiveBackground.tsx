import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const PARTICLE_COUNT = Math.min(80, Math.floor((w * h) / 18000));
    const INTERACT_RADIUS = 150;

    interface Particle {
      x: number; y: number; bx: number; by: number;
      vx: number; vy: number; r: number; opacity: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const x = Math.random() * w;
      const y = Math.random() * h;
      return {
        x, y, bx: x, by: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      };
    });

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const dark = themeRef.current === "dark";
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Cursor glow
      if (mx > 0 && my > 0) {
        const grad = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        if (dark) {
          grad.addColorStop(0, "rgba(99,102,241,0.08)");
          grad.addColorStop(0.5, "rgba(139,92,246,0.03)");
        } else {
          grad.addColorStop(0, "rgba(59,130,246,0.06)");
          grad.addColorStop(0.5, "rgba(59,130,246,0.02)");
        }
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift
        p.bx += p.vx;
        p.by += p.vy;
        if (p.bx < 0 || p.bx > w) p.vx *= -1;
        if (p.by < 0 || p.by > h) p.vy *= -1;

        // Cursor repel
        let tx = p.bx, ty = p.by;
        if (mx > 0 && my > 0) {
          const dx = p.bx - mx, dy = p.by - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < INTERACT_RADIUS && dist > 0) {
            const force = (1 - dist / INTERACT_RADIUS) * 40;
            tx += (dx / dist) * force;
            ty += (dy / dist) * force;
          }
        }

        p.x += (tx - p.x) * 0.08;
        p.y += (ty - p.y) * 0.08;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dark
          ? `rgba(139,92,246,${p.opacity})`
          : `rgba(59,130,246,${p.opacity * 0.7})`;
        ctx.fill();

        // Lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const ddx = p.x - q.x, ddy = p.y - q.y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < 14400) { // 120^2
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const lineOpacity = (1 - Math.sqrt(d2) / 120) * 0.15;
            ctx.strokeStyle = dark
              ? `rgba(139,92,246,${lineOpacity})`
              : `rgba(59,130,246,${lineOpacity})`;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const cleanup = init();

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    return () => {
      cleanup?.();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [init]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default InteractiveBackground;
