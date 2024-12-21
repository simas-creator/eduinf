import { Schema, model, models } from 'mongoose';

const schoolSchema = new Schema({
    name: { type: String, required: true },
    apskritis: { type: String, required: true },
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher'}],
});

const School = models.School || model('School', schoolSchema);

export default School; 