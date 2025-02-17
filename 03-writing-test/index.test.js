import { it, describe, expect } from 'bun:test';
import { sum } from './index.js';

describe('Testing Sum function', () => {

        // test positive + positive number
        it('Test Logic Calculation', () => {
            
            // Arrange
            const numA = 1;
            const numB = 2;

            // Act
            const result = sum(numA, numB);

            // Assert
            const expected = 3;
            expect(result).toBe(expected);
        });

        // test positive + negative number
        it('Test Negative Number', () => {
            
            // Arrange
            const numA = 1;
            const numB = -2;

            // Act
            const result = sum(numA, numB);

            // Assert
            const expected = -1;
            expect(result).toBe(expected);
        });

        // test negative + negative number
        it('Test Negative Number', () => {
            
            // Arrange
            const numA = -1;
            const numB = -2;

            // Act
            const result = sum(numA, numB);

            // Assert
            const expected = -3;
            expect(result).toBe(expected);
        });

        // test zero number
        it('Test Zero Number', () => {
            
            // Arrange
            const numA = 0;
            const numB = 1

            // Act
            const result = sum(numA, numB);

            // Assert
            const expected = 1;
            expect(result).toBe(expected);
        });
});