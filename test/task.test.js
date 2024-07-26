
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server')
const should = chai.should();

chai.use(chaiHttp);

describe('Tasks', () => {
  it('should create a new task', (done) => {
    chai.request(server)
      .post('/graphql')
      .send({
        query: `mutation {
          createTask(title: "Test Task", description: "Test Description", status: "Pending", dueDate: "2024-12-31", userId: "user123", organizationId: "org123") {
            id title description status dueDate userId organizationId
          }
        }`
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.createTask.should.have.property('id');
        res.body.data.createTask.should.have.property('title').eql('Test Task');
        res.body.data.createTask.should.have.property('description').eql('Test Description');
        res.body.data.createTask.should.have.property('status').eql('Pending');
        res.body.data.createTask.should.have.property('dueDate');
        res.body.data.createTask.should.have.property('userId').eql('user123');
        res.body.data.createTask.should.have.property('organizationId').eql('org123');
        done();
      });
  });

  it('should list all tasks', (done) => {
    chai.request(server)
      .post('/graphql')
      .send({ query: `{ tasks { id title description status dueDate userId organizationId } }` })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.tasks.should.be.a('array');
        done();
      });
  });
});
