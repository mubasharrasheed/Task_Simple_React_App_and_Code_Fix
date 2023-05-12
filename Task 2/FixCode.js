function multiplyByClosure(mult) {
  const values = [0, 0.5, 1, 2, 3, 4, 5, 'a', false];
  return values.map(function(value) { 
    if (typeof value === 'number') {
      return value * mult;
    }
    return value;
  });
}

function countZeroValues(values) {
  return values.filter(function(value) {
    return value === 0; // Use strict equality (===) to compare values
  }).length;
}

const multiplyByTwo = multiplyByClosure(2);
console.log(multiplyByTwo);

const multiplyByThree = multiplyByClosure(3);
console.log(multiplyByThree);

// count zero values, expecting 1:
console.log(countZeroValues(multiplyByTwo));

for (let i = 0; i < 10; i++) {
  const button = document.createElement('button');
  button.textContent = `Multiply by ${i}`;
  document.body.appendChild(button);

  button.onclick = function() {
    console.log(multiplyByClosure(i)); // Use let instead of var to avoid issues with closures
  };
}


//-------Here are the changes I made--------------

//In the countZeroValues function, I changed the comparison operator from == to ===. It's generally recommended to use strict equality (===) to compare values in JavaScript to avoid unexpected type coercion.

//In the for loop, I replaced var i with let i to avoid issues with closures. Using let creates a new variable scope for each iteration, ensuring that the correct value of i is used when the button click event occurs.

