const debounce = (fn, delayInMs = 500) => {
  // Keep track of setTimeout
  let timer;

  // Closure w/ any # of args and keeps reference to this
  return function (...args) {
    const context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delayInMs);
  };
};

export default debounce;
