import * as React from 'react'
import { MemberEntity } from '../../model'

interface Props {
  members: MemberEntity[],
  fetchMembers(): void
}

export class MembersPage extends React.Component<Props,{}> {
  constructor(props){
    super(props)
    this.state = { members: []}
  }

  public componentDidMount() {
    this.props.fetchMembers()
  }

  public render() {
    return (
      <div className="row">
        <h2>Member Page</h2>
        <table className="table">
          <thead>
            <th>ID</th>
            <th>Login</th>
            <th>Avatar</th>
          </thead>
          <tbody>
            {
              this.props.members
            }
          </tbody>
        </table>
      </div>
    )
  }
}