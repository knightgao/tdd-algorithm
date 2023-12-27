import { describe, it, expect } from 'vitest';
import { removeElement } from './remove-element.js';

describe('removeElement', () => {
    it('should remove all occurrences of the value and return the new length', () => {
        const nums1 = [3, 2, 2, 3];
        const result1 = removeElement(nums1, 3);
        expect(result1).toBe(2);
        expect(nums1.slice(0, result1)).toEqual([2, 2]);

        const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
        const result2 = removeElement(nums2, 2);
        expect(result2).toBe(5);
        expect(new Set(nums2.slice(0, result2))).toEqual(new Set([0, 1, 3, 0, 4]));
    });

    it('should handle an empty array', () => {
        const nums = [];
        const result = removeElement(nums, 1);
        expect(result).toBe(0);
    });

    it('should handle an array where all elements are the value', () => {
        const nums = [2, 2, 2];
        const result = removeElement(nums, 2);
        expect(result).toBe(0);
    });

    it('should handle an array where no elements are the value', () => {
        const nums = [1, 1, 1];
        const result = removeElement(nums, 2);
        expect(result).toBe(3);
        expect(nums).toEqual([1, 1, 1]);
    });
});
