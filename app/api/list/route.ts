import dbConnect from "@/app/lib/dbConnect";
import {NextRequest, NextResponse} from "next/server";
import List from "@/app/models/List/List";

export async function GET() {
    await dbConnect();
    const lists = await List.find();
    return NextResponse.json(lists);
}

export async function POST(
    req: NextRequest,
    res: NextResponse
) {
    const list = new List({
        name: 'Post List'
    });
    const noIdea = await list.save();
    return NextResponse.json(noIdea);
}
