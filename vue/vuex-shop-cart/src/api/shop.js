const _products = [
    {"id": 1, "title": "ipad mini", "price": 500.01, "incentory": 2},
    {"id": 2, "title": "H&M T-shirt White", "price": 10.99, "incentory": 10.99},
    {"id": 3, "title": "Chari CD", "price": 19.99, "incentory": 5}
]

export default {
    getProducts(cb){
        console.log(cb)
        setTimeout(() => cb(_products), 1000);
    }
}