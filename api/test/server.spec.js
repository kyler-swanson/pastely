import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';

// Chai config
chai.use(chaiHttp);
chai.should();

describe('Startup test', () => {
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