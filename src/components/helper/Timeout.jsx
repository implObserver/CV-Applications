export const timeout = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};


export const later = (delay, value) => {
  let timer = 0;
  let reject = null;
  const promise = new Promise((resolve, _reject) => {
    reject = _reject;
    timer = setTimeout(resolve, delay, value);
  });
  return {
    get promise() { return promise; },
    cancel() {
      if (timer) {
        clearTimeout(timer);
        timer = 0;
        reject();
        reject = null;
      }
    }
  };
};