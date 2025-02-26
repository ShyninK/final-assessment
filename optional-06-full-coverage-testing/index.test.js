import { it, describe, expect } from 'bun:test';
import sum from './index.js';

describe('Tes perhitungan fungsi sum(a+b)', () => {

    // test 1.1 : a != number
    it('Tes Parameter a Bukan Number', () => {

        // Arrange
        const A = '5';
        const B = 2;
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });

    // test 1.2 : b != number
    it('Tes Parameter b Bukan Number', () => {

        // Arrange
        const A = 5;
        const B = '2';
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });

    // test 2.1 : a < 0
    it('Tes Parameter a < 0', () => {

        // Arrange
        const A = -5;
        const B = 3;
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });

    // test 2.2 : b < 0
    it('Tes Parameter b < 0', () => {
        
        // Arrange
        const A = 3;
        const B = '6';
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });

    // test 3 : a + b
    it('Tes Hasil a + b', () => {
        
        // Arrange 
        const a = 2;
        const b = 2;
        // Act
        const result = sum(a, b);
        // Assert
        expect(result).toBe(4);
    });

    // test 4.1 : a = null
    it('Tes Parameter a = null', () => {
        
        // Arrange
        const A = null;
        const B = 2;
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });

    // test 4.2 : b = null
    it('Tes Parameter b = null', () => {
        
        // Arrange
        const A = 2;
        const B = null;
        // Act
        const result = sum(A, B);
        // Assert
        expect(result).toBe(0);
    });
});