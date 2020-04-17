import * as React from 'react';
import MemberHeader from './memberheader'
import {memberAPI} from '../api/member/index'
import { MemberEntity } from '../model';
import { members } from '../api/member/mockData';
import MemberRow from './MemberRow'
interface Props{}
interface State{
    members: MemberEntity[]
}

export class MembersPage extends React.Component<Props,State> {
    constructor(props){
        super(props)
        this.state = {
            members: []
        }
        
    }

    public componentDidMount(){
        memberAPI
          .fetchMembers()
          .then((members) => {
            //   console.log(members)
              this.setState({
                  members
              })
          })
    }

    public render(){
        return (
            <div className="row">
                <h2>Members Page</h2>
                <table className="table">
                    <thead>
                        <MemberHeader></MemberHeader>
                    </thead>
                    {/* <thead><MemberRow /></thead> */}
                    <tbody>
                        {
                            this.state.members.map((member) =>
                                <MemberRow key={member.id} member={member}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}