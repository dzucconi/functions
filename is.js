export const offscreen = el =>
  el.getBoundingClientRect().bottom < 0;

export const touch = () =>
  'ontouchstart' in window || 'onmsgesturechange' in window;

export const visible = el => {
  const rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const promise = obj =>
  Promise.resolve(obj) === obj

