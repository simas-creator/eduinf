'use client'
import React, { useState } from 'react';
import TeacherForm from './TeacherForm'
const SchoolForm = () => {
  const [jsonData, setJsonData] = useState({
    name: "",
    apskritis: "",
    teachers: [],
    review: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('value', value);
    setJsonData({ ...jsonData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', jsonData);
    // Add form submission logic here
  };

  return (
    <section className="flex justify-between">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg space-y-4 my-5"
      >
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

        <div className="space-y-2">
          <div className="flex flex-col">
                <label htmlFor="apskritis" className="block text-sm font-medium text-gray-700">Apskritis*</label>
                <select id="apskritis" className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                  <option>Alytaus</option>
                  <option>Kauno</option>
                  <option>Klaipėdos</option>
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

        <button type="submit" className="btn btn-outline btn-primary">
          Pridėti
        </button>
      </form>
    </section>
  );
};

export default SchoolForm;
