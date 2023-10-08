import { NextRequest, NextResponse } from "next/server";
import userSchema from "./schema";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Ashutosh" },
    { id: 2, name: "Rashmika" },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );
  return NextResponse.json({ id: 1, ...body }, { status: 201 });
}
