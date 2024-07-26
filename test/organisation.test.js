const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should();

chai.use(chaiHttp);

describe('Organizations', () => {
  it('should create a new organization', (done) => {
    chai.request(server)
      .post('/graphql')
      .send({ query: `mutation { createOrganization(name: "Test Organization") { id name } }` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.createOrganization.should.have.property('id');
        res.body.data.createOrganization.should.have.property('name').eql('Test Organization');
        done();
      });
  });

  it('should list all organizations', (done) => {
    chai.request(server)
      .post('/graphql')
      .send({ query: `{ organizations { id name } }` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.organizations.should.be.a('array');
        done();
      });
  });
});
