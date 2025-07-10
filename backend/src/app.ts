import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import contactRoutes from '../src/routes/contactRoutes.js';

// Initializing app
const app = express();

// Initializing Middlewares
app.use(helmet());
app.use(
  cors({
    origin: false,
    methods: ['GET', 'POST'],
  })
);
app.use(express.json());
app.set('trust proxy', 1);

// Contact Route
app.use('/api', contactRoutes);

export default app;
