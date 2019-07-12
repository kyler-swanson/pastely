import chai from 'chai';
import chaiHttp from 'chai-http';
import { withLogin } from '../../../test/util';

import app from '../../index';

import User from '../../models/User.model';

// Chai config
chai.use(chaiHttp);
chai.should();

let token;

describe('/users', () => {

    before((done) => {
        token = withLogin();
        done();
    });

    // Empty users collection before each test
    beforeEach((done) => {
        User.deleteMany({}, (err) => {
            done();
        });
    });

    describe('[GET] /users should pass', () => {
        it('should return registered users', done => {
            chai.request(app)
                .get('/api/users')
                .set('x-access-token', token)
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