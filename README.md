# ChatApp

A real-time chat application built with the MERN stack, featuring JWT authentication, Socket.io for real-time communication, and TailwindCSS for styling.

![ChatApp Screenshot](https://github.com/BalajiMittapalli/Mern-chat/assets/132842192/dca46c62-106c-4be8-b642-e6aed3fc5895)
## Features

- 🌟 **Tech Stack**: MERN (MongoDB, Express, React, Node.js) + Socket.io + TailwindCSS + Daisy UI
- 🎃 **Authentication & Authorization**: Secure JWT-based authentication
- 👾 **Real-time Messaging**: Instant messaging with Socket.io
- 🚀 **Online User Status**: Real-time user status updates using Socket.io and React Context
- 👌 **Global State Management**: Efficient state management with Zustand

## Screenshots

![Screenshot 1](https://github.com/BalajiMittapalli/Mern-chat/assets/132842192/89358591-e0b4-411f-9aa5-d488921a2edf)
![Screenshot 2](https://github.com/BalajiMittapalli/Mern-chat/assets/132842192/3f708cd4-b151-4f7c-8102-5779c8ea31e3)

## Getting Started

These instructions will help you set up the project and run it on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install server dependencies**
    ```bash
    cd server
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the `server` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the server**
    ```bash
    npm start
    ```

5. **Install client dependencies**
    ```bash
    cd ../client
    npm install
    ```

6. **Set up client environment variables**

    Create a `.env` file in the `client` directory and add the following:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

7. **Start the client**
    ```bash
    npm start
    ```

## Usage

Open your browser and navigate to `http://localhost:8000` to start using the application.

## Acknowledgments

- [TailwindCSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Zustand](https://zustand.pmnd.rs/)

---

Happy coding! 🎉
