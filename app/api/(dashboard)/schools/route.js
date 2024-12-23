import {NextResponse} from 'next/server';
import connect from "@/lib/mongodb"
import School from "@/lib/modals/school"
import User from '@/lib/modals/user'
import { Types } from 'mongoose';

export const GET = async (request) => {
    try {
        const {searchParams} = new URL(request.url);
        const userId = searchParams.get('userId');

        if(!userId || !Types.ObjectId.isValidUser(userId)) {
            return NextResponse.json({status: 400,
                message: 'Invalid user'}
             )
        }

        await connect();
        
        const user = await User.findById(userId);

        if(!user) {
            return NextResponse.json({status: 404,
                message: 'Vartotojas nerastas'}
            )
        }

        const schools = await School.find({user: new Types.ObjectId(user)});

        return NextResponse.json({status: 200, schools})
    } catch (error) {
        
    }
} 