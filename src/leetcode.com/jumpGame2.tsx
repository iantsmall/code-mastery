import jump from "./jumpGame2";

describe("jumpGame2 tests", () => {
    test("Check no jumps", () => {
        expect(jump([0])).toBe(0);
    });
    test("Check no jumps with jump max beyond end", () => {
        expect(jump([1])).toBe(0);
    });
    test("Check series of 1 jumps", () => {
        expect(jump([1,1,1,1,1,1,1,1,1,1])).toBe(0);
    });
    test("Check jump to end [5,1,1,1,1,1]", () => {
        expect(jump([5,1,1,1,1,1])).toBe(0);
    });
    test("Check jump to end [10,1,1,1,1,1]", () => {
        expect(jump([10,1,1,1,1,1])).toBe(0);
    });
    test("Check two step jump [3,2,4,1,1,1]", () => {
        expect(jump([3,2,4,1,1,1])).toBe(0);
    });
    test("Check two step jump [3,10,1,1,1,1]", () => {
        expect(jump([3,10,1,1,1,1])).toBe(0);
    });
});