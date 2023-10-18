import mongoose from "mongoose";
import {ListItemSchema} from "@/app/models/ListItem/ListItem";
import {ListTypeSchema} from "@/app/models/List/ListType";

export interface List extends mongoose.Document {
    name: string;
    settings: {
        listType: ListTypeSchema,
        icon: string,
        theme: string
    }
}

const ListSchema = new mongoose.Schema<List>({
    name: {
        type: String,
        // required: [true, 'Please provide a name for this list.'],
        maxlength: [100, 'Name cannot be more than 60 characters']
    },
    listItems: {
        type: [ListItemSchema]
    },
    settings: {
        listType: {
        type: ListTypeSchema,
        },
        icon: {
            type: String,
        },
        theme: {
            type: String,
        }
    }
});

export default mongoose.models.List || mongoose.model<List>('List', ListSchema)
