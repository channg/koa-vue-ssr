const query = require('../mysql.js').query

module.exports = {
  test(params) {
    return query('select * from test;', params)
  }
}
