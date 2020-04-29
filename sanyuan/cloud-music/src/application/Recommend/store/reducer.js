// //返回recommend的状态
// import * as actionTypes from './constants';
import { fromJS } from 'immutable';

//状态不可改变,改变了就返回新的状态
const defaultState = fromJS({
  bannerList: []
})
// console.log(defaultState,'====')

export default (state = defaultState) => {
  return state
}