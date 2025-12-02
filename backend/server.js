import app from './src/app.js';
import ConnectDB from './db/db.js';
import authRoutes from './routes/auth.routes.js';
import foodRoutes from './routes/food.routes.js'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT;
ConnectDB();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});