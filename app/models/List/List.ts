import mongoose from "mongoose";
import {ListItemSchema} from "@/app/models/ListItem/ListItem";
import ListType, {ListTypeSchema} from "@/app/models/List/ListType";

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
        required: [true, 'Please provide a name for this list.'],
        maxlength: [100, 'Name cannot be more than 60 characters']
    },
    listItems: {
        type: [ListItemSchema]
    },
    settings: {
        listType: {
        type: ListTypeSchema,
        required: [true, 'Please select a list type.']
        },
        icon: {
            type: String,
            required: [true, 'Please select an icon.']
        },
        theme: {
            type: String,
            required: [true, 'Please select a theme.']
        }
    }
});

export default mongoose.models.List || mongoose.model<List>('List', ListSchema)
