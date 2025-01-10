# WORKIFY 

This project is a Jira-like application built with modern web technologies. The application provides comprehensive functionality for managing organizations, projects, sprints, and issues with a beautiful and user-friendly interface.

## Features

- **Landing Page**: A visually appealing landing page to welcome users.
- **User Authentication**: Supports OAuth login as well as email/password authentication using Clerk.
- **Organization Management**:
  - Users can create, manage, and join organizations.
  - Assign and manage projects within organizations.
- **Project Management**:
  - Users can view projects assigned to them.
  - Create and manage sprints within projects.
- **Issues Management**:
  - Users can create and manage issues.
  - Drag-and-drop functionality to move issues across four sections: `To Do`, `In Progress`, `In Review`, and `Done`.
- **Sprint Management**:
  - Create sprints.
  - Start and end sprints.
- **Responsive Design**: Fully responsive, ensuring a seamless experience across all devices.

## Tech Stack

### Frontend
- **Next.js**: React framework for building performant and scalable web applications.
- **ShadCN UI**: For pre-built components and a consistent design system.
- **Tailwind CSS**: For highly customizable and efficient styling.

### Backend
- **Prisma**: ORM for seamless database interactions.
- **PostgreSQL (Neon DB)**: Relational database to store application data.

### Authentication
- **Clerk**: For managing user authentication and organization-related functionalities.

### Deployment
- Deployed using VERCEL

### ENV 
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_OUT_URL=/sign-out
NEXT_PUBLIC_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=


## How to Run Locally

### Prerequisites
1. Install Node.js (>= 14).
2. Install Dependecies using npm i
3. Set up a PostgreSQL database (or use Neon DB).

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd jira-clone
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=<your_postgresql_database_url>
     NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api_key>
     CLERK_API_KEY=<your_clerk_backend_api_key>
     ```
5. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the development server:
   ```bash
   yarn dev
   ```
7. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Authentication
- Sign in using OAuth or email/password.

### Organizations
- Create and manage your organization.
- Assign and manage projects within your organization.

### Projects and Sprints
- View and manage projects assigned to you.
- Create sprints and move issues between sections using drag-and-drop.

### Issues
- Create new issues.
- Drag issues to different sections (`To Do`, `In Progress`, `In Review`, `Done`).

## Screenshots

![Jira Clone Screenshot](./Screenshot.png)

## License
This project is licensed under the [MIT License](LICENSE).

