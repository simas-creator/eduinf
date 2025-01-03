'use server';

import { User } from '@/lib/modals/user';
import connect from '@/lib/mongodb';
import { redirect } from 'next/navigation';
const register = async (formData: FormData) => {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('pass') as string;
    if(!firstName || !lastName || !email || !password) {
        console.log("false")
    }
    await connect();
    const existing = await User.findOne({email})
    if(existing) {
        return false;
    }
    await User.create({firstName: firstName,
        lastName: lastName,
        email: email,
        password: password})
    redirect('/login')
}

export {register};