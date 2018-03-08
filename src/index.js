class SmartCalculator {
    constructor(initialValue) {
        SmartCalculator.calculation = `${initialValue}`;
        this.number = 0;
    }

    add(number) {
        SmartCalculator.calculation = SmartCalculator.calculation.concat(`+${number}`);
        this.number = (eval(SmartCalculator.calculation));
        return this;
    }

    subtract(number) {
        SmartCalculator.calculation = SmartCalculator.calculation.concat(`-${number}`);
        this.number = (eval(SmartCalculator.calculation));
        return this;
    }

    multiply(number) {
        SmartCalculator.calculation = SmartCalculator.calculation.concat(`*${number}`);
        this.number = (eval(SmartCalculator.calculation));
        return this;
    }

    devide(number) {
        SmartCalculator.calculation = SmartCalculator.calculation.concat(`/${number}`);
        this.number = (eval(SmartCalculator.calculation));
        return this;
    }

    pow(number) {
        SmartCalculator.calculation = SmartCalculator.calculation.concat(`**${number}`);
        this.number = (eval(SmartCalculator.calculation));
        return this;
    }

    valueOf(){
        return this.number;
    }
}

module.exports = SmartCalculator;
