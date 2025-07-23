import express from 'express';
import cors from 'cors';
import passengersRoutes from './routes/passengers.js';

const app = express();
const PORT = 5050;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/passengers', passengersRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to the Titanic Passenger API");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});