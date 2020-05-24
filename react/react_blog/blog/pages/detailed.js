import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../public/style/pages/detailed.css'
import Axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'
import servicePath from '../config/apiUrl' 

Detailed.getInitialProps = async(context) => {
  // console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    Axios(servicePath.getArticleById + id).then((res) => {
      // console.log(res)
      resolve(res.data.data[0])
    })
  })
  return await promise
}

export default function Detailed(props) {
  const tocify = new Tocify()
  const renderer = new marked.Renderer()
  renderer.heading = function(text, level, raw){
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }
  marked.setOptions({
    renderer: renderer,
    //github样式
    gfm: true,
    //容错
    pedantic: false,
    // 不忽略html标签
    sanitize: false,
    //github样式
    tables: true,
    //github换行符
    breaks: false,
    //渲染列表
    smartLists: true,
    //代码高亮
    highlight: function(code){
      return hljs.highlightAuto(code).value
    }
  })
  let html= marked(props.article_content)
  return (
    <div className="container">
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>xxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
          <div>
            <div className="detailed-title">
              React实战学习,blog开发
            </div>
            <div className="list-icon center">
              <span><Icon type="calendar" />2020-05-03</span>
              <span><Icon type="folder" />视频教程</span>
              <span><Icon type="fire" />5687人</span>
            </div>
            <div className="detailed-content"
              dangerouslySetInnerHTML={{__html:html}}
            >
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          {/* <Author /> */}
          {/* <Advert /> */}
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
              {tocify && tocify.render()}
          </div>
        </Col>
      </Row>
    </div>
  )
}
