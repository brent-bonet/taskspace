import dbConnect from "@/app/lib/dbConnect";
import List from "@/app/models/List/List";
import {NextRequest} from "next/server";
import {NextApiResponse} from "next";


export async function GET() {
  await dbConnect()
  const lists = await List.find({}) /* find all the data in our database */
  return Response.json(lists);
}

export async function POST(
    req: NextRequest,
    res: NextApiResponse
) {

}
