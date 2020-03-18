const _products = [
    {"id": 1, "title": "ipad mini", "price": 500.01, "inventory": 2},
    {"id": 2, "title": "H&M T-shirt White", "price": 10.99, "inventory": 10.99},
    {"id": 3, "title": "Chari CD", "price": 19.99, "inventory": 5}
]

export default {
    getProducts(cb){
        // console.log(cb)
        setTimeout(() => cb(_products), 1000);
    }
}