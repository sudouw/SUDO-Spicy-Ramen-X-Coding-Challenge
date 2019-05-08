// ███████╗██╗   ██╗██████╗  ██████╗    Claire Kim    Wesley Wei       Adrian Ionescu   2019
// ██╔════╝██║   ██║██╔══██╗██╔═══██╗   Alexis Choi   Estelle Jiang    Jiayu Wang       UW Seattle
// ███████╗██║   ██║██║  ██║██║   ██║   ZK Lin        Scarlett Hwang   Veronica Chang
// ╚════██║██║   ██║██║  ██║██║   ██║   Kelden Lin    John Soter
// ███████║╚██████╔╝██████╔╝╚██████╔╝   Shruti Raj    Scott Mo
// ╚══════╝ ╚═════╝ ╚═════╝  ╚═════╝
// ███████╗██████╗ ██╗ ██████╗██╗   ██╗    ██████╗  █████╗ ███╗   ███╗███████╗███╗   ██╗
// ██╔════╝██╔══██╗██║██╔════╝╚██╗ ██╔╝    ██╔══██╗██╔══██╗████╗ ████║██╔════╝████╗  ██║
// ███████╗██████╔╝██║██║      ╚████╔╝     ██████╔╝███████║██╔████╔██║█████╗  ██╔██╗ ██║
// ╚════██║██╔═══╝ ██║██║       ╚██╔╝      ██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝  ██║╚██╗██║
// ███████║██║     ██║╚██████╗   ██║       ██║  ██║██║  ██║██║ ╚═╝ ██║███████╗██║ ╚████║
// ╚══════╝╚═╝     ╚═╝ ╚═════╝   ╚═╝       ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝
//  ██████╗ ██████╗ ██████╗ ██╗███╗   ██╗ ██████╗
// ██╔════╝██╔═══██╗██╔══██╗██║████╗  ██║██╔════╝
// ██║     ██║   ██║██║  ██║██║██╔██╗ ██║██║  ███╗   Can you handle
// ██║     ██║   ██║██║  ██║██║██║╚██╗██║██║   ██║   the heat?
// ╚██████╗╚██████╔╝██████╔╝██║██║ ╚████║╚██████╔╝
//  ╚═════╝ ╚═════╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝
//  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
// ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
// ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
// ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
// ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
//  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

// Implement the reversal of a string.
// Should return the string reversed.
// Should return undefined for any inputs other
// than strings.
// Example: "ODUS" -> "SUDO"
function reverseString(s) {
    if (typeof s !== "string") {
        return undefined;
    }
    let finalS = "";

    for (let i = s.length - 1; i >= 0; i--) {
        finalS += s[i];
    }
    return finalS;
}

// Given an array of integers, and examine each element.
// If the element is divisible by 3, it is Fizz; if
// it is divisible by 5, it is Buzz; if both, it is
// FizzBuzz. Return an array of string at the end.
// Return undefined for any inputs other than an array.
// Examples:
// [2, 1] -> []
// [3, 5, 11, 12] -> ["Fizz", "Buzz", "Fizz"]
// [3, 6, 5, 8, 11, 15, 30, 12] - > ["Fizz", "Fizz", "Buzz", "FizzBuzz", "FizzBuzz", "Fizz"]
function fizzBuzz(arr) {
    if (!Array.isArray(arr)) {
        return undefined
    }
    let arrRet = [];
    arr.forEach(d => {
        let returnVal = "";
        if (d % 3 == 0) {
            returnVal = "Fizz";
        }
        if (d % 5 == 0) {
            returnVal = "Buzz";
        }
        if (d % 3 == 0 && d % 5 == 0) {
            returnVal = "FizzBuzz";
        }
        if (returnVal !== "") {
            arrRet.push(returnVal);
        }
    });
    return arrRet;
}

let fib = (n) => {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
// Given a start and end, return an array containing
// the Fibonacci sequence between the given start(inclusive) and end(exclusive)
// Return undefined for missing input, non-integer or negative inputs,
// and for any inputs where the end is less than or equal to the start.
// Example: start = 0, end = 6 -> [0, 1, 1, 2, 3, 5]
function arrayFibonacci(start, end) {
    if (start === null || start === undefined || end === null || end === undefined) {
        return undefined;
    }
    if (typeof start !== "number" || typeof end !== "number") {
        return undefined
    }
    if (start < 0 || end < 0 || (start == 0 && end == 0)) {
        return undefined;
    }
    if (start !== Math.floor(start) || end !== Math.floor(end)) {
        return undefined;
    }
    if (start > end) {
        return undefined;
    }

    let val = 0;
    let idx = 0;
    let finalArr = [];
    while (val < end) {
        val = fib(idx)
        if (val >= start && val <= end) {
            finalArr.push(val)
        }
        idx++;
    }

    return finalArr;
}
