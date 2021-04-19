const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            stock: 0,
            onSale: false,
        }
    }
})