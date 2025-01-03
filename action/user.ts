'use server';

import { NextResponse } from "next/server";

const register = async (formData: FormData) => {
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const password = formData.get('pass') as string;
    if(!firstName || !lastName || !email || !password) {
        console.log("false")
    }
    else 
    console.log(firstName, lastName, email, password);
}

export {register};