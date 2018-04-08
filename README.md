# test_env_init_routes

## Basic setup
- ```yarn init -y```
- ```yarn add express```
- ```yarn add -D jest supertest```
- Add scripts into your package.json file
```
  "scripts": {
    "start": "nodemon index",
    "test": "jest"
  },
```

- Setup your server including  
 **index.js - port and listen setup**  
 **server.js - express and middleware setup**  
 **routes.js - routes setup**  

- Test the server

## Test setup
- Create test folder and server.test.js file
- Require supertest and server.js
```
const request = require('supertest')
const server = require('../server')
```

- Start test the routes