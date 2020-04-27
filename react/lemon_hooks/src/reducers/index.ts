import { combineReducers } from "redux"
import { membersReducer } from './members'
import { MemberEntity } from '../model'

export interface State{
  members: MemberEntity[]
}
export const state = combineReducers({
  members: membersReducer,

})