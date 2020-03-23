# Node gRPC Microservices with Typescript

Microservice architecture with gRPC for Node Application

## Feature

- gRPC Microservices
- Typescript
- Docker

## How To Setup Server

Setup a server requires several configuration such as

- Installing dependencies
- Start the server

### Install Dependencies

Install dependencies with command

```bash
npm install
```

### Start The Server

Start the server with

```bash
npm run start:dev
```

## APP Project Structure

```bash
.
├── coverage                   # Interactive test result
├── node_modules               # Fvking black hole
├── protos                     # protobuf file
├── scripts                    # Script helper
├── src                        # All app files put here
| ├── __tests__                # Unit Testing files
| ├── bin                      # Contain Basic App configuration
| ├── controllers              # App controller
| ├── database                 # Data access stuff  (Sequalize mostly)
| ├── grpc                     # gRPC server
| ├── helpers                  # Helper functions
| ├── middleware               # App middleware configuration
| ├── protoc                   # Proto generated file .d.ts and .js
| ├── repositories             # Contain query sql/no-sql to database
| ├── routes                   # Routes request manager
| ├── services                 # Contain bussiness logic and flow of endpoint
| ├── utils                    # Util libs (formats, debugger, validation, etc)
| └── index.ts                 # App Entry point
|
├── .env.example               # Example environment
├── .gitignore                 # Git ignore
├── jest.config.js             # Jest configuration for test
├── jest.setup.js              # Jest setup file for custom jest configurtion
├── LICENSE                    # The license file
├── README.md                  # This file
└── tsconfig.json              # Typescript configuration
```
