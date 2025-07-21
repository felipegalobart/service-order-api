# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 1.1.0 (2025-07-21)


### Features

* **auth:** implement JWT login and route protection with middleware ([15d46af](https://github.com/felipegalobart/service-order-api/commit/15d46af488127eea0888944fdbce64dbf5535483))




### 📦 CHANGELOG

> This changelog is maintained automatically using [standard-version](https://github.com/conventional-changelog/standard-version).

#### [v1.0.0] - 2025-07-21

##### ✨ Features
- feat(user): add JWT authentication with login route and token generation
- feat(user): implement user CRUD with protected routes
- feat(auth): add middleware for JWT token validation
- feat: seed admin user with default credentials
- feat(swagger): add Swagger documentation for user endpoints
- feat(test): add unit tests for auth and user module with Jest and Supertest

##### 🐛 Fixes
- fix(test): align test expectations with route and controller behavior
- fix(swagger): correct user route paths to reflect /api/users in documentation

##### 🛠️ Refactors
- refactor(routes): organize routes by module and use consistent /api prefix
- refactor(service): create userService layer to isolate business logic