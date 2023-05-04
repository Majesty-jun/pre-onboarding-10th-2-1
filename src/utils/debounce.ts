export const debounce = <T extends (...args: any[]) => any>(callback: T, delay = 300) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>): ReturnType<T> => {
    let result: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      result = callback(...args);
    }, delay);
    return result;
  };
};
