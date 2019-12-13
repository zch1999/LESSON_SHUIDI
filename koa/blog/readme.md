koa node轻量级开发框架

comment create table
    id
    name 用户名称
    content 评论内容
    moment 评论时间
    postid 文章id
    avatar 用户头像
create table comment(
    id int primary,
    name var(255),
    content var(255),
    moment datetime,
    postid int,
)

- mvc 
    routers 一个模块一个文件
    
