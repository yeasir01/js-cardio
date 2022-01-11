const numberRange = require('../src/script.js');

describe("numberRange", () => {
    it("Should be a function", ()=>{
        expect(typeof numberRange).toBe('function')
    })

    it('Should generate an integer array with a value of zero', () => {
        expect(numberRange(0,0)).toEqual([0]);
    });

    it('Should generate an integer array between 0-1', () => {
        expect(numberRange(0,1)).toEqual([0,1]);
    });

    it('Should generate an integer array between 1-10', () => {
        expect(numberRange(1,10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

    it('Should throw a RangeError if parameters are reversed', () => {
        expect(()=>{numberRange(10,1)}).toThrow(RangeError);
    });

    it('Should throw a TypeError if parameters are not a number', () => {
        expect(()=>{numberRange("1","10")}).toThrow(TypeError);
    });
})