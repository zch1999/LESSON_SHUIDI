import shop from '../../api/shop'

const state = {
    all: [
        {
            id: 1,
            name: 'ipad'
        }
    ]
}
const mutations = {
    setProducts(state, products){
        state.all = products
    }
}
const actions = {
    addProductToCart( {commit}, pro){
        // console.log(state.all)
        if(pro.inventory > 0){
            const cartItem = state.all.find(item => item.id == pro.id)
            console.log(cartItem)
            if(!cartItem){
                commit('pushproToCart', {id: pro.id})
            }else{
                commit('incrementItemQuantity', cartItem)
            }
        }
    },
    getAllProducts( {commit} ){
        // console.log('lll')
        shop
            .getProducts(products =>{
                commit('setProducts', products)
            })
    }
}
const getters = {

}

export default {
    namespaced: true, //命名空间
    state,
    mutations,
    actions,
    getters
}