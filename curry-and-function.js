//3. Write a function which helps to achieve multiply(a)(b) and returns product of a and b

//The implementation of this can be achieved by calling a function which returns a function

function multiply(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

// Example
multiply(2)(4); // 8
multiply(5)(3); // 15

console.log(multiply(5)(3))