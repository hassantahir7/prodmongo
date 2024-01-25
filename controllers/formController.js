import { FormData } from '../models/formModel.js';

export async function submitForm(req, res) {
    try {
        // Create a new form data instance based on the submitted data
        const newFormData = new FormData({
            name: req.body.name,
            email: req.body.email,
            message: req.body.message,
        });

        // Save the form data to MongoDB Atlas
        await newFormData.save();

        res.send('Form submitted successfully!');
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}
