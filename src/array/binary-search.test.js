import { expect, describe,it } from 'vitest'
import { binarySearch } from './binary-search.js'

describe('binarySearch', () => {
    it('should return the index of the target if present', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
        expect(binarySearch([10, 20, 30, 40, 50], 40)).toBe(3);
    });

    it('should return -1 if the target is not present', () => {
        expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
        expect(binarySearch([10, 20, 30, 40, 50], 60)).toBe(-1);
    });

    it('should work with an array of one element', () => {
        expect(binarySearch([1], 1)).toBe(0);
        expect(binarySearch([2], 3)).toBe(-1);
    });

    it('should return -1 for an empty array', () => {
        expect(binarySearch([], 1)).toBe(-1);
    });
});