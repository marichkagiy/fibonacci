const countNumber = Number(prompt('Enter # position of Fibonacci number'));

const result = fibonacciAlgorithm(countNumber);
        if (countNumber > 0) {
                document.write(result);
        } else {
                window.alert('Not counting Number, reload and try again');
        }

function fibonacciAlgorithm(countFibo) {
        let a = 0;
        let b = 1;
        for (let i = 1; i < countFibo / 2; i++) {
                let c = a + b;
                a = c;
                b = b + c;
        }
        if (countFibo % 2 === 0) {
                return b;
        } else {
                return a;
        }
}
