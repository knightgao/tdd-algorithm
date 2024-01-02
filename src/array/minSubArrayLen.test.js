import { describe, it, expect } from 'vitest';
import { minSubArrayLen } from './minSubArrayLen'; // Replace with your actual file path

describe('minSubArrayLen', () => {
    it('returns the minimal length of a subarray whose sum is >= target', () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2); // Example 1
        expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);          // Example 2
    });

    it('returns 0 if no such subarray exists', () => {
        expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0); // Example 3
    });

    it('handles an array with a single element', () => {
        expect(minSubArrayLen(5, [5])).toBe(1);
        expect(minSubArrayLen(10, [5])).toBe(0);
    });

    it('handles the case where the target is smaller than all elements', () => {
        expect(minSubArrayLen(1, [2, 3, 4])).toBe(1);
    });
});
