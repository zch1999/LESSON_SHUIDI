import * as React from 'react';

const MemberHeader:React.StatelessComponent<{}> = () => {
    return (
        <tr>
            <th>Avatar</th>
            <th>id</th>
            <th>login</th>
        </tr>
    )
}

export default MemberHeader;