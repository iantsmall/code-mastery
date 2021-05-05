/* eslint-disable max-len */
/**
 *
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Your goal is to reach the last index in the minimum number of jumps.
 * You can assume that you can always reach the last index.
 *
 *
 *
 * @see https://leetcode.com/explore/challenge/card/may-leetcoding-challenge-2021/598/week-1-may-1st-may-7th/3732/
 */

/*

## Ideas and Ruminations
A greedy search is a possible solution.
Possibly working backwards is the best option?
We'll need to be able to mark "dead ends" (return -1 is a viable solution in a recursive algorithm).
Recursive is "fine" but doesn't mark the values as dead ends, so other jumps may be retrying elements.
Infinite loops should not be possible, so we'll just prefer to optimize for space over speed for now
The ASSURED method is to check every node reachable from the current node, but that brute force is innefficient. O(!n)
The better method is to greedily search forward (possibly).

potential methods (recursive unless noted otherwise):
| Name              | Description                                                                        | Time  | Space | Notes                                    |
|****************** |*********************************************************************************** |*****  |****** |***************************************** |
| Backward Trace    | Seach backwards from end, marking each node with how many jumps from the end it is | O(n)  | O(n)  | Always works, possibly not as effecient  |
| Greedy Search     | Greedily search for the node which reaches the furthest forward                    | O(n)  | O(n)  | Possible flaws, must be proven           |

Greedy search proof:
    A: (*) nums is an array of numbers between 1 and 1000 elements long
    B: (*) i === the current index
    C: (*) the max next value of i is (i+nums[i]) (denoted as nM)
    D: (*) when i is 0 the end is reachable. ie a series of 'jumps' can eventually cause (nM+1) >= nums.length
    (E|F|G): (C&D) When i == 0 =>
        E: "The first node can jump to the end `(nums[0]+1) >= nums.length`""
        OR F: "Some next i exists where 0 < i < nM AND (i+nums[i]) > nM" (ie there is some node which reaches outide of the range of node 0)
        OR G: "The array is size 0"
    H: If G => jumps is 0 (program exit case)
    I: If !G => E|F
    J: If !G & E => jumps is 1 (program exit case)
    K: IF !(G|E) => F
    L: ((D&H&I&J&K)&(!G && !J)) => L: a series of i exists where nM can reach the end or a newly reachable next i can reach beyond nM (nums[i]+i > nM)
Thus, if we are not or cannot reach the end we should maximize our reach beyond nM with each node selection to minimize the number of jumps

## Notes

## pseudocode

define closure:
recursiveJump(idx: number) {

}
call recursiveJump(0) to start recursive search

*/
/* eslint-enable max-len */
const calcNM = (idx: number, nums: number[]) => idx + nums[idx];
const canReachEnd = (idx: number, nums: number[]) => calcNM(idx, nums) + 1 >= nums.length;
export default function jump(nums: number[]): number {
  if (nums.length === 1) {
    return 0; // immediately return, we've started at the end, no jumps needed
  }
  if (canReachEnd(0, nums)) {
    // we can reach the last node in one jump, so just return 1 without futher traversal
    return 1;
  }
  const jumpFrom = (idx: number): number => {
    const nM = calcNM(idx, nums);
    // find the next largest idx
    let furthestReachingIdx = idx;
    for (let i = idx + 1; i <= nM; i += 1) {
      if (calcNM(i, nums) > calcNM(furthestReachingIdx, nums)) {
        if (canReachEnd(i, nums)) {
          // we can shortcut, as we know now that in two jumps we can reach the end
          return 2;
        }
        // found a larger ranging index
        furthestReachingIdx = i;
      }
    }
    if (furthestReachingIdx === idx) {
      throw Error(`Unable to reach end from nums[${furthestReachingIdx}]`);
    }
    return jumpFrom(furthestReachingIdx) + 1;
  };
  return jumpFrom(0);
}
