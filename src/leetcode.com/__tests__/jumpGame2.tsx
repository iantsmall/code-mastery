import jump from '../jumpGame2';

describe('jumpGame2 tests', () => {
  test('Check no jumps', () => {
    expect(jump([0])).toBe(0);
  });
  test('Check no jumps with jump max beyond end', () => {
    expect(jump([1])).toBe(0);
  });
  test('Check series of 1 jumps', () => {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const numsLength = nums.length;
    expect(jump(nums)).toBe(numsLength - 1);
  });
  test('Check [2,3,1,1,4]', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2);
  });

  test('Check jump to end [5,1,1,1,1,1]', () => {
    expect(jump([5, 1, 1, 1, 1, 1])).toBe(1);
  });
  test('Check jump to end [10,1,1,1,1,1]', () => {
    expect(jump([10, 1, 1, 1, 1, 1])).toBe(1);
  });
  test('Check two step jump [3,2,4,1,1,1]', () => {
    expect(jump([3, 2, 4, 1, 1, 1])).toBe(2);
  });
  test('Check two step jump [3,10,1,1,1,1]', () => {
    expect(jump([3, 10, 1, 1, 1, 1])).toBe(2);
  });
  test('Check  step jump [3, 4, 1, 1, 1, 1]', () => {
    expect(jump([3, 4, 1, 1, 1, 1])).toBe(2);
  });
  test('Check 3 step jump [3, 3, 1, 1, 1, 1]', () => {
    expect(jump([3, 3, 0, 1, 1, 1])).toBe(3);
  });
  test('Check 3 step jump [3,4,3,1,0,7,0,3,0,2,0,3]', () => {
    expect(jump([3, 4, 3, 1, 0, 7, 0, 3, 0, 2, 0, 3])).toBe(3);
  });
});
