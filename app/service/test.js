const dao = require('../db/dao/test')

module.exports = {
  async queryselectAll(ctx, err) {
    const some = await dao.test({})
    ctx.body = some
  }
}
