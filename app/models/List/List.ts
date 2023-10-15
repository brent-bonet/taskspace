import mongoose from "mongoose";
import {ListType} from "@/app/models/List/ListType";

export interface List extends mongoose.Document {
    name: string;
    settings: {
        listType: ListType,
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
    settings: {
        listType: {
        type: ListType,
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

// name: {
//     /* The name of this pet */

//     type: String,
//     required: [true, 'Please provide a name for this pet.'],
//     maxlength: [60, 'Name cannot be more than 60 characters'],
//   },

export default mongoose.models.List || mongoose.model<List>('List', ListSchema)
