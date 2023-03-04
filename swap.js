let a = 1, b = 2;

function xorSwap() {
    if (a !== b)  {
        a = a ^ b;
        b = b ^ a;
        a = a ^ b;
    }
    console.log(a);
    console.log(b);
}
xorSwap();

a = 1;
b = 2;

function destructuringSwap() {
    // ES6 destructuring way of swap
    if (a !== b) {
        [b, a] = [a, b];
    }
    console.log(a);
    console.log(b);
}

destructuringSwap();