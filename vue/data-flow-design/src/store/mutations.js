import {
    RECORD_USERINFO,
    ADD_CART,
    EDIT_CART,
    CHECK,
    INCREMENT_QUANTITY
} from './mutation-types'

export default {
    //login
    [RECORD_USERINFO]: (state, info) =>{
        state.useInfo = info;
        state.login = true
    },
    [ADD_CART](state, {productId}){

    },
    [EDIT_CART](state){

    },
    [INCREMENT_QUANTITY](state){

    },
    [CHECK](){

    }
}