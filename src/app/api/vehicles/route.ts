import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { vehicleSchema } from "@/lib/validations/vehicle";

export const dynamic = "force-dynamic";

export async function GET() {
  const vehicles = await prisma.vehicle.findMany({
    include: { customer: { include: { user: true } } },
    orderBy: { id: "desc" }
  });

  return NextResponse.json(vehicles);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = vehicleSchema.parse(body);

    const vehicle = await prisma.vehicle.create({ data });
    return NextResponse.json(vehicle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Dữ liệu không hợp lệ", error: String(error) },
      { status: 400 }
    );
  }
}
