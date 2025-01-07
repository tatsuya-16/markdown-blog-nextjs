import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaClient"

export async function GET() {
  const allDomesticPhotos = await prisma.travelPhotosDomestic.findMany();
  return NextResponse.json(allDomesticPhotos);
}