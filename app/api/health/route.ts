import { NextResponse } from "next/server";

export async function GET() {
  console.log("Health check called");
  return NextResponse.json({ status: "ok" });
}
