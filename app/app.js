const Koa = require('koa')

const app = new Koa()

const logger = require('koa-logger')
const ssr = require('./routes/ssr')(app)
const { api } = require('./routes/api')
const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const rootPath = path.resolve(__dirname, '../')
const resolve = file => path.resolve(rootPath, file)
app.use(logger())
app.use(require('koa-static')(`${__dirname}/public`))
// cache static
const serve = (filepath, cache) => require('koa-static')(resolve(filepath), {
  maxage: cache && isProd ? 60 * 60 * 24 * 30 : 0
})
// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(serve('public', true))
app.use(serve('dist', true))
// routes
app.use(ssr.routes()).use(ssr.allowedMethods())
app.use(api.routes()).use(api.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
