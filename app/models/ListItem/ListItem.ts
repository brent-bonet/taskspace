import mongoose from "mongoose";
import {number} from "prop-types";

export interface ListItem extends mongoose.Document {
    name: string,
    photo: string,
    favorite: boolean,
    info: {
        category: string,
        quantity: number,
        packageSize: string,
        price: number,
        stores: String[]
    }
}

const ListItemSchema = new mongoose.Schema<ListItem>({
    name: {
        type: string,
        required: [true, 'Please provide a name for this item.'],
        maxlength: [100, 'Name cannot exceed 100 characters.']
    },
    photo: {
        type: string
    },
    favorite: {
        type: "boolean"
    },
    info: {
        category: {
            type: string,
        },
        quantity: {
            type: number
        },
        packageSize: {
            type: string
        },
        price: {
            type: number
        },
        stores: {
            type: [string]
        }
    }
})

export default mongoose.models.ListItem || mongoose.model<ListItem>('ListItem', ListItemSchema)


