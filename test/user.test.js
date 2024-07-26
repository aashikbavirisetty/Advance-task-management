const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 
const should = chai.should();

chai.use(chaiHttp);

describe('Users', () => {
  it('should create a new user', (done) => {
    chai.request(server)
      .post('/graphql')
      .send({ query: `mutation { createUser(username: "testuser", password: "password", role: "User", organizationId: "org123") { username } }` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.createUser.should.have.property('username');
        done();
      });
  });
});
