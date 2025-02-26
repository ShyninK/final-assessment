import { it, describe, expect } from 'bun:test';
import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

describe('Test Orders', () => {

    // Test 1 : melihat output orders dalam bentuk array dan object
    // status : Passed
    it('Test output Orders', () => {

        // Arrange
        addOrder('Alice', [
            { name: 'Nasi Goreng', price: 20000 },
            { name: 'Teh Manis', price: 5000 }
        ]);

        // Act
        console.log(orders);

        // Assert
        expect(orders[0].customerName).toBe('Alice');
    });

    // Test 2 : mengecek fungsi addOrders
    // status : Passed
    it('Test addOrder', () => {

        // Arrange
        addOrder('Bob', [
            { name: 'Mie Goreng', price: 15000 },
            { name: 'Kopi', price: 10000 }
        ]);

        // Act
        console.log(orders);

        // Assert
        expect(orders[1].customerName).toBe('Bob');
    });

    // Test 3 : mengecek fungsi updateOrdersStatus
    // status : Passed
    it('Test updateOrderStatus', () => {

        // Arrange
        updateOrderStatus(orders[0].id, 'Diproses');
        // Act
        console.log(orders);
        // Assert
        expect(orders[0].status).toBe('Diproses');
    });

    // Test 4 : testing fungsi calculateOrders
    // status : Passed
    it('Test calculateTotalRevenue', () => {
        // Arrange
        addOrder('Charlie', [
            { name: 'Soto Ayam', price: 25000 },
            { name: 'Es Teh', price: 7000 }
        ]);
        // Act
        updateOrderStatus(orders[2].id, 'Selesai');
        // Assert
        console.log(orders);
    });

    // Test 4 : fungsi delete Orders
    // status : Passed
    it('Test deleteOrder', () => {
        // Arrange
        deleteOrder(orders[1].id);
        // Act
        console.log(orders);
        // Assert
        expect(orders.length).toBe(2);
    });
});