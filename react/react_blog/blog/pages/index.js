import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Row, Col, List, Icon } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'

export default function Home(list) {
  const [mylist, setMylist] = useState(list.data)
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List 
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">
                  <Link href={{pathname:'/detailed', query:{id: item.id}}}>
                    <a>{item.title}</a>
                  </Link>
                  </div>
                <div className="list-icon">
            <span><Icon type="calendar" />{item.addTime}</span>
            <span><Icon type="folder" />{item.typeName}</span>
            <span><Icon type="fire" />{item.view_count}</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
            />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advert></Advert>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async ()=> {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getActicleList').then((res) => {
      // console.log(res.data,'+++')
      resolve(res.data)
      resolve(res.data.data[0])
    })
  })
  return await promise
}