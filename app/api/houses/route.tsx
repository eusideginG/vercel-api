import { NextRequest, NextResponse } from "next/server"
import data from "../../../data/data.json"

export async function GET(req: NextRequest) {
    const name = req.nextUrl.searchParams.get('name') as string;

    if (name !== null) {
        const filteredData = data.filter(item => item.name.search(new RegExp(name, "i")) != -1)
        return NextResponse.json( filteredData ); 
    } 
    else if (req.nextUrl.searchParams.size === 0) {
        return NextResponse.json({data});
    }
    else {
        return NextResponse.json( { 404: "This page could not be found" } );
    }

}
