function makeRequest(payload) {
  console.log(payload);
}

const throttledRequest = (function throttle(payload) {
  let last, deferTimer;

  return () => {
    let now = +new Date;

    if (last && now < last + 5000) {
      if (deferTimer) clearTimeout(deferTimer);

      deferTimer = setTimeout(() => {
        last = +new Date;
        makeRequest(payload);
      }, 5000 - (now - last));
    } else {
      last = now;
      makeRequest(payload);
    }
  };
})();



setTimeout(throttledRequest, 0);
setTimeout(throttledRequest, 2);
setTimeout(throttledRequest, 4);
setTimeout(throttledRequest, 7);