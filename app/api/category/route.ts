import dbConnect from '@/app/lib/dbConnect'
import Category from "@/app/models/Category/Category";
import {NextResponse} from "next/server";

export async function GET() {
  await dbConnect()
  const categories = await Category.find({}) /* find all the data in our database */
  return NextResponse.json(categories);
}
