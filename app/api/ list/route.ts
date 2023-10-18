import dbConnect from "@/app/lib/dbConnect";
import {NextResponse} from "next/server";
import List from "@/app/models/List/List";

export async function GET() {
    await dbConnect();
    const lists = await List.find();
    NextResponse.json(lists);
}
