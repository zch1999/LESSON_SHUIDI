const router = require('koa-router')();
const controller = require('../controller/c-ports');

router.get('/posts',controller.getPosts);

module.exports = router;