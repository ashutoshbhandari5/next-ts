import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "User not found", status: 404 });

  return NextResponse.json({ id: 1, name: "Ashutosh" });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (params.id > 10)
    return NextResponse.json(
      { error: "Cannot find the name with this id" },
      { status: 404 }
    );

  return NextResponse.json({ id: 1, name: body.name }, { status: 200 });
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json(
      { error: "Cannot find the name with this id" },
      { status: 404 }
    );

  return NextResponse.json({ message: "User deleted successfully" });
}
