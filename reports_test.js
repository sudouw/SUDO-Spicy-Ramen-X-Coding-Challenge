describe("SUDO Coding Challenge", function() {
    var expect = chai.expect;

    describe("add", function() {
        it("should return the correct property (input: 25, 75)", function() {
            let sum = 100;
            let result = add(25, 75);
            expect(result).to.be.a("number");
            expect(result).to.eql(sum);
        });
        it("should handle non numerical cases (input: 'Sudo', 50)", function() {
            let sum = 100;
            let result = add("Sudo", 50);
            expect(result).to.be.undefined;
        });
    });

    describe("subtract", function() {
        it("should return the correct property (input: 70, 50)", function() {
            let difference = 20;
            let result = subtract(70, 50);
            expect(difference).to.be.a("number");
            expect(difference).to.eql(result);
        });
        it("should handle non numerical cases (input: 'Sudo', 50)", function() {
            let sum = 100;
            let result = subtract("Sudo", 50);
            expect(result).to.be.undefined;
        });
    });

    describe("printEvens", function() {
        it("should return the correct property (input: 10)", function() {
            let evenTilTen = [0,2,4,6,8,10];
            let evens = printEvens(10);
            expect(evens).to.be.an("array");
            expect(evens).to.eql(evenTilTen);
        });
        it("should return the correct property (input: 0)", function() {
            let evenTilTen = [0];
            let evens = printEvens(0);
            expect(evens).to.be.an("array");
            expect(evens).to.eql(evenTilTen);
        });
        it("should return empty array for negative inputs (input: -10)", function() {
            let evenTilTen = [];
            let evens = printEvens(-10);
            expect(evens).to.be.an("array");
            expect(evens).to.eql(evenTilTen);
        });
        it("should return the correct property (input: 2)", function() {
            let evenTilTen = [0,2];
            let evens = printEvens(2);
            expect(evens).to.be.an("array");
            expect(evens).to.eql(evenTilTen);
        });
        it("should handle non numerical case (input: 'Sudo')", function() {
            let evens = printEvens("Sudo");
            expect(evens).to.be.undefined;
        });
        it("should handle null inputs (input: null)", function() {
            let evens = printEvens(null);
            expect(evens).to.be.undefined;
        });
    });

    describe('arrayFibonacci', function() {
        it('should return an array [0, 1, 1, 2, 3, 5] for start = 0, end = 3', function() {
            let output = arrayFibonacci(0,6);
            expect(output).to.eql([0,1,1,2,3,5]);
        });
        it('should return an array [1, 2, 3] for start = 2, end = 5', function() {
            let output = arrayFibonacci(2, 5);
            expect(output).to.eql([1,2,3]);
        })
        it('should return undefined for start = 0, end = 0', function() {
            let output = arrayFibonacci(0,0);
            expect(output).to.be.undefined;
        })
        it('should return undefined for no input', function() {
            let output = arrayFibonacci();
            expect(output).to.be.undefined;
        })
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