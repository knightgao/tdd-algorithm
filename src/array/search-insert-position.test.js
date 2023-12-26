import { describe, it, expect } from 'vitest';
import { modifiedBinarySearch } from './search-insert-position.js'; 

describe('modifiedBinarySearch', () => {
    it('should return the index of the target if present', () => {
        expect(modifiedBinarySearch([1, 3, 5, 6], 5)).toBe(2);
    });

    it('should return the index where the target would be inserted', () => {
        expect(modifiedBinarySearch([1, 3, 5, 6], 2)).toBe(1);
        expect(modifiedBinarySearch([1, 3, 5, 6], 7)).toBe(4);
        expect(modifiedBinarySearch([1, 3, 5, 6], 0)).toBe(0);
    });

    it('should handle an empty array', () => {
        expect(modifiedBinarySearch([], 5)).toBe(0);
    });

    it('should work with a single element array', () => {
        expect(modifiedBinarySearch([4], 4)).toBe(0);
        expect(modifiedBinarySearch([4], 3)).toBe(0);
        expect(modifiedBinarySearch([4], 5)).toBe(1);
    });

    it('should handle cases where the target is the first or last element', () => {
        expect(modifiedBinarySearch([1, 3, 5, 6], 1)).toBe(0);
        expect(modifiedBinarySearch([1, 3, 5, 6], 6)).toBe(3);
    });
});
