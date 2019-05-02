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

    describe("FizzBuzz", function() {
        it("should return the correct array(input: [2, 1])", function(){
            let correct = [];
            let test = FizzBuzz([2, 1]);
            expect(test).to.be.an("array");
            expect(test).to.eql(correct);
        });
        it("should return the correct array(input: [3, 5, 11, 12]", function() {
            let correct = ["Fizz", "Buzz", "Fizz"];
            let test = FizzBuzz([3, 5, 11, 12]);
            expect(test).to.be.an("array");
            expect(test).to.eql(correct);
        });
        it("should return the correct array(input: [3, 6, 5, 8, 11, 15, 30, 12]", function() {
            let correct = ["Fizz", "Fizz", "Buzz", "FizzBuzz", "FizzBuzz", "Fizz"];
            let test = FizzBuzz([3, 6, 5, 8, 11, 15, 30, 12]);
            expect(test).to.be.an("array");
            expect(test).to.eql(correct);
        })
    })
});