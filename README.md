# React App for User Profiles, Friends, and Transactions

## Overview
This React application displays user profiles, friend lists, and transaction history. It uses modular components and CSS modules for styling.

## Features
- Display user profile information
- Show a list of friends with status indicators
- Render transaction history from JSON data

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Viktor-WEB-D-E-V/learning-social-dashboard.git
   ```
   ```sh
   cd learning-social-dashboard
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
src/
├── components/
│   ├── FriendList/
│   │   ├── FriendList.jsx
│   │   ├── FriendList.module.css
│   │   ├── FriendListItem/
│   │   │   ├── FriendListItem.jsx
│   │   │   ├── FriendListItem.module.css
│   ├── Profile/
│   │   ├── Profile.jsx
│   │   ├── Profile.module.css
│   ├── TransactionHistory/
│   │   ├── TransactionHistory.jsx
│   │   ├── TransactionHistory.module.css
│   │   ├── TransactionHistoryItem/
│   │   │   ├── TransactionHistoryItem.jsx
│   │   │   ├── TransactionHistoryItem.module.css
├── utils/
│   ├── friends.json
│   ├── transactions.json
│   ├── userData.json
├── App.jsx
├── App.css
├── index.css
├── main.jsx
```

## Dependencies
- React
- Vite (for development)



