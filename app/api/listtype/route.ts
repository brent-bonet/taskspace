import ListType from "@/app/models/List/ListType";
import dbConnect from "@/app/lib/dbConnect";
import {NextResponse} from "next/server";


export async function GET() {
  await dbConnect()
  const listTypes = await ListType.find({}) /* find all the data in our database */
  return NextResponse.json(listTypes);
}
