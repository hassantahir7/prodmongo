import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path'; // Add this line for path module
import { fileURLToPath } from 'url'; // Add this line for fileURLToPath
import { submitForm } from './controllers/formController.js';

const app = express();
const port = 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://root1:1234@simpleapp.u9lwvxg.mongodb.net/your-database-name', {
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
const __filename = fileURLToPath(import.meta.url); // Add this line for __filename
const __dirname = path.dirname(__filename); // Add this line for __dirname

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submissions
app.post('/submit-form', submitForm);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

