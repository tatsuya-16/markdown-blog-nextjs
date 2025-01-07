import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaClient"

export async function GET() {
  const allOverseasPhotos = await prisma.travelPhotosOverseas.findMany();
  return NextResponse.json(allOverseasPhotos);
}