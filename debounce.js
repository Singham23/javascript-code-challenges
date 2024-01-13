// 4. Design a function which helps to do debouncing

// - The `debounce` function forces a function to wait a certain amount of time before running again
// - The function is built to limit the number of function calls to improve the performance
// - Debounce function design can take function (to be debounced), delay and the optional context
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
const processChange = debounce(saveInput,500);
console.log(processChange)