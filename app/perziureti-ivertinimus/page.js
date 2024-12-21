'use client'
import { useEffect, useState } from "react";
import FilterSchools from "@/components/FilterSchools";
import TeacherCase from "@/components/TeacherCase";
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
    <FilterSchools/>
      <h1>Teachers</h1>
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
      
    </div>
  );
};
export default TeachersPage;