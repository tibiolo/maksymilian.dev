import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import contactRoutes from '../src/routes/contactRoutes.js';

// Initializing app
const app = express();

// Initializing Middlewares
app.use(helmet());
app.use(cors({ origin: 'http://localhost:4173' }));
app.use(express.json());

// Contact Route
app.use('/api', contactRoutes);

export default app;
