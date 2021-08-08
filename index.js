const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const increment = (n) => {
    return n += 1;
}

const decrement = (n) => {
    return n -= 1;
}

const makeInt = (string) => {
    return parseInt(string, 10);
}

const preserveDecimal = (string) => {
    return parseFloat(string);
}   