var fibo = (function () {
    var memory = {};
    function f(n) {
        var res;
        if (n in memory) {
            res = memory[n];
        } else {
            if (n === 0 || n === 1)
                res = n;
            else
                res = f(n - 1) + f(n - 2);
            memory[n] = res;
        }
        return res;
    }
    return f;
})();
console.log(fibo(20));
