# Advanced Task Management API

This project is an advanced task management API built using Node.js, Express, GraphQL, and MongoDB. It allows users to manage organizations, users, and tasks with a robust set of features.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Server](#running-the-server)
- [Running Tests](#running-tests)
- [API Endpoints](#api-endpoints)
- [Docker](#docker)

## Prerequisites

Make sure you have the following installed on your system:

- Node.js (>= 14.x)
- npm (>= 6.x)
- MongoDB (>= 4.x)

## Installation

1. Clone the repository:

   ```sh
   git clone [https://github.com/yourusername/task-management-api.git](https://github.com/aashikbavirisetty/Advance-task-management.git)
   cd task-management-api

The API provides the following GraphQL endpoints:

/graphql
You can access the GraphQL Playground at http://localhost:4000/graphql to interact with the API and explore the available queries and mutations.

mutation {
  createOrganization(name: "Test Organization") {
    id
    name
  }
}
List Organizations
{
  organizations {
    id
    name
  }
}
