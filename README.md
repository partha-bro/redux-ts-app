# Redux app using MERN with Typescript

## Technology
### concorrently npm package for both frontend and backend will be run
#### Backend - NodeJS + Typescript
```
Node Package Manager
server@1.0.0 
├── bcrypt@5.1.0
├── cors@2.8.5
├── dotenv@16.0.3
├── express-async-errors@3.1.1
├── express-validator@6.15.0
├── express@4.18.2
├── jsonwebtoken@9.0.0
└── mongoose@7.0.1
```
#### FrontEnd - ReactJs + Redux Toolkit + Typescript
```
Node Package Manager
client@0.0.0 
├── @emotion/react@11.10.6
├── @emotion/styled@11.10.6
├── @mui/material@5.11.13
├── @reduxjs/toolkit@1.9.3
├── @types/react-dom@18.0.11
├── @types/react@18.0.28
├── @vitejs/plugin-react@3.1.0
├── axios@1.3.4
├── react-dom@18.2.0
├── react-redux@8.0.5
├── react-router-dom@6.9.0
├── react-toastify@9.1.1
├── react@18.2.0
├── typescript@4.9.5
└── vite@4.1.4
```
#### Database - MongoDB

## Setup Type Script in node
```
    - You need to install typescript in global.
        $ npm install -g typescript
    - You have to install dev dependencies for development not in production
        $ npm install -D ts-node ts-node-dev
        $ npx tsc --init
    - Configure the tsconfig.ts file in server folder
        "moduleResolution": "node", 
        "outDir": "./build",  
        "include": ["src"]
    - Configure in package.json
        "start": "node ./build/server.js",
        "dev": "ts-node-dev ./src/server.ts",
        "build": "tsc"
```

## Setup Type Script in react
```
    - You need to install typescript in global.
        $ npm create vite .
        Now select react and typescript
        $ npm install
        $ npm run dev 
```

## Install
    $ npm install -g nodemon
    $ npm install

## Run
    $ npm start