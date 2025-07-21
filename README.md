

# Service Order API

This is a backend API for managing service orders, built with **Node.js**, **Express**, **TypeScript**, and **Prisma ORM**.  
It provides a modular architecture, starting with full user management (CRUD), and will expand to include other business modules like clients, service orders, authentication, and more.

---

## 🚀 Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) (recommended DB)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) – password hashing
- [dotenv](https://github.com/motdotla/dotenv) – env var management
- [Helmet](https://helmetjs.github.io/) – HTTP security headers
- [CORS](https://github.com/expressjs/cors) – Cross-origin requests
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) – API documentation

---

## 📁 Project Structure

```
service-order-api/
├── src/
│   ├── controllers/       # Request handling
│   ├── routes/            # Route definitions
│   ├── services/          # Business logic
│   ├── libs/              # Shared utilities (e.g., Prisma client)
│   └── server.ts          # Entry point
├── prisma/
│   └── schema.prisma      # Prisma schema and DB models
├── package.json
└── .env                   # Environment variables
```

---

## 🛠️ Scripts

```bash
# Run the API in development mode
npm run dev
```

---

## ✅ Features

- [x] User CRUD (Create, Read, Update, Delete)
- [x] Secure password hashing
- [x] Modular folder structure
- [x] Prisma integration with PostgreSQL
- [x] Environment variable support
- [x] Swagger documentation setup (WIP)

---

## 🔒 Upcoming Features

- [ ] User authentication with JWT
- [ ] Route protection middleware
- [ ] Input validation (Zod)
- [ ] Clients and service orders module
- [ ] Full Swagger API docs

---

## 📄 License

This project is licensed under the MIT License.