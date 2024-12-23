import {NextResponse} from 'next/server';
import connect from "@/lib/mongodb"
import User from '@/lib/modals/user'
import { Types } from 'mongoose';
const ObjectId = require('mongoose').Types.ObjectId;
export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse({
            status: 200,
            body: JSON.stringify(users)
        })
    } catch (error) {
        return new NextResponse({
            status: 500,
            body: JSON.stringify({error: error.message})
        })
    }
}

export const POST = async (request) => {
    try {
        const {email, password, username} = await request.json();
        // Connect to the database
        await connect();
        // Create and save the new user
        const newUser = new User({
            email,
            password,
            username,
        });
        await newUser.save();

        // Return the created user data
        return NextResponse.json(newUser, { status: 200 });
    } catch (error) {
        console.error("Error saving user:", error);
        return NextResponse.json(
            { error: "An error occurred while saving user data." },
            { status: 500 }
        );
    }
};

export const PATCH = async (request) => {
    try {
        const body = await request.json();
        const { userId, newUsername } = body;

        // Connect to the database
        await connect();

        // Validate request body
        if (!userId || !newUsername) {
            return NextResponse.json(
                { message: 'Naujas vartotojas nerastas' },
                { status: 400 }
            );
        }

        // Validate ObjectId
        if (!Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                { message: 'Neteisingas vartotojo Id' },
                { status: 400 }
            );
        }

        // Update user
        const updatedUser = await User.findOneAndUpdate(
            { _id: new ObjectId(userId) }, // Ensure ObjectId is correctly instantiated
            { username: newUsername },
            { new: true } // Return the updated document
        );

        // Check if the user was found
        if (!updatedUser) {
            return NextResponse.json(
                { message: 'Vartotojas nerastas' },
                { status: 400 }
            );
        }

        // Return success response
        return NextResponse.json(
            { message: 'Vartotojas atnaujintas', user: updatedUser },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            { error: 'Įvyko klaida atnaujinant vartotoją', details: error.message },
            { status: 500 }
        );
    }
};

export const DELETE = async (request) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get('userId');
        if(!userId) {
            return NextResponse.json({message: 'Vartotojas nerastas'}, {status: 400});
        }

        if (!Types.ObjectId.isValid(userId)) {
            return NextResponse.json(
                { message: 'Neteisingas vartotojo Id' },
                { status: 400 }
            );
        }

        await connect();

        const deletedUser = await User.findByIdAndDelete(
            new Types.ObjectId(userId)
        );

        if(!deletedUser) {
            return NextResponse.json({message: 'Vartotojas nerastas'}, {status: 400});
        }

        return NextResponse.json({message: 'Vartotojas ištrintas', user: deletedUser}, {status: 200});
    } catch (error) {
        return NextResponse.json({message: 'Įvyko klaida trinant vartotoją', details: error.message}, {status: 500});
    }
}