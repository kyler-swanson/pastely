import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index';

import User from '../../models/User.model';

// Chai config
chai.use(chaiHttp);
chai.should();

describe('/users', () => {

    // TODO: beforeAll hook to login with jwt token

    // Empty users collection before each test
    beforeEach((done) => {
        User.remove({}, (err) => {
            done();
        });
    });

    describe('[GET] /users should pass', () => {
        it('returns registered users', done => {
            chai.request(app)
                .get('/api/users')
                .end((err, res) => {
                    if (err) return JSON.stringify(res);
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.equal(0);
                    done();
                });
        });
    });
});