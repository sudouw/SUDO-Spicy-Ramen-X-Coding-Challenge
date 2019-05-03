describe('SUDO Coding Challenge 2019', function() {
    var expect = chai.expect;

    describe('reverseString', function() {
        it('should return the correct property (input: "ODUS")', function() {
            let reversedString = 'SUDO';
            let result = reverseString('ODUS');
            expect(result).to.be.a('string');
            expect(result).to.eql(reversedString);
        });
        it('should handle non string cases (input: 100)', function() {
            let result = reverseString(100);
            expect(result).to.be.undefined;
        });
    });

    describe('fizzBuzz', function() {
        it('should return the correct array(input: [2, 1])', function() {
            let correct = [];
            let test = fizzBuzz([2, 1]);
            expect(test).to.be.an('array');
            expect(test).to.eql(correct);
        });
        it('should return the correct array(input: [3, 5, 11, 12]', function() {
            let correct = ['Fizz', 'Buzz', 'Fizz'];
            let test = fizzBuzz([3, 5, 11, 12]);
            expect(test).to.be.an('array');
            expect(test).to.eql(correct);
        });
        it('should return the correct array(input: [3, 6, 5, 8, 11, 15, 30, 12]', function() {
            let correct = [
                'Fizz',
                'Fizz',
                'Buzz',
                'FizzBuzz',
                'FizzBuzz',
                'Fizz'
            ];
            let test = fizzBuzz([3, 6, 5, 8, 11, 15, 30, 12]);
            expect(test).to.be.an('array');
            expect(test).to.eql(correct);
        });
        it("should handle non array inputs(input: 'ILoveSudo'", function() {
            let test = fizzBuzz('ILoveSudo');
            expect(test).to.be.undefined;
        });
    });

    describe('arrayFibonacci', function() {
        it('should return an array [0, 1, 1, 2, 3, 5] for start = 0, end = 6', function() {
            let output = arrayFibonacci(0, 6);
            expect(output).to.eql([0, 1, 1, 2, 3, 5]);
        });
        it('should return an array [2, 3, 5] for start = 2, end = 5', function() {
            let output = arrayFibonacci(2, 5);
            expect(output).to.eql([2, 3, 5]);
        });
        it('should return undefined for start = 0, end = 0', function() {
            let output = arrayFibonacci(0, 0);
            expect(output).to.be.undefined;
        });
        it('should return undefined for no input', function() {
            let output = arrayFibonacci();
            expect(output).to.be.undefined;
        });
        it('should return undefined for negative inputs', function() {
            let output = arrayFibonacci(-1, 0);
            expect(output).to.be.undefined;
        });
        it('should return undefined for start = 5, end = 1', function() {
            let output = arrayFibonacci(5, 1);
            expect(output).to.be.undefined;
        });
        it('should return undefined for start = 1.5, end = 3.5', function() {
            let output = arrayFibonacci(1.5, 3.5);
            expect(output).to.be.undefined;
        });
    });
});
