import mongoose from "mongoose";
const {Schema} = mongoose;

export interface Category extends mongoose.Document {
    name: string;
}

const CategorySchema = new Schema<Category>({
    name: {
        type: String
    },
});

export default mongoose.models.Category || mongoose.model<CategorySchema>('Category', CategorySchema)

