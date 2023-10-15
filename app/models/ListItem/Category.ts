import mongoose from "mongoose";

export interface Category extends mongoose.Document {
    name: string;
    icon: string;
}

const CategorySchema = new mongoose.schema<Category>({
    name: {
        type: string,
        required: [true, 'Please enter a category name.']
    },
    icon: {
        type: string
    }
})

export default mongoose.models.Category || mongoose.model<CategorySchema>('Category', CategorySchema)
