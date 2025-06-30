function outerFunction() {
  const message = "Hello from the outer function!";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}


const closureFunc = outerFunction();
closureFunc(); 
