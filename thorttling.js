//6. Design a function which helps to do throttling

// - The `throttling` function forces a function to run once in an amount of time for one or multiple calls
// - The function is built to limit the number of function calls to improve the performance
// - Throttling function design can take function (to be throttled), delay and the optional context
// Throttling: Throttling typically involves setting a fixed interval between 
// function calls using timers or timestamps to track the last invocation time.


function throttle(fn, delay, context) {
  let timer;
  let lastArgs;

  return function (...args) {
    lastArgs = args;
    context = this ?? context;

    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(context, lastArgs);
      clearTimeout(timer);
    }, delay);
  };
}

function saveInput(e){
  console.log('Saving data',e.target.value);
}
const processThrottleChange = throttle(saveInput,1000);
console.log(processThrottleChange)