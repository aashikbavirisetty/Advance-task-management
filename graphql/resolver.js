const Organization = require('../models/organisation');
const User = require('../models/user');
const Task = require('../models/task');

const resolvers = {
  Query: {
    organizations: async () => await Organization.find(),
    users: async () => await User.find(),
    tasks: async () => await Task.find()
  },
  Mutation: {
    createOrganization: async (_, { name }) => {
      const organization = new Organization({ name });
      return await organization.save();
    },
    createUser: async (_, { username, password, role, organizationId }) => {
      const user = new User({ username, password, role, organizationId });
      return await user.save();
    },
    createTask: async (_, { title, description, status, dueDate, userId, organizationId }) => {
      const task = new Task({ title, description, status, dueDate, userId, organizationId });
      return await task.save();
    }
  }
};

export default resolvers;
