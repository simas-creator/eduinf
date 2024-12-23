'use client'
import { useEffect, useState } from "react";
import FilterTeachers from "@/components/FilterTeachers";
import TeacherCase from "@/components/TeacherCase";
import Link from 'next/link';
const TeachersPage = () => {
  const [teachers, setTeachers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('api/teachers/reviews'); // Call the imported GET function
        if (response.status === 200) {
          const data = await response.json();
          setTeachers(data);
          console.log(data)
        } else {
          setError("Failed to fetch teachers");
        }
      } catch (err) {
        setError("Error fetching teachers");
        console.error(err);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div>
    <h1 className="font-title text-center text-3xl p-5">Lietuvos mokytojai</h1>
    <FilterTeachers/>
      {error && <p>{error}</p>}
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            <TeacherCase
            name={teacher.name}
            surname={teacher.surname}
            subject={teacher.subject}
            school={teacher.school}
            imgUrl={teacher.imageUrl}
            rating={teacher.rating}
            />
          </li>
        ))}
      </ul>
      <div className="container mx-auto text-center p-10">
          <Link 
          href="/prideti-mokykla"
          className='text-lg font-monserrat font-bold text-primary'
        >Nerandate mokyklos ar universiteto?</Link>
    </div>
    </div>
  );
};
export default TeachersPage;