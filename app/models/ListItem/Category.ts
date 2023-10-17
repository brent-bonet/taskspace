import mongoose, {Types} from "mongoose";

export interface Category extends mongoose.Document {
    _id: string
    name: string;
    icon: string;
}

const CategorySchema = new mongoose.schema<Category>({
    _id: {
        type: Types.ObjectId
    },
    name: {
        type: string,
        required: [true, 'Please enter a category name.']
    },
    icon: {
        type: string
    }
})

export default mongoose.models.Category || mongoose.model<CategorySchema>('Category', CategorySchema)
