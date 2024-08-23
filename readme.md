# BACKEND TEMPLATE 

I have started this template with the idea that it will serve to initialize the project quickly. The intention is to add branches with different configurations, to be able to choose depending on the type of project you want to work on.


## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies and Concepts](#technologies-and-concepts)
- [Conclusion](#conclusion)
- [Preview](#preview)

## Introduction

In the Main branch, we start with node, express and typescript. 
I have also added libraries like dotenv and nodemon

In the MongoDB branch, I have located the DB in MongoDB, used mongoose to define the models and Zod for the validation schemes.
There are settings defined, to choose the working environment, "dev" or "prod" and the variables to be used.
I have defined a middleware to validate that the user is authorized and another to validate the schema 'information that enters the db.
We also have a utility to generate tokens.

## Features

 - the main feature of this repo is the login and validation of the user, with the intention of being able to generate private routes and/or privatize information. From here we can define the needs according to the project, either to be able to implement an admin dashboard, private panel for the user, etc.

## Requirements
To run the project, you need to have the following requirements installed:
- Node.js
- npm
- mongoDB
- mongoose

- new libraries used:
    - Cors
    - morgan
    - cookie-parser
    - bcryptjs
    - jsonwebtoken
    - Zod


## Installation
Follow these steps to install the project:
1. Clone the repository:
```sh
$ git clone https://github.com/ebroto7/TEMPLATE_BACK_node-express-TS.git
```

2. Navigate to the project directory:
```sh
cd folder_name
```

3. Install the dependencies:
```sh
$ npm install -y
```

4. open a mongodb cluster:
    - GO TO =>  https://www.mongodb.com/
    - follow instrucccions
    - copy the link like that to your .env files
    
```sh
    mongodb+srv://ebrotoh:<db_password>@cluster0.zlzgzpb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

5. install de newe dependencies,
```sh
$ npm install mongoose --save
$ npm install jsonwebtoken
$ npm i --save-dev @types/jsonwebtoken
$ npm install morgan
$ npm i --save-dev @types/morgan      
$ npm install cors
$ npm i --save-dev @types/cors         
$ npm install cookie-parser
$ npm i --save-dev @types/cookie-parser
$ npm install bcryptjs
$ npm i --save-dev @types/bcryptjs    
$ npm install zod
```
or
```sh
$ npm i -D cookie-parser morgan bcryptjs cors zod
$ npm i --save-dev @types/jsonwebtoken @types/morgan @types/cors @types/cookie-parser @types/bcryptjs 
```


## Usage

To run the project, follow these steps and commands:

1. Create a `.env.development` & `.env.production` file in the root of your project with the following content:
```sh
PORT=<PORT>
```
Additionally, for each branch, you can find an example of the .env file in the configuration folder named env.example. This file serves as a template for your configuration.

2. Run server
 ```sh
npm run dev
```

3. test your endponts (with Postman or other)


## Technologies and Concepts
- Express.js, TypeScript, and Node.js for backend development.

- MongoDB branch
    - with Mongoose


## Conclusion

