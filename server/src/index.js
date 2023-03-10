import express from 'express';
import home from './routes/home.route.js';
import path from 'path';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Server initialization
const server = express();

const port = 3001;

//Routes
server.use('/api/', home);

// Serve the static files from the React app
server.use(express.static(path.join(__dirname, "public")));

// Serve the react app
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

//Server start
server.listen(3001, () => {
	console.log(`Le serveur est lancé sur le port : ${port}`);
});
