import mongoose from "mongoose";

export interface ListType extends mongoose.Document {
    name: string;
    description: string;
}

const ListTypeSchema = new mongoose.Schema<ListType>({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

export default mongoose.models.ListType || mongoose.model<ListTypeSchema>('ListType', ListTypeSchema)

