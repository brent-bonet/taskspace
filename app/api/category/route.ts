import dbConnect from '@/app/lib/dbConnect'
import Category from "@/app/models/Category/Category";

export async function GET() {
  await dbConnect()

  const categories = await Category.find({}) /* find all the data in our database */
  console.log('categories', categories)
  return Response.json(categories);
}
