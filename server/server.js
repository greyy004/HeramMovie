import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 5100;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Fix __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve frontend static files
const frontendPath = join(__dirname, '../client/dist');
app.use(express.static(frontendPath));

// Catch-all for React routes
app.use((req, res) => {
  res.sendFile(join(frontendPath, 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
