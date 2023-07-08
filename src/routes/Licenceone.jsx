import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import First from '../assets/1st.png';
import Background from '../assets/one.png';
import Course from '../components/Courses';
import Navbar from '../components/Navbar';

import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

function Licenceone() {
  const courses = [
    {
      name: 'Computer Science LMD',
      image: First,
      description: 'Description for Course 1',
      link: '/Courseone',
    },
    {
      name: 'Computer Science ENG',
      image: First,
      description: 'Description for Course 2',
      link: '/Courseone',
    },
  ];

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    courses.forEach((course, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: `#course-${index}`,
        triggerHook: 0.8, 
      })
        .setClassToggle(`#course-${index}`, 'show') 
        .addTo(controller);
    });

    return () => {
      controller.destroy(); 
    };
  }, []);

  return (
    <div className="background-one">
      <Navbar />
      <div className="container mx-auto p-4 mt-8">
        <h1 className="text-black text-center font-bold text-4xl mb-20 mt-20">&#123; Licence 1 Courses &#125;</h1>
        <p className="text-black text-center mb-20">Here you can find all the resources for master degree courses</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {courses.map((course, index) => (
            <div key={index} id={`course-${index}`}>
              <Link to={course.link}> 
                <Course
                  name={course.name}
                  description={course.description}
                  picture={course.image}
                  link={course.link}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Licenceone;
