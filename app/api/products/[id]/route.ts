import { NextRequest, NextResponse } from "next/server";
import productSchema from "../schema";

export function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  if (params.id > 10)
    return NextResponse.json({ error: "Produce not found", status: 404 });

  return NextResponse.json({ id: 1, name: "milk", price: 2.5 });
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors },
      { status: 400 }
    );

  if (params.id > 10)
    return NextResponse.json(
      { error: "Cannot find the product with this id" },
      { status: 404 }
    );

  return NextResponse.json(
    { id: 1, name: body.name, price: body.price },
    { status: 200 }
  );
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

  return NextResponse.json({ message: "Produce deleted successfully" });
}
