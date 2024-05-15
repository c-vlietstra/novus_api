import { Router } from 'express';

const router = Router();

// Example route
router.get('/', (req, res) => {
  res.send('Hello, this is your API v1 root endpoint!');
});

// Additional routes can be added here

export default router;
