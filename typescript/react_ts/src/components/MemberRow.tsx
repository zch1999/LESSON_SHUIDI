import * as React from 'react'
import { MemberEntity } from '../model';
import './a.css'

class MemberRow extends React.Component<{member:MemberEntity}> {
    constructor(props) {
        super(props)
        console.log(this.props.member)
    }
    render() {
        const member = this.props.member
        console.log(member.id)
        // console.log(member.login)
        return (
            <tr>
                <td ><img src={member.avatar_url} alt=""/></td>
                <td>{member.id}</td>
                <td>{member.login}</td>
            </tr>
        )
    }
}

// const MemberRow:React.StatelessComponent<{}> = () => {
//     return (
//         <tr>
//             <th>Avatar</th>
//             <th>id</th>
//             <th>login</th>
//         </tr>
//     )
// }

// export default MemberHeader;

export default MemberRow