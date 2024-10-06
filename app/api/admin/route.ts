import { currentRole } from "@/lib/auth";
// import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  }

  return new NextResponse(null, { status: 403 });
}
