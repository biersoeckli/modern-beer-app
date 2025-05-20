import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import dataAccess from "@/app/server/data-access.client";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Omit id if present, let Prisma generate it
  const { id, ...beerData } = data;
  try {
    const created = await dataAccess.client.beer.create({ data: beerData });
    revalidatePath('/')
    return NextResponse.json(created, { status: 201 });
  } catch (e) {
    console.error("Error creating beer:", e);
    return NextResponse.json({ error: "Failed to create beer" }, { status: 500 });
  }
}
