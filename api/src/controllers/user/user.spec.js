import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose';

import app from '../../index';

import User from '../../models/User.model';

// Chai config
chai.use(chaiHttp);
chai.should();

describe('/user', () => {

  let currentRes;

  let testData = {
    username: 'test-account-42122',
    email: 'testing-woohoo@example.com',
    password: 'very-secure-password'
  };

  let testDataBad = {
    username: 'test-account-42122',
    email: 'testing-woohoo@example.com'
  };

  before(function (done) {
    app.on("API_STARTED", function () {
      done();
    });
  });

  // Empty users collection before each test
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done();
    });
  });

  describe('/user/create', () => {
    describe('[POST] /user/create should pass', () => {
      it('should return user object', done => {
        chai.request(app)
          .post('/api/user/create')
          .send(testData)
          .end((err, res) => {
            currentRes = res;
            if (err) return done(err);
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.status.should.equal('success');
            res.body.user.username.should.equal(testData.username);
            done();
          });
      });
    });

    describe('[POST] /user/create should pass', () => {
      it('should return status error', done => {
        chai.request(app)
          .post('/api/user/create')
          .send(testDataBad)
          .end((err, res) => {
            currentRes = res;
            if (err) return done(err);
            res.should.have.status(400);
            res.body.should.be.a('object');
            res.body.status.should.equal('error');
            done();
          });
      });
    });
  });

  describe('/user/auth', () => {
    describe('[POST] /user/auth should pass', () => {
      it('should return user object and jwt token', done => {
        let testUser = new User(testData);
        testUser.save((err, user) => {
          chai.request(app)
            .post('/api/user/auth')
            .send(testData)
            .end((err, res) => {
              currentRes = res;
              if (err) return done(err);
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.status.should.equal('success');
              res.body.data.token.should.be.a('string');
              done();
            });
        })
      });
    });
  });
  
  // Pretty-print json response after each test failure
  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      console.log(JSON.stringify(currentRes, null, 2));
    }
  });

});