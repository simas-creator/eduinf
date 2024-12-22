'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const SchoolForm = () => {
  const router = useRouter();
  const [jsonData, setJsonData] = useState({
    name: "",
    apskritis: "Alytaus",
    teachers: [],
    review: "",
    mu: "Mokykla",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJsonData({ ...jsonData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', jsonData);
  
    try {
      const response = await fetch("./api/schools/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        const result = await response.json(); // Read the JSON only once
        console.log('Server response:', result);
        router.push('./perziureti-mokyklas');
      } else {
        console.log('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  return (
    <section className="flex justify-between">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4 my-5"
      >
        {/* Input for Name */}
        <div className="flex gap-10">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Pavadinimas*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={jsonData.name}
              onChange={handleChange}
              className="input input-bordered input-primary w-full max-w-xs"
              required
              onInvalid={(e) => e.target.setCustomValidity('Įveskite vardą')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </div>
        </div>

        {/* Dropdown for Apskritis */}
        <div className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="apskritis" className="block text-sm font-medium text-gray-700">
              Apskritis*
            </label>
            <select
              id="apskritis"
              name="apskritis"
              value={jsonData.apskritis}
              onChange={handleChange}
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Alytaus</option>
              <option>Kauno</option>
              <option>Klaipėdos</option>
              <option>Marijampolės</option>
              <option>Panevėžio</option>
              <option>Šiaulių</option>
              <option>Tauragės</option>
              <option>Telšių</option>
              <option>Utenos</option>
              <option>Vilniaus</option>
            </select>
          </div>
        </div>

        {/* Dropdown for Type */}
        <div className="space-y-2">
          <div className="flex flex-col">
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              Tipas*
            </label>
            <select
              id="mu"
              name="type"
              value={jsonData.mu}
              onChange={handleChange}
              className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            >
              <option>Mokykla</option>
              <option>Universitetas</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-outline btn-primary">
          Pridėti
        </button>
      </form>
    </section>
  );
};

export default SchoolForm;
