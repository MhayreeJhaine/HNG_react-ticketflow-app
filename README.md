# 🎟️ Ticket Management App (React + Tailwind)

A modern and intuitive Ticket Management System built with **React**, **React Router**, **Tailwind CSS**, and **Local Storage**.  
This app allows users to register, log in, and manage tickets with full CRUD functionality — all in a responsive, dashboard-style UI.

---

## 🚀 Features

### 🧭 Authentication

- Signup and Login using **localStorage**.
- Inline error messages and **toast notifications**.
- Protected routes for authorized access only.

### 📊 Dashboard

- Displays ticket statistics:
  - Total Tickets
  - Open Tickets
  - In Progress
  - Resolved
- Shows a **Recent Tickets** section.
- Logout button clears session and redirects to Login.

### 🎫 Ticket Management (CRUD)

- **Create:** Add new tickets with title, description, and status.
- **Read:** View all tickets in styled cards with colored status tags.
- **Update:** Edit ticket details with form validation.
- **Delete:** Remove tickets with confirmation prompts.
- Real-time updates stored in **localStorage**.

### 🎨 UI / UX

- Built using **Tailwind CSS** for a clean and responsive interface.
- Subtle animations for a polished modern feel.
- Reusable components: Header, Logout Button, etc.
- Follows a consistent max-width layout (`1440px`) for structure.

---

## 🛠️ Tech Stack

| Category        | Technology                        |
| --------------- | --------------------------------- |
| Frontend        | React 18                          |
| Styling         | Tailwind CSS                      |
| Routing         | React Router DOM                  |
| State & Storage | useState, useEffect, localStorage |
| Notifications   | React Hot Toast                   |

---

## ⚙️ Installation

````bash

1. Clone the repository:

    git clone https://github.com/yourusername/ticket-management-app.git

2. Navigate to the project directory:

    cd ticket-management-app

3. Install dependencies

    npm install

4. Run the development server:

    npm run dev

  ```
````

## 🧠 Future Enhancements

- Switch from localStorage to a real backend (Firebase or Express API)

- Add user roles (admin, agent, viewer)

- Implement dark mode

- Add search and filter options for tickets
