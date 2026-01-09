import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const KEYWORDS = [
  "calm mood", "relaxation app", "nature connection", "peaceful environment",
  "stress relief", "spiritual harmony", "eco-friendly lifestyle", "mental wellness",
  "breathing exercise", "breathe better", "guided breathing", "meditation sounds",
  "mindful breaks", "focus and productivity", "eye and nerve care",
  "anxiety relief", "digital detox", "forest ambience", "eco calm experience",
  "soothing ambience", "soothing sounds", "relaxing sounds", "relaxing ambience",
  "relaxing app", "meditation", "wellness app", "wellness", "meditation app", "meditate",
  "sleep sounds", "calm app", "mindfulness app", "how to relax", "how to calm down",
  "how to deal with depression", "how to deal with anger", "how to deal with stress",
  "how to deal with anxiety", "im angry", "im mad", "im depressed", "im frustrated",
  "im stressed", "im anxious", "ways to reduce stress", "im out of control", "out of control"
];

export const absoluteURL = (path?: string) => {
  const url = process.env.NODE_ENV==="production" ? "https://calm-mood.vercel.app" : "http://localhost:3000";
  return !path ? url : `${url}${path}`
}

export function getDailyBackground(): React.CSSProperties{
  const mod = Math.floor(Date.now() / (1000*60*60*24)) % 10;
  const jpg = `/images/backgrounds/bg-${mod+1}.jpg`;
  const webp = `/images/backgrounds/bg-${mod+1}.webp`
  return {
    background: `url(${webp}), url(${jpg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
  }
}
export function preloadAudio(...audioFiles: string[]) {
  const set = new Set(audioFiles);
  const arr = audioFiles.filter(([key])=>set.has(key)).map((entries)=>entries[1]);
  arr.forEach(src => {
    const audio = new Audio(src);
    audio.load();
  });
}