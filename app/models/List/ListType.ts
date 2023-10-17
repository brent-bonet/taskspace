import mongoose, {Types} from "mongoose";

export interface ListType extends mongoose.Document {
    _id: string;
    name: string;
    description: string;
}

const ListTypeSchema = new mongoose.Schema<ListType>({
    _id: {
        type: Types.ObjectId
    },
    name: {
        type: Types.String
    },
    description: {
        type: Types.String
    }
});

export default mongoose.models.ListType || mongoose.model<ListTypeSchema>('ListType', ListTypeSchema)

