'use client'
import { useState, useEffect } from "react"
import FilterSchools from "@/components/FilterSchools"
import SchoolCase from "@/components/SchoolCase"
const Page = () => {
    let [schools, setSchools] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('api/schools/view');
                if(res.ok){
                    const data = await res.json();
                    setSchools(data);
                    console.log(data);
                }
                else {
                    console.log(error);
                }
            } catch (error) {
                console.log(error);
            }
            
        }
        fetchData();
    }, [])
  return (
    <div>
        <h1 className="font-title text-center text-3xl p-5">Lietuvos mokymo įstaigos</h1>
        <FilterSchools/>
        <ul>
            {schools.map((school) => (
                <li key={school._id}>
                <SchoolCase
                    name={school.name}
                    apskritis={school.apskritis}
                    imgUrl={school.imgUrl}
                    mu={school.mu}
                />
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Page