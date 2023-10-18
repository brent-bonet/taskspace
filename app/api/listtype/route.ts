import ListType from "@/app/models/List/ListType";
import dbConnect from "@/app/lib/dbConnect";


export async function GET() {
  await dbConnect()
  const listTypes = await ListType.find({}) /* find all the data in our database */
  return Response.json(listTypes);
}
