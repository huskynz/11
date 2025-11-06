import { NextResponse } from "next/server";
import { verifyPin } from "@/lib/private-docs";
import { verifyTurnstile } from "@/lib/turnstile";

export async function POST(request: Request) {
  try {
    const { slug, pin, turnstileToken } = await request.json();

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

    // In production, require Turnstile token
    if (process.env.NODE_ENV === "production" && !turnstileToken) {
      return NextResponse.json(
        { verified: false, error: "Captcha verification required" },
        { status: 400 }
      );
    }

    // Verify Turnstile token if provided (or if in production)
    if (turnstileToken) {
      const isValidToken = await verifyTurnstile(turnstileToken);
      if (!isValidToken) {
        return NextResponse.json(
          { verified: false, error: "Invalid captcha. Please try again." },
          { status: 400 }
        );
      }
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
