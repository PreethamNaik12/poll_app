# 📊✨ Poll App - Polling Application ✨📊

Poll App is a powerful polling application that enables users to cast their vote, and visualize data effortlessly. 

## 🚀 Features

- **Interactive Polls:** Cast your opinions by participating in. Your voice matters!
- **Real-time Visualization:** Experience dynamic insights at your fingertips! Visualize poll results instantly with interactive charts powered by Recharts, enabling you to grasp trends and patterns effortlessly.
- **Intuitive User Interface:** Enjoy a seamless and delightful user experience with our thoughtfully crafted Material-UI components. Navigate the app effortlessly and engage in polls with ease.
- **Efficient API Testing:** Streamline your development process with ThunderClient, a powerful tool that allows you to efficiently test APIs. Ensure your backend functions smoothly and handle requests seamlessly.
- **Global Accessibility:** Deploy your frontend with confidence using Vercel, a reliable platform that ensures your application is accessible to users worldwide. Reach a broader audience and make your polls accessible to everyone, everywhere.

### 🛠️ Technologies Used

- **Frontend:** ReactJS, Material-UI
- **Backend:** Node.js, Express, PostgreSQL
- **Data Visualization:** Recharts
- **API Testing:** ThunderClient
- **Deployment:** Vercel

### The project is organized into two main folders:

## 📁 Client Folder Structure

The `client` folder contains all the client-side code for the React application. Here's the updated structure of the `client` folder:

```
client
│
├── public                  # Contains public assets (HTML, images, etc.) served by the React app
├── src                     # Main source code for the React application
│   ├── Assets              # Contains all the assets
|   |   ├── Icons           # Icons
|   |   ├── Images          # Images
|   |   └──  Stylesheets     # Stylesheets
│   ├── Components          # Reusable React components
│   │   ├── Component1      # Specific component folder
│   │   ├── Component2      # Another component folder
│   │   ├── index.js        # index file
│   │   └── ...             # Other component folders
│   │
│   ├── Constants           # Links, data, and other constants
│   ├── Pages               # Individual page components
│   │   ├── index.js        # index file
│   │   ├── Page1           # Specific page folder
│   │   ├── Page2           # Another page folder
│   │   └── ...             # Other page folders
│   │
│   ├── Themes              # Material-UI theme configuration
│   │   └──  index.js        # index file
│   │
│   ├── App.js              # Main component where routes and app structure are defined
│   ├── index.js            # Entry point of the React app
│   │
│   ├── components/index.js # Combined index file for all components
│   ├── constants/index.js  # Combined index file for all constants
│   └── pages/index.js      # Combined index file for all pages
└── ...
```

## 📁 Server

The `server` folder contains all the server-side code for the Node.js, Express, and PostgreSQL application. Here's the structure of the `server` folder:

```
server
│
├── database.sql     # db structure
├── db.js            # db configs
├── index.js         # Entry point of the server application
└── ...              # Other files
```

## 🌐 Getting Started

1. **Clone the Repository:**

   ```
   git clone https://github.com/PreethamNaik12/Taghash-Submission
   ```

2. **Client Setup:**

   - Navigate to the `client` folder and install dependencies using `npm install`.
   - Run the client-side application using `npm start`.
   - More documentaion in [Client README.md](/client/README.md)

3. **Server Setup:**

   - Navigate to the `server` folder and install dependencies using `npm install`.
   - Set up your PostgreSQL database and configure the connection in the server.
   - Run the server-side application using `npm start`.
   - More documentaion in [Server README.md](/server/README.md)

4. **Start Polling:**
   Open the client app, create polls, vote, and explore insightful visualizations!


---
