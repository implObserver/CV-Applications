export const later = (delay, value) => {
  let timer = 0;
  const promise = new Promise((resolve) => {
    timer = setTimeout(resolve, delay, value);
  });
  return {
    get promise() { return promise; },
    cancel() {
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
    }
  };
};