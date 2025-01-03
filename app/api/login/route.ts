import { signIn } from "@/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json(); // Assuming the request body is JSON

        // Attempt to sign in with credentials
        const response = await signIn('credentials', {
            redirect: false,
            callbackUrl: '/',
            email,
            password,
        });

        if (response?.error) {
            return NextResponse.json({ error: response.error }, { status: 400 });
        }
        return NextResponse.json({ success: true, user: response.user }, { status: 200 });

    } catch (error) {
        console.error("Login failed:", error);
        return NextResponse.json({ error: "Login failed. Please try again." }, { status: 500 });
    }
}