import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'face_viewer.html'));
});

app.use(express.static(__dirname));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Face-View server running on http://0.0.0.0:${PORT}`);
});
