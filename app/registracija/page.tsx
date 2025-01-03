'use client'
import Link from "next/link"
import { register } from "@/action/user"
import { useState } from "react"
import { useRouter } from "next/navigation";
const Register = () => {
    const router = useRouter();
    const handleSubmit = async (e: any) => {
        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.pass.value;
        if(!firstName || !lastName || !email || !password) {
            setError("invalid");
        } else {
            setError("");
            e.target.firstName.value = "";
            e.target.lastName.value = "";
            e.target.email.value = "";
            e.target.pass.value = "";
            router.push("/skydelis");
        }
        e.preventDefault();
        const formData = new FormData(e.target);
        register(formData);
    }
    const [error, setError] = useState("");
    return (
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
          <h1 className="font-semibold text-3xl mt-5 font-title">Registracija</h1>
          <p className="text-gray-500 mt-2 mb-4">Nurodykite reikiamus duomenis</p>
          <form action={register} onSubmit={handleSubmit}>
              <div className="flex gap-4">
                  <div>
                      <label htmlFor="firstame" className="font-title">Vardas</label>
                      <input 
                        type="text" 
                        className="input input-bordered input-primary w-full max-w-xs"
                        name="firstName" />
                  </div>
                  
                  <div>
                      <label htmlFor="last" className="font-title">Pavardė</label>
                      <input 
                        type="text" 
                        className="input input-bordered input-primary w-full max-w-xs"
                        name="lastName"/>
                  </div>
              </div>
              <div className="mt-2 flex-col flex">
                  <label htmlFor="email" className="font-title">El. paštas</label>
                  <input 
                        type="text" 
                        className="input input-bordered input-primary w-full"
                        name="email" />
              </div>
              <div className="mt-2 flex flex-col">
                  <label htmlFor="password" className="font-title">Slaptažodis</label>
                  <input 
                        type="text" 
                        className="input input-bordered input-primary w-full"
                        name="pass" />
              </div>
                {error === "invalid" && <p className="text-red-500">Visi laukai turi būti užpildyti</p>}
              <button className="btn btn-primary w-full mt-4 mb-2">Registruotis &rarr;</button>
              <p className="text-sm">Jau turite paskyrą? <Link className="link link-primary link-hover" href='/prisijungti'>Prisijungti</Link></p>
          </form>
      </div>
    )
  }
  
  export default Register