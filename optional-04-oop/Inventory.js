/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungsi `item.displayDetails()`).
 */

import Item from "./Item.js";

class Inventory {
    constructor() {
        this.items = []; //array items
    }

    // method add item to inventory
    addItem(item) {
        this.items.push(item);
    }

    // method remove item from inventory
    removeItem(id) {
        this.items = this.items.filter( item => item.id !== id );
    }

    // display items
    listItems() {
        return this.items.map(item => item.displayDetails()).join('\n');
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
