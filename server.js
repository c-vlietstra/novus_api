import express from 'express';
import v1Routes from './routes/index.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Versioned Routes
app.use('/api/v1', v1Routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
