# PingBack - Email Tracking Backend

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)

This repository contains the backend server for **PingBack**, a simple yet powerful email tracking application. It provides a secure API for user authentication, sending tracked emails, and retrieving open analytics.

---

## ✨ Features

- **Secure User Authentication:** Google OAuth 2.0 for seamless and secure user sign-in.
- **JWT-Based Sessions:** Uses JSON Web Tokens for stateless and secure API authentication.
- **Email Tracking:** Injects a 1x1 tracking pixel into outgoing emails to monitor opens.
- **AI-Powered Suggestions:** Leverages the Google Gemini API to generate compelling subject lines based on the email body.
- **Analytics API:** Endpoints to retrieve a list of sent emails and their open counts.
- **Robust Security:** Includes rate limiting to prevent abuse and input validation with Zod.
- **Persistent Database:** Uses Docker Compose for a consistent and persistent local PostgreSQL database.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **AI:** [Google Gemini](https://gemini.google.com/app/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication:** [Passport.js](http://www.passportjs.org/) (Google OAuth 2.0 Strategy)
- **Email Sending:** [Nodemailer](https://nodemailer.com/)
- **Validation:** [Zod](https://zod.dev/)
- **Security:** [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)

---

## 🚀 Getting Started

This section will guide you through setting up a local development environment.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [Docker](https://www.docker.com/products/docker-desktop/) and Docker Compose
- A code editor like [VS Code](https://code.visualstudio.com/)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/uttam-on-git/pingback-backend.git
    cd pingback-backend
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    - Make a copy of the example environment file:
      ```bash
      cp .env.example .env
      ```
    - Open the `.env` file and fill in all the required values. See the "Environment Variables" section below for a full explanation of each key.

4.  **Start the database:**
    - Make sure Docker is running on your machine.
    - Start the container in the background:
      ```bash
      docker-compose up -d
      ```

5.  **Run database migrations:**
    - This will create all the necessary tables in your database.
      ```bash
      npx prisma migrate dev
      ```

### Running the Application

- To start the dev server with hot-reloading:
  ```bash
  npm run dev
  ```
- The application will be available at `http://localhost:3000`.

---

## ⚙️ API Endpoints

All API routes are prefixed with `/api`.

| Method | Route                   | Protection | Description                                        |
| :----- | :---------------------- | :--------- | :------------------------------------------------- |
| `POST` | `/ai/generate-subject`  | Private    | Generates subject line suggestions using AI.
| `GET`  | `/auth/google`          | Public     | Initiates the Google OAuth 2.0 sign-in flow.       |
| `GET`  | `/auth/google/callback` | Public     | Callback URL for Google to redirect to after auth. |
| `POST` | `/email/send`           | Private    | Sends a new tracked email.                         |
| `GET`  | `/email`                | Private    | Retrieves a list of all emails sent by the user.   |
| `GET`  | `/email/:id`            | Private    | Retrieves the details for a single sent email.     |
| `GET`  | `/email/track/:emailId` | Public     | The tracking pixel endpoint.                       |

---

## 🔑 Environment Variables

The following variables are required for the application to run. They should be placed in a `.env` file in the project root.

| Variable               | Description                                                           |
| :--------------------- | :-------------------------------------------------------------------- |
| `DATABASE_URL`         | The full connection string for your PostgreSQL database.              |
| `GOOGLE_CLIENT_ID`     | Your OAuth 2.0 Client ID from the Google Cloud Console.               |
| `GOOGLE_CLIENT_SECRET` | Your OAuth 2.0 Client Secret from the Google Cloud Console.           |
| `JWT_SECRET`           | A long, random, secret string used for signing authentication tokens. |
| `GMAIL_USER`           | The Gmail address used to send emails.                                |
| `GMAIL_APP_PASSWORD`   | The 16-character Google App Password for Nodemailer.                  |
| `BACKEND_URL`          | The public URL of the backend (for tracking pixels).                  |
| `FRONTEND_URL`         | The public URL of the frontend (for auth redirects).                  |
| `GOOGLE_AI_API_KEY`    | Your Google gemini API key                                            |
---

## 🤝 Contributing

Contributions are welcome! If you have a suggestion or find a bug, please open an issue. If you'd like to contribute code:

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
