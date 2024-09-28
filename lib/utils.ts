import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalizeFirstLetter(str: string) {
  if (!str) return str; // Handle empty or undefined strings
  return str.charAt(0).toUpperCase() + str.slice(1);
}
