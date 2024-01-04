import { describe, it, expect } from 'vitest';
import { generateSpiralMatrix } from './generateMatrix'; // Replace with your actual file path

describe('generateSpiralMatrix', () => {
    it('generates a 3x3 matrix in spiral order', () => {
        const result = generateSpiralMatrix(3);
        expect(result).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
    });

    it('generates a 1x1 matrix in spiral order', () => {
        const result = generateSpiralMatrix(1);
        expect(result).toEqual([[1]]);
    });

    it('generates a 4x4 matrix in spiral order', () => {
        const result = generateSpiralMatrix(4);
        expect(result).toEqual([[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]);
    });

    it('generates a 5x5 matrix in spiral order', () => {
        const result = generateSpiralMatrix(5);
        expect(result).toEqual([
            [1, 2, 3, 4, 5],
            [16, 17, 18, 19, 6],
            [15, 24, 25, 20, 7],
            [14, 23, 22, 21, 8],
            [13, 12, 11, 10, 9]
        ]);
    });

    // Add more test cases if necessary
});
