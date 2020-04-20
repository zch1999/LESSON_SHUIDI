import * as React from 'react'
import { HelloComponent } from './hello'

export const App = () => {
    const [name,setName] = React.useState('initname')
    const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
        
    }
    return (
        <>
          <HelloComponent userName={name}/>
          <NameEditComponent userName={name} onChange={setUsernameState}/>
        </>
    )
}