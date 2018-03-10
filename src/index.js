class SmartCalculator {
    constructor(initialValue) {
        SmartCalculator.numbers = [initialValue];
        SmartCalculator.operators = ['initial'];
        this.number = 0;
    }

    add(number) {
        SmartCalculator.operators.push('+');
        SmartCalculator.numbers.push(number);
        this.number = this.calculate();
        return this;
    }

    subtract(number) {
        SmartCalculator.operators.push('-');
        SmartCalculator.numbers.push(number);
        this.number = this.calculate();
        return this;
    }

    multiply(number) {
        SmartCalculator.operators.push('*');
        SmartCalculator.numbers.push(number);
        this.number = this.calculate();
        return this;
    }

    devide(number) {
        SmartCalculator.operators.push('*');
        SmartCalculator.numbers.push(1 / number);
        this.number = this.calculate();
        return this;
    }

    pow(number) {
        SmartCalculator.operators.push('**');
        SmartCalculator.numbers.push(number);
        this.number = this.calculate();
        return this;
    }

    calculate() {
        let numbersArray = SmartCalculator.numbers.slice();
        let operatorsArray = SmartCalculator.operators.slice();

        if (operatorsArray.includes('**')) {
            for (let i = numbersArray.length - 1; i > -1; i--) {
                if (operatorsArray[i] === '**') {
                    numbersArray[i - 1] = numbersArray[i - 1] ** numbersArray[i];
                    numbersArray.splice(i, 1);
                    operatorsArray.splice(i, 1);
                }
            }
        }
        if (operatorsArray.includes('*')) {
            for (let i = numbersArray.length - 1; i > -1; i--) {
                if (operatorsArray[i] === '*') {
                    numbersArray[i - 1] = numbersArray[i - 1] * numbersArray[i];
                    operatorsArray.splice(i, 1);
                    numbersArray.splice(i, 1);
                }
            }
        }
        if (operatorsArray.includes('+')) {
            for (let i = numbersArray.length - 1; i > -1; i--) {
                if (operatorsArray[i] === '+' && operatorsArray[i - 1] === 'initial'||
                    operatorsArray[i] === '+' && operatorsArray[i - 1] ==='+') {
                    numbersArray[i - 1] = numbersArray[i - 1] + numbersArray[i];
                    operatorsArray.splice(i, 1);
                    numbersArray.splice(i, 1);
                }
                if (operatorsArray[i] === '+' && operatorsArray[i - 1] ==='-') {
                    numbersArray[i - 1] = numbersArray[i - 1] - numbersArray[i];
                    operatorsArray.splice(i, 1);
                    numbersArray.splice(i, 1);
                }
            }
        }
        if (operatorsArray.includes('-')) {
            for (let i = numbersArray.length - 1; i > -1; i--) {
                if (operatorsArray[i] === '-' && operatorsArray[i - 1] === 'initial') {
                    numbersArray[i - 1] = - numbersArray[i] + numbersArray[i - 1];
                    operatorsArray.splice(i, 1);
                    numbersArray.splice(i, 1);
                }
                if (operatorsArray[i] === '-' && operatorsArray[i - 1] ==='-') {
                    numbersArray[i - 1] = numbersArray[i - 1] + numbersArray[i];
                    operatorsArray.splice(i, 1);
                    numbersArray.splice(i, 1);
                }
            }
        }

        return numbersArray[0];
    }

    valueOf() {
        return this.number;
    }
}

module.exports = SmartCalculator;
