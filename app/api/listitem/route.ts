import {NextResponse} from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import ListItem from "@/app/models/ListItem/ListItem";

export async function GET() {
    await dbConnect();
    const listItems = await ListItem.find();
    NextResponse.json(listItems);
}
