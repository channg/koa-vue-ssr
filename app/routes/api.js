const Router = require('koa-router')
const service = require('../service/test')
const router = new Router({
  prefix: '/api'
})

router.get('/', service.queryselectAll)

module.exports.api = router
