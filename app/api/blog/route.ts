import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prismaClient"

export async function GET() {
  const allBlogs = await prisma.blog.findMany();
  return NextResponse.json(allBlogs);
}