import { describe, it, expect } from 'vitest';
import { removeDuplicates } from './remove-duplicates.js'; // Replace with the correct path

describe('removeDuplicates', () => {
    it('should remove duplicates and return the new length', () => {
        const nums1 = [1, 1, 2];
        const k1 = removeDuplicates(nums1);
        expect(k1).toBe(2);
        expect(nums1.slice(0, k1)).toEqual([1, 2]);

        const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k2 = removeDuplicates(nums2);
        expect(k2).toBe(5);
        expect(nums2.slice(0, k2)).toEqual([0, 1, 2, 3, 4]);
    });

    it('should handle an array with all unique elements', () => {
        const nums = [1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
    });

    it('should handle an array with all same elements', () => {
        const nums = [2, 2, 2, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([2]);
    });

    it('should handle an empty array', () => {
        const nums = [];
        const k = removeDuplicates(nums);
        expect(k).toBe(0);
        expect(nums).toEqual([]);
    });
});
