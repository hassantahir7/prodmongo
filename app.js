import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import { submitForm } from './controllers/formController.js';

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas using environment variable
const mongoURI = process.env.MONGODB_URI; // Replace with your local MongoDB URI
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => {
      console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:', err);
  });

// Middleware to parse incoming request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the HTML form
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submissions
app.post('/submit-form', submitForm);

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
