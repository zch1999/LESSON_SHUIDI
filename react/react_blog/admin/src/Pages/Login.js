import React , {useState} from 'react'
import 'antd/dist/antd.css'
import { Card, Input, Button, Spin } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import '../static/css/Login.css'

function Login(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    const checklogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    }

    return (
        <div className="login-div">
           <Spin tip="Loading..." spinning={isLoading}>
               <Card title="Blog System" bordered={true} style={{width:400}}>
                   <Input 
                        id="username"
                        size="large"
                        placeholder="Enter your username"
                        prefix={<UserOutlined  style={{color:'rgba(0,0,0,.25)'}} />}
                        onChange={(e) => {
                            setUserName(e.target.value)
                        }}
                        />
                    <br/><br/>
                    <Input.Password 
                        id="password"
                        size="large"
                        placeholder="Enter your password"
                        prefix={<KeyOutlined style={{color:'rgba(0,0,0,0.25)'}} />}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        />
                    <br/><br/>
                    <Button type="primary" size="large" block onClick={checklogin}>Login in</Button>
               </Card>
           </Spin>
        </div>
    )
}
export default Login