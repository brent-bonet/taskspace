import {NextRequest, NextResponse} from "next/server";

type ResponseData = {
    message: string
}

export function GET(
    req: NextRequest
) {
    return NextResponse.json({message: "hello!"})
}