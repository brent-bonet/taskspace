import mongoose from "mongoose";

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

export const ListItemSchema = new mongoose.Schema<ListItem>({
    name: {
        type: String,
        required: [true, 'Please provide a name for this item.'],
        maxlength: [100, 'Name cannot exceed 100 characters.']
    },
    photo: {
        type: String
    },
    favorite: {
        type: Boolean
    },
    info: {
        category: {
            type: String,
        },
        quantity: {
            type: Number
        },
        packageSize: {
            type: String
        },
        price: {
            type: Number
        },
        stores: {
            type: [String]
        }
    }
})

export default mongoose.models.ListItem || mongoose.model<ListItem>('ListItem', ListItemSchema)

