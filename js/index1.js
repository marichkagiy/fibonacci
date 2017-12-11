const countNumber = Number(prompt('Please enter # position of Fibonacci number '));

const result = fibonacciAlgorithm(countNumber);

function fibonacciAlgorithm(countFibo) {

        let fibo = [0, 1];
        let i = 2;
        for (i = 2; i < countFibo; i++) {
                fibo[i] = fibo[i - 2] + fibo[i - 1];
        }
        return document.write(fibo[countFibo - 1]);
}
