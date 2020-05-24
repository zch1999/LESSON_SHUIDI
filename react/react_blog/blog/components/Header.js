import React, { useEffect, useState } from 'react'
import '../public/style/components/header.css'
import {Row,Col,Menu,Icon} from 'antd'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'



const Header =() => {
  const [navArray, setnavArray] = useState([])
  //获取文章分类数据
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo)
        .then((res) => {
          return res.data.data
        })
      setnavArray(result)
    }
    fetchData()
  },[])

  // 跳转
  const handleClick = (e) => {
    if(e.key == 0){
      Router.push('/index')
    }else {
      Router.push('/list?id=' + e.key)
    }
  }

  return(
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo"><a href="/">FromTheSea</a></span>
          <span className="header-txt">做正确的事，永远不会错</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal" onClick={handleClick}>
            <Menu.Item key="0">
              <Icon type="home"/>
              首页
            </Menu.Item>
            {
              navArray.map((item) => {
                return (
                  <Menu.Item key={item.Id}>
                    <Icon type={item.icon}/>
                    {item.typeName}
                  </Menu.Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header