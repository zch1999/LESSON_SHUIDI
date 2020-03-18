const state = {
    items: [],
    checkoutStatus: null
}
const mutations = {
    pushproToCart(state, {id}){
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, {id}){
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }
}
const actions = {
    addProductToCart( {commit}, pro){
        console.log(pro.inventory)
        if(pro.inventory > 0){
            const cartItem = state.items.find(item => item.id == pro.id)
            if(!cartItem){
                commit('pushproToCart', {id: pro.id})
            }else{
                commit('incrementItemQuantity', cartItem)
            }
        }
        // console.log('payload')
        // return state.items.map(({id, quantity}) => {
        //     const pro = rootState.pro.all.find(pro => pro.id = id)
        // })
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