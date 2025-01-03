'use client';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = formData.get("firstName")?.toString().trim();
    const lastName = formData.get("lastName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    if (!firstName || !lastName || !email || !password) {
      setError("Visi laukai turi būti užpildyti");
      return;
    }

    setError(""); // Clear any previous error

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        e.target.reset(); // Reset the form fields
        router.push("/prisijungti"); // Redirect to the login page
      } else {
        const errorData = await response.json();
        console.error("Registration Error:", errorData.error || "Unknown error");
        setError(errorData.error || "Įvyko klaida registruojantis");
      }
    } catch (err) {
      console.error("Server Error:", err);
      setError("Įvyko serverio klaida. Bandykite dar kartą.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h1 className="font-semibold text-3xl mt-5 font-title">Registracija</h1>
      <p className="text-gray-500 mt-2 mb-4">Nurodykite reikiamus duomenis</p>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div>
            <label htmlFor="firstName" className="font-title">Vardas</label>
            <input
              type="text"
              id="firstName"
              className="input input-bordered input-primary w-full max-w-xs"
              name="firstName"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="font-title">Pavardė</label>
            <input
              type="text"
              id="lastName"
              className="input input-bordered input-primary w-full max-w-xs"
              name="lastName"
            />
          </div>
        </div>
        <div className="mt-2 flex-col flex">
          <label htmlFor="email" className="font-title">El. paštas</label>
          <input
            type="email"
            id="email"
            className="input input-bordered input-primary w-full"
            name="email"
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label htmlFor="password" className="font-title">Slaptažodis</label>
          <input
            type="password"
            id="password"
            className="input input-bordered input-primary w-full"
            name="password"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <button className="btn btn-primary w-full mt-4 mb-2">Registruotis &rarr;</button>
        <p className="text-sm">
          Jau turite paskyrą?{" "}
          <Link className="link link-primary link-hover" href="/prisijungti">
            Prisijungti
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
