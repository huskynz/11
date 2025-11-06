import { NextResponse } from "next/server";
import { verifyPin } from "@/lib/private-docs";

export async function POST(request: Request) {
  try {
    const { slug, pin } = await request.json();

    if (!slug || !pin) {
      return NextResponse.json(
        { verified: false, error: "Missing slug or pin" },
        { status: 400 }
      );
    }

    // Validate PIN format (6 digits)
    if (!/^\d{6}$/.test(pin)) {
      return NextResponse.json(
        { verified: false, error: "PIN must be 6 digits" },
        { status: 400 }
      );
    }

    const verified = verifyPin(slug, pin);

    return NextResponse.json({ verified });
  } catch (error) {
    console.error("PIN verification error:", error);
    return NextResponse.json(
      { verified: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
