describe('SUDO Coding Challenge', function() {
    var expect = chai.expect;

    describe('reverseString', function() {
        it('should return the correct property (input: ODUS)', function() {
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
});
