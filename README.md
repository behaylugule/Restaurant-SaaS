# 🍽️ Restaurant SaaS App

A full-featured **Restaurant Software-as-a-Service (SaaS)** platform designed to help restaurants manage their operations efficiently. It supports **multi-organization**, **real-time communication**, and **asynchronous order reporting**.

---

## 🚀 Features

- ✅ **Organization Management** – Each restaurant registers as a separate organization with admin and staff roles.
- ✅ **Restaurant Profile Management** – Manage branding, contact info, working hours, etc.
- ✅ **Menu Management** – Create and manage categories, items, pricing, availability.
- ✅ **Order Management** – Create, update, and track customer orders with status workflows.
- ✅ **Real-time Chat** – Instant communication between restaurant staff and customers via WebSocket.
- ✅ **Reports** – Automatically generate daily/weekly/monthly reports using **Celery** tasks.
- ✅ **Role-based Access Control** – Permissions tailored to admins, managers, and employees.
- ✅ **Multi-tenancy Support** – Isolated data per restaurant/organization.

---

## 🛠️ Tech Stack

| Layer       | Tech                           |
| ----------- | ------------------------------ |
| Frontend    | Next.js, Tailwind CSS          |
| Backend     | Django REST Framework          |
| Auth        | JWT / Supabase Auth (optional) |
| Real-time   | Django Channels / Socket.IO    |
| Async Tasks | Celery + Redis                 |
| Database    | PostgreSQL                     |
