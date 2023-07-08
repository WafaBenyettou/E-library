import React, { useEffect } from 'react';
import Logo from '../assets/1st.png';
import Course from '../components/Courses';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

function Licencetwo() {
  const courses = [
    {
      name: 'ISIL',
      image: Logo,
      description: 'Description for Course 1',
      link: '/course-1',
    },
    {
      name: 'SIQ',
      image: Logo,
      description: 'Description for Course 2',
      link: '/course-2',
    },
  ];

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    // Create a scene for each course
    courses.forEach((course, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: `#course-${index}`,
        triggerHook: 0.8, // Adjust this value to control when the animation starts
      })
        .setClassToggle(`#course-${index}`, 'show') // Add the 'show' class to animate the course
        .addTo(controller);
    });

    return () => {
      controller.destroy(); // Clean up the ScrollMagic controller when the component is unmounted
    };
  }, []);

  return (
    <div className="background-two">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-black text-center font-bold text-4xl mb-20 mt-20">&#123; Licence 3 Courses &#125;</h1>
        <p className="text-black text-center mb-20">Here you can find all the resources for master degree courses</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {courses.map((course, index) => (
            <div key={index} id={`course-${index}`}>
              <Course
                name={course.name}
                description={course.description}
                picture={course.image}
                link={course.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Licencetwo;
