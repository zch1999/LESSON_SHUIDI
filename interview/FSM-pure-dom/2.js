

let htmlStr = `<html>
 <head></head>
 <body>
    <div></div>
 </body>
</html>
`;
// 分词
// DOM树 节点有 类型
// { type: element, tagName: 'html', tag: 'startTag'}
// { type: element, tagName: 'html', tag: 'endTag'}
let currentToken = null;
let stack = [
  {type: 'document', children: []}
]
function parse(string) {
  let state = start;
  for (let c of string) {
    // \n
    state = state(c);
  }
}
parse(htmlStr);
function start(c) {
  if (c === '<') {
    return tagOpen;
  } else {
    return start;
  }
}
function tagOpen(c) {
  if (c === '/') {
    // </h 结束标签
    return endTagOpen
  } else if (c.match(/^[a-zA-Z]$/)) {
    // <h  开始标签 去拼接 
    currentToken = {
      type: 'element',
      tag: 'startTag',
      tagName: c
    }
    return tagName;
  }
}
function tagName(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken.tagName += c;
    // 
    return tagName;
    // 什么时候拼接完？？
  } else if (c === '>') {
    // 提交 当前 token
    emit(currentToken);
    return start;
  }
}
function endTagOpen(c) {
  if (c.match(/^[a-zA-Z]$/)) {
    currentToken = {
      type: 'element',
      tag: 'endTag',
      tagName: c
    }
    // 也要拼接
    return tagName;
  }
}


console.log(JSON.stringify(stack, null, 2))
function emit(token) {
  let top = stack[stack.length - 1]
  if(token.tag === 'startTag') {
    let element = {
      type: 'element',
      children: [],
      attribute: [],
      tagName: token.tagName
    }
    top.children.push(element)
    stack.push(element)
  }else if(token.tag == 'endTag'){
    stack.pop()
  }else {
    throw new Error('no match')
  }
  console.log(token);
}