document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items : [
            { id: 1, name: 'Bakso Goreng', img: 'basrengmenu.jpg', price: 5000},
            { id: 2, name: 'Bakso Aci ', img: 'bocimenu.jpg', price: 5000},
            { id: 3, name: 'Mie Geprek', img: 'miigeprekk.jpg', price: 5000},
            { id: 4, name: 'Ice Cream', img: 'icecreammenu.jpg', price: 5000},
        ],
    }));

    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            // Cek apakah ada barang yang sama di keranjang
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // Jika belum ada ada di cart
            if (!cartItem) {
                this.items.push({...newItem, quantity: 1, total:newItem.price });
                this.quantity++;
                this.total+= newItem.price;
            }
            else {
                // Jika barang sudah ada,cek apakah barang beda atau sama dengan yang di cart
                this.items = this.items.map((item) => {
                    // Jika barang berbeda
                    if (item.id !== newItem.id) {
                        return item;
                    }
                    else {
                        // Jika barang sudah ada,tambah quantity dan totalnya
                        item.quantity++;
                        item.total = item.price * item.quantity
                        this.quantity++;
                        this.total+= item.price;
                        return item;
                    }
                });
            }
        },
        remove(id) {
            // Ambil item yang ingin di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // Jika item lebih dari 1
            if (cartItem.quantity > 1) {
                // Telusuri 1 1
                this.items.map((item) => {
                    if (cartItem.quantity === 1) {
                        
                    }
                    // Jika bukan barang yang di klik
                    if (item.id !== id) {
                        return item;
                    }
                    else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity--;
                        this.total -= item.price;
                        return item;
                    }
                });
            }
        }
    });
});

// Konversi ke Rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0

    }).format(number);
};