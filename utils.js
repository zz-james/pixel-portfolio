const debounce = (fn) => {
  let frame;

  // The debounce function returns a new function that can receive a variable number of arguments
  return (...params) => {
    if (frame) {
      // if we call again just abandon the previous one
      cancelAnimationFrame(frame);
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      fn(...params);
    });
  };
};

export { debounce };
