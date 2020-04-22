const helpers = require('./project-1');

// start testing!
describe('projeckt-1.js', () => {
    describe('helpers.multiplyByTen()', function() {
        it('should multiply by ten', function() {
            expect(helpers.multiplyByTen(4)).toBe(40);
            expect(helpers.multiplyByTen(0)).toBe(0);
            expect(helpers.multiplyByTen(-5)).toBe(-50);
        })
    })
});