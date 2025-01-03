import { NextResponse } from "next/server";
import connect from "@/lib/mongodb";
import {User} from "@/lib/modals/user";
import {hash} from "bcryptjs";


export async function POST(req: any) {
  try {
    // Ensure a connection to the database
    await connect();


    const { firstName, lastName, email, password, username} = await req.json();
    console.log("Received data:", { firstName, lastName, email, password, username });
    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json(
        { error: "Įveskite visus duomenis" },
        { status: 400 }
      );
    }
    const existing = await User.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "Paskyra su šiuo el. paštu jau egzistuoja" },
        { status: 400 });}
    const hashedPassword = await hash(password, 12);  
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save the document to the database
    const savedUser = await newUser.save();

    // Return the saved document as a response
    return NextResponse.json({ success: true, user: savedUser});
  } catch (error) {
    return NextResponse.json(
      { error: "Nepavyko sukurti paskyros"},
      { status: 500 }
    );
  }
}
