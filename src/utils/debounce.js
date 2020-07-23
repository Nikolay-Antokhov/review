const debounce = (fn, ms) => {
  let isBlocked = false;

  return (...args) => {
    if ( isBlocked ) return;

    isBlocked = true;
    fn.apply(this, args);
    setTimeout(() => isBlocked = false, ms);
  }
};
