import app from './app';
import dotenv from 'dotenv';

// Loading environment variables
dotenv.config();

// Set server port
const PORT = process.env.BACKEND_PORT || 3000;

// Setting server listening port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
