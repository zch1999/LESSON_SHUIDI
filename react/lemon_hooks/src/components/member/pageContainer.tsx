import * as React from 'react'
import { connect } from 'react-redux'
import { MembersPage } from './page'
import { State } from '../../reducers'

const mapStateToProps = (state: State) => ({
  members: state.members
})
const mapDispatchToProps = (dispatch) => ({
  fetchMembers: () => {
    console.log('action')
  }
})
export const MembersPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MembersPage)