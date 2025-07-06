import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

// Initializing app
const app = express();

// Initializing Middlewares
app.use(helmet());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// Contact Route
app.use('/api');

export default app;
