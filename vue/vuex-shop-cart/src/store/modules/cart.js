import shop from "../../api/shop"

const state = {
    items: [],
    checkoutStatus: null
}
const mutations = {
    setCartItems(state, {items} ){
        state.items = items
    },
    setCheckoutStatus(state,status){
        console.log(status)
        state.checkoutStatus = status
    },
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
    checkout({commit}, products){
        // console.log(products)
        const savedCartItems = [...state.items]
        // console.log(savedCartItems)
        commit('setCheckoutStatus', null)
        commit('setCartItems', {items: []})
        // console.log('kkkkk')
        shop.buyProducts(
            products,
            () => commit('setCheckoutStatus', 'successful'),
            () => {
                commit('setCheckoutStatus', 'failed')
                commit('setCartItems', {items: savedCartItems})
            }
        )
    },
    addProductToCart( {commit}, pro){
        // console.log(pro.inventory)
        if(pro.inventory > 0){
            const cartItem = state.items.find(item => item.id == pro.id)
            if(!cartItem){
                commit('pushproToCart', {id: pro.id})
            }else{
                commit('incrementItemQuantity', cartItem)
            }
            commit('product/decrementProductInventory', {id: pro.id}, {root: true})
        }
        // console.log('payload')
        // return state.items.map(({id, quantity}) => {
        //     const pro = rootState.pro.all.find(pro => pro.id = id)
        // })
    }
}
const getters = {
    cartProducts (state, getters, rootState){
        return state.items.map(({ id, quantity }) => {
          const product = rootState.product.all.find(product => product.id === id)
          return {
            title: product.title,
            price: product.price,
            quantity
          }
        })
    },  
    cartTotalPrice(state, getters){
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        },0)
    }
}

export default {
    namespaced: true, //命名空间
    state,
    mutations,
    actions,
    getters
}