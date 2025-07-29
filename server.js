
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files (index.html, CSS, JS) from current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html on root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server listening on PORT
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
