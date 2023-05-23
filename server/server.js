const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the pet social project!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});