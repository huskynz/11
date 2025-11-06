import { NextResponse } from "next/server";
import { verifyPin } from "@/lib/private-docs";

async function verifyTurnstile(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn("TURNSTILE_SECRET_KEY not set, skipping verification");
    return true;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

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

    // Verify Turnstile token
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
