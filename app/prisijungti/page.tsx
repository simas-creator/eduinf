'use client';
import Link from "next/link";
import { useState } from "react";
import { redirect } from "next/navigation";
const Login = () => {
  const [error, setError] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
      // Optionally handle missing fields
      console.error("Email and password are required.");
      return;
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Ensure the correct content type is set
      },
      body: JSON.stringify({ email, password }), // Send the data as JSON
    });
    redirect("/")
    const result = await response.json();
    console.log(result);
    if (response.ok) {
      setError("")
    } else {
      setError("Neteisingas slaptažodis")
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h1 className="font-semibold text-3xl mt-5 font-title">Prisijungti</h1>
      <p className="text-slate-500 mt-2 mb-4">Nurodykite reikiamus duomenis</p>
      <form onSubmit={handleSubmit}>
        <div className="mt-2 flex-col flex">
          <label htmlFor="email" className="font-title">El. paštas</label>
          <input
            type="text"
            className="input input-bordered input-primary w-full"
            name="email"
            required
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="password" className="font-title">Slaptažodis</label>
          <input
            type="password"
            className="input input-bordered input-primary w-full"
            name="password"
            required
          />
        </div>
        <p className="text-sm text-red-500">{error}</p>
        <button className="btn btn-primary w-full mt-4 mb-2">Prisijungti &rarr;</button>
        <p className="text-sm">Neturite paskyros? <Link className="link link-primary link-hover" href='/registracija'>Registruotis</Link></p>
        <div className="divider">arba</div>
        <section>
          <button className="w-full flex bg-slate-50 py-2 px-4 gap-1 rounded-md items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-google">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z" />
            </svg>
            <span className="text-neutral-700 text-sm">Google</span>
          </button>
        </section>
      </form>
    </div>
  );
}

export default Login;
