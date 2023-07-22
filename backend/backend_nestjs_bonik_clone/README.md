# Bonik Clone

This is a clone of Bonik, a project built using NestJS with a 3-layer architecture.
Includes technologies such as:

- Lodash
- Prisma
- NestJS
- Nodemon
- MySQL
- Jest
- TypeScript

## Setup

To get started with the Bonik Clone project, follow the steps below:

### Prerequisites

- Node.js (version X.X.X)
- MySQL database

### Clone the Repository

```
git clone <repository_url>
cd bonik-clone
```

# Bonik Clone

This is a clone of Bonik, a project built using NestJS with a 3-layer architecture. It includes technologies such as Lodash, Prisma, NestJS, Nodemon, MySQL, Jest, and TypeScript.

## Setup

To get started with the Bonik Clone project, follow the steps below:

### Prerequisites

- Node.js (version X.X.X)
- MySQL database

### Clone the Repository

```
git clone <repository_url>
cd bonik-clone
```

### Install Dependencies

```
npm install
```

### Configure the Database

Create a new MySQL database for the project.
Update the database connection details in the .env file.
Build and Start the Project

```
npm run build
npm run start:dev
```

This will build the project and start the development server.

### Perform Database Migration

To populate the database with initial data, run the following command:

```
npx ts-node ./seed-data/seed.ts
```

This will execute the database migration and seed the necessary data.

### Running Tests

To run the tests for the Bonik Clone project, use the following command:

```
npm run test
```

### Folder Structure

The folder structure of the project follows a 3-layer architecture:

- controllers/: Contains the API controllers.
- services/: Contains the business logic services.
- repositories/: Contains the database access and query operations.
- models/: Contains the data models.
- utils/: Contains utility functions.
- config/: Contains configuration files.
- test/: Contains the test files.

### Contributing

Contributions to the Bonik Clone project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is licensed under the MIT License.

Please note that you should replace `<repository_url>` in the "Clone the Repository" section with the actual URL of your Bonik Clone repository.

Feel free to customize the content, formatting, and instructions in the `README.m
