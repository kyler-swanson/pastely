const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../src/index.js');

// Chai config
chai.use(chaiHttp);
chai.should();

before(done => {
  app.on('APP_STARTED', () => {
    done();
  })
})

describe('Startup Test', () => {
  it('tests api base endpoint', done => {
    chai.request(app)
      .get('/api')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});