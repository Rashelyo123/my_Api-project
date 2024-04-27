// Import Express module
const express = require("express");

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000; // Port number

// Middleware to parse JSON requests
app.use(express.json());

// Example endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to my API!" });
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
