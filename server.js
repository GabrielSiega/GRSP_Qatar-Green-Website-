const express = require('express');
const app = express();
const PORT = 8000;

// Serve static files (HTML, CSS, JS) from "public" folder
app.use(express.static('public'));

// Example route
app.get('/hello', (req, res) => {
  res.send('Hello from Node.js website!');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
