import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import confetti from 'canvas-confetti';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const celebrate = () => {
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#00bfff', '#ff69b4', '#f9c80e', '#a259ff']
  });
};