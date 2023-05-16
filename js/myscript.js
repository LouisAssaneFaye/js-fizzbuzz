for (let i = 0; i < 100; i = i + 1) {
    if (i % 15 === 0 && i >= 15) {
        console.log('FizzBuzz');
    } else if (i % 5 === 0 && i >= 5){
        console.log('Buzz');
    } else if (i % 3 === 0 && i >= 3){
        console.log('Fizz');
    } else {
        console.log(i);
    }
  
}
