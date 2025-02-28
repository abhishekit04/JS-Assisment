// 1) Multiplication Table
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// 2) Number Guessing Game
function numberGuessingGame() {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    let guess;
    while (guess !== randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 10:"));
        if (guess === randomNumber) {
            console.log("Congratulations! You guessed the correct number.");
        } else {
            console.log("Try again!");
        }
    }
}

// 3) FizzBuzz Problem
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// 4) Factorial Calculation
function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    console.log(`Factorial of ${num} is ${result}`);
}

// 5) Prime Number Checker
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 6) Star Pattern
function starPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

// 7) Palindrome Checker
function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 8) Count Vowels and Consonants
function countVowelsAndConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0, cCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vCount++;
        } else if (char.match(/[a-zA-Z]/)) {
            cCount++;
        }
    }
    console.log(`Vowels: ${vCount}, Consonants: ${cCount}`);
}

// 9) Factorial Using While Loop
function factorialWhile(num) {
    let result = 1;
    let i = num;
    while (i > 1) {
        result *= i;
        i--;
    }
    console.log(`Factorial of ${num} is ${result}`);
}

// 10) Fibonacci Sequence
function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    console.log(sequence.slice(0, n));
}
