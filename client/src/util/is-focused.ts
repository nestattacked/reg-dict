const isFocused = (element: HTMLElement): boolean =>
  document.activeElement !== null && document.activeElement === element;

export { isFocused };
