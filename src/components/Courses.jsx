import React from 'react';

function Courses({ name, description, picture, link }) {
  return (
    <div className="bg-gray-900 hover:bg-red-700 p-4 rounded shadow-lg hover:shadow-xl">
      <img src={picture} alt={name} className="w-full mb-2" />
      <h3 className="text-white text-lg font-semibold mb-1">{name}</h3>
      <p className="text-white text-sm">{description}</p>
      <a href={link} className="text-blue-500 hover:underline">
        Learn More
      </a>
    </div>
  );
}

export default Courses;
