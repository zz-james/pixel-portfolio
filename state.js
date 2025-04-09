let handlers = Symbol("handlers"); //UUID

const makeObservable = (target) => {
  target[handlers] = []; // this is a handlers store, it's basically a prop on the object which is unique

  target.observe = function (handler) {
    this[handlers].push(handler); // so if we call the observe prop on the target object with a function as a prop, that function gets added to the handlers array
  };

  /* a proxy creates a proxy for an object which intercepts/redefines operations for that object eg redefine get will redefine every object access*/
  /* second arg is an object that defines which operations will be intercepted and how to redefine them */
  return new Proxy(target, {
    set(target, property, value) {
      let success = Reflect.set(...arguments); // forward the operation to object
      if (success) {
        // if no error call all the handlers (makeObservable can be called multiple times on the same object)
        // the handlers are the functions you passed in.
        target[handlers].forEach((handler) => handler(property, value));
      }
      return success;
    },
  });
};

let state = {};

state.init = (data) => {
  Object.keys(data).map((key) => {
    state[key] = data[key];
  });
};

state.init({
  chest: "closed",
});

state = makeObservable(state);

export { state };
