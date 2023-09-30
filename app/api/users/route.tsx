import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ashutosh" },
    { id: 2, name: "Rashmika" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await await request.json();
  if (!body.firstName)
    return NextResponse.json({ error: "Name is requeired" }, { status: 400 });
  return NextResponse.json({ id: 1, ...body }, { status: 201 });
}
