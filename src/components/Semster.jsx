import React from 'react';

function Semster({ name,CLink, tpLink, tdLink, examsLink }) {
  return (
    <div className=" p-4 bg-gray-900 rounded w-full h-full course-item">
      <h3 className="text-white text-lg font-semibold mb-4 p-5 course-name">{name}</h3>
      <div className=" bg-white rounded text-black-500 p-4">
      <ul className=" course-menu">
      <li>
          <a href={CLink} className='hover:underline'>Cours</a>
        </li>
        <li>
          <a href={tpLink} className='hover:underline'>Travaux pratiques (TP)</a>
        </li>
        <li>
          <a href={tdLink} className='hover:underline'>Travaux dirigés (TD)</a>
        </li>
        <li>
          <a href={examsLink} className='hover:underline'>Exams</a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default Semster;
