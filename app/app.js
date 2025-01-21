const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Automated Node.js Deployment!');
});

app.get('/health', (req, res) => { // Add a health check endpoint
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
