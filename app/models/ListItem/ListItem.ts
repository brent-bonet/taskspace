import mongoose, {Types} from "mongoose";

export interface ListItem extends mongoose.Document {
    _id: string,
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
    _id: {
        type: Types.ObjectId
    },
    name: {
        type: Types.String,
        required: [true, 'Please provide a name for this item.'],
        maxlength: [100, 'Name cannot exceed 100 characters.']
    },
    photo: {
        type: Types.String
    },
    favorite: {
        type: Types.Boolean
    },
    info: {
        category: {
            type:Types.String,
        },
        quantity: {
            type: Types.Number
        },
        packageSize: {
            type: Types.String
        },
        price: {
            type: Types.Number
        },
        stores: {
            type: [Types.String]
        }
    }
})

export default mongoose.models.ListItem || mongoose.model<ListItem>('ListItem', ListItemSchema)


