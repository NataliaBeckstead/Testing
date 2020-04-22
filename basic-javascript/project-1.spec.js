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
    describe('helpers.subtractFive()', function() {
        it('should subtract five', function() {
            expect(helpers.subtractFive(5)).toBe(0);
            expect(helpers.subtractFive(15)).toBe(10);
            expect(helpers.subtractFive(0)).toBe(-5);
        })
    })
    describe('helpers.areSameLength()', function() {
        it('should check if length of two strings are equal', function() {
            expect(helpers.areSameLength("string", "string")).toBe(true);
            expect(helpers.areSameLength("string", "stng")).toBe(false);
            expect(helpers.areSameLength("abc", "def")).toBe(true);
        })
    })
    describe('helpers.areEqual()', function() {
        it('should check two numbers are equal', function() {
            expect(helpers.areEqual(4, 4)).toBe(true);
            expect(helpers.areEqual(5, 8)).toBe(false);
            expect(helpers.areEqual(-5, -5)).toBe(true);
            expect(helpers.areEqual(-5, 5)).toBe(false);
        })
    })
    describe('helpers.lessThanNinety()', function() {
        it('should check if a number less than 90', function() {
            expect(helpers.lessThanNinety(85)).toBe(true);
            expect(helpers.lessThanNinety(120)).toBe(false);
            expect(helpers.lessThanNinety(-120)).toBe(true);
            expect(helpers.lessThanNinety(91)).toBe(false);
        })
    })
    describe('helpers.greaterThanFifty()', function() {
        it('should check if a number greater than 50', function() {
            expect(helpers.greaterThanFifty(85)).toBe(true);
            expect(helpers.greaterThanFifty(30)).toBe(false);
            expect(helpers.greaterThanFifty(51)).toBe(true);
            expect(helpers.greaterThanFifty(50)).toBe(false);
        })
    })
});