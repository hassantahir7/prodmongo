import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
});

export const FormData = mongoose.model('FormData', formDataSchema);
