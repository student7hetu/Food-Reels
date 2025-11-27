import app from './src/app.js';
import ConnectDB from './db/db.js';
import router from './routes/auth.routes.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;
ConnectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/auth', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});