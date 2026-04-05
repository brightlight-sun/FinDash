# FinDash - Finace Dashboard Ui

gh-pages deployed link : https://brightlight-sun.github.io/FinDash/

# Overview

FinDash is a responsive frontend finance analytics dashboard built using React + Vite. It allows users to explore transactions, view spending trends, and analyze financial insights through charts and summary widgets.
It demonstrates component-driven UI design, chart-based insights, role-based interface behavior, and scalable state management.


# Tech Stack
React
Vite
Redux Toolkit
React Context API
React Router DOM
Bootstrap 5
Recharts
React Toastify


# Features
Dashboard

Summary cards, balance trend chart, spending breakdown pie chart.

Transactions

Search, filter, sort, add/edit/delete (admin only), responsive table.

Role-Based UI

Viewer → read-only access

Admin → full transaction control

Insights

Highest spending category, monthly comparison, percentage trend observation.

Dark Mode

Theme toggle using Context API across layout and components.


Folder Structure

src/
│
├── components/        # Reusable UI components

├── pages/             # Route-level screens

├── layouts/           # Header + Sidebar layout wrappers

├── features/          # Redux slices

├── context/           # Layout context (dark mode)

├── constants/         # Roles configuration

├── mockdata/          # Sample transactions dataset

├── app/               # Redux store setup

├── styles/            # custom styling using css

Future Improvements

Potential upgrades for production readiness:

Backend API integration
Authentication system
Persistent user preferences
CSV export functionality
Advanced analytics filters
