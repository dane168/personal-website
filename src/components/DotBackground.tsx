"use client";
import React, { useEffect, useRef } from "react";

const DOT_MIN_SIZE = 4;
const DOT_MAX_SIZE = 10;
const DOT_LIFETIME = 1800; // ms
const DOT_SHRINK_TIME = 1200; // ms
const DOT_COLOR = "0, 120, 255";
const MAX_DOTS = 10;

interface Dot {
    x: number;
    y: number;
    created: number;
    size: number;
}

const DotBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dots = useRef<Dot[]>([]);

    useEffect(() => {
        const setCanvasSize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);
        return () => window.removeEventListener("resize", setCanvasSize);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Add a new dot with random size
            dots.current.push({
                x: e.clientX,
                y: e.clientY,
                created: Date.now(),
                size: DOT_MIN_SIZE + Math.random() * (DOT_MAX_SIZE - DOT_MIN_SIZE),
            });
            // Limit the number of dots
            if (dots.current.length > MAX_DOTS) {
                dots.current = dots.current.slice(dots.current.length - MAX_DOTS);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        let animationId: number;
        const animate = () => {
            const ctx = canvasRef.current?.getContext("2d");
            if (!ctx || !canvasRef.current) return;
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            const now = Date.now();
            dots.current = dots.current.filter(dot => now - dot.created < DOT_LIFETIME);
            for (const dot of dots.current) {
                const age = now - dot.created;
                let size = dot.size;
                let alpha = 0.7;
                if (age > DOT_SHRINK_TIME) {
                    // Shrink and fade out
                    const t = (age - DOT_SHRINK_TIME) / (DOT_LIFETIME - DOT_SHRINK_TIME);
                    size = dot.size * (1 - t);
                    alpha = 0.7 * (1 - t);
                }
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, size, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(${DOT_COLOR},${alpha})`;
                ctx.shadowColor = `rgba(${DOT_COLOR},0.2)`;
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }
            animationId = requestAnimationFrame(animate);
        };
        animate();
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 0,
                pointerEvents: "none",
            }}
        />
    );
};

export default DotBackground;
