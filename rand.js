const rand = (min, max) =>
  Math.random() * (max - min) + min;

export const int = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

export const inclusive = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
