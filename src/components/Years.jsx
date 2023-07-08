import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logowhiteitc.png';
import First from '../assets/1st.png';
import Second from '../assets/2nd.png';
import Third from '../assets/3rd.png';
import Course from './Courses';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

function Years() {
  const gridItems = [
    {
      name: '1st year students',
      image: First,
      description: 'Description for 1st year students',
      link: '/Licenceone',
    },
    {
      name: '2nd year students',
      image: Second,
      description: 'Description for 2nd year students',
      link: '/Licencetwo',
    },
    {
      name: '3rd year students',
      image: Third,
      description: 'Description for 3rd year students',
      link: '/Licencethree',
    },
    {
      name: 'Master 1 students',
      image: First,
      description: 'Description for Master 1 students',
      link: '/Masterone',
    },
    {
      name: 'Master 2 students',
      image: Second,
      description: 'Description for Master 2 students',
      link: '/Mastertwo',
    },
  ];

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    
    gridItems.forEach((item, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: `#grid-item-${index}`,
        triggerHook: 0.8, 
      })
        .setClassToggle(`#grid-item-${index}`, 'show') 
        .addTo(controller);
    });

    return () => {
      controller.destroy(); 
    };
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-black text-center font-bold text-4xl mb-20">&#123; Courses available... &#125;</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {gridItems.map((item, index) => (
          <div key={index} id={`grid-item-${index}`}>
            <Link to={item.link}>
              <Course
                name={item.name}
                description={item.description}
                picture={item.image}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Years;

