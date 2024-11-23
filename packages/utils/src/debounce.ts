const debounce = (func: (...arg0: any) => void, delay: number | undefined) => {
  let timeoutId: number;
  return (...args: any) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export default debounce;
