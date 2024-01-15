// 4. Design a function which helps to do debouncing

// - The `debounce` function forces a function to wait a certain amount of time before running again
// - The function is built to limit the number of function calls to improve the performance
// - Debounce function design can take function (to be debounced), delay and the optional context

// Debouncing: Debouncing involves starting a timer when an event occurs and resetting the timer
//  whenever a new event occurs within the delay period. 
// The function is executed when the timer expires after the last event.

function debounce(fn, delay=300, context) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    context = this ?? context;
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
}
function saveInput(e){
    console.log('Saving data',e.target.value);
  }
const processDebounceChange = debounce(saveInput,1000);
console.log(processDebounceChange)