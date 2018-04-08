const request = require('supertest')
const server = require('../server')


test('root route returns hi there', (done) => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeFalsy()
      expect(res.text).toBe('Hi there')
      done()
    })
})