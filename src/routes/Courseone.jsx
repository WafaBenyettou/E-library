import React, { useEffect } from 'react';
import First from '../assets/1st.png';
import Background from '../assets/one.png';
import Course from '../components/Semster';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import ScrollMagic from 'scrollmagic';

function Courseone() {
  const semester1Courses = [
  
    {
      name: 'ALSDS - Algorithm data structures statiques',
      CLink: 'link-to-course-alsds',
      tpLink: 'link-to-alsds-tp',
      tdLink: 'link-to-alsds-td',
      examsLink: 'link-to-alsds-exams',
    },
    {
        name: 'ARCHI1 - Architecture des ordinateurs 1',
        CLink: 'link-to-course-archi1',
        tpLink: 'link-to-archi1-tp',
        tdLink: 'link-to-archi1-td',
        examsLink: 'link-to-archi1-exams',
      },
      {
        name: 'ALG1 - Algèbre Mathématique 1',
        CLink: 'link-to-course-alg1',
        tpLink: 'link-to-alg1-tp',
        tdLink: 'link-to-alg1-td',
        examsLink: 'link-to-alg1-exams',
      },
    {
      name: 'ANA1 - Analyse Mathématique 1',
      CLink: 'link-to-course-ana1',
      tpLink: 'link-to-ana1-tp',
      tdLink: 'link-to-ana1-td',
      examsLink: 'link-to-ana1-exams',
    },
    {
        name: 'SYST1 - Système d’exploitation 1',
        CLink: 'link-to-course-syst1',
        tpLink: 'link-to-syst1-tp',
        tdLink: 'link-to-syst1-td',
        examsLink: 'link-to-syst1-exams',
      },

    {
      name: 'BWEB - Bureautique et Web',
      CLink: 'link-to-course-bweb',
      tpLink: 'link-to-bweb-tp',
      tdLink: 'link-to-bweb-td',
      examsLink: 'link-to-bweb-exams',
    },
    {
      name: 'ELECT - Electricité',
      CLink: 'link-to-course-elect',
      tpLink: 'link-to-elect-tp',
      tdLink: 'link-to-elect-td',
      examsLink: 'link-to-elect-exams',
    },
  
    {
      name: 'TEE',
      CLink: 'link-to-course-tee',
      tpLink: 'link-to-tee-tp',
      tdLink: 'link-to-tee-td',
      examsLink: 'link-to-tee-exams',
    },
  ];

  const semester2Courses = [
    {
      name: 'ALG2 - Algèbre Mathématique 2',
      CLink: 'link-to-course-alg2',
      tpLink: 'link-to-alg2-tp',
      tdLink: 'link-to-alg2-td',
      examsLink: 'link-to-alg2-exams',
    },
    {
      name: 'ALSDD - Algorithm data structures dynamiques',
      CLink: 'link-to-course-alsdd',
      tpLink: 'link-to-alsdd-tp',
      tdLink: 'link-to-alsdd-td',
      examsLink: 'link-to-alsdd-exams',
    },
    {
      name: 'ANA2 - Analyse Mathématique 2',
      CLink: 'link-to-course-ana2',
      tpLink: 'link-to-ana2-tp',
      tdLink: 'link-to-ana2-td',
      examsLink: 'link-to-ana2-exams',
    },
   
    {
      name: 'ELECF1 - Electronique Fondamentale 1',
      CLink: 'link-to-course-elecf1',
      tpLink: 'link-to-elecf1-tp',
      tdLink: 'link-to-elecf1-td',
      examsLink: 'link-to-elecf1-exams',
    },
    {
      name: 'MECA - Mécanique du Point',
      CLink: 'link-to-course-meca',
      tpLink: 'link-to-meca-tp',
      tdLink: 'link-to-meca-td',
      examsLink: 'link-to-meca-exams',
    },
    {
      name: 'SYST2 - Introduction au Système d’exploitation 2',
      CLink: 'link-to-course-syst2',
      tpLink: 'link-to-syst2-tp',
      tdLink: 'link-to-syst2-td',
      examsLink: 'link-to-syst2-exams',
    },
    {
      name: 'TEO',
      CLink: 'link-to-course-teo',
      tpLink: 'link-to-teo-tp',
      tdLink: 'link-to-teo-td',
      examsLink: 'link-to-teo-exams',
    },
    {
        name: 'ANG1 - Anglais 1',
        CLink: 'link-to-course-ang1',
        tpLink: 'link-to-ang1-tp',
        tdLink: 'link-to-ang1-td',
        examsLink: 'link-to-ang1-exams',
      },
  ];

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    semester1Courses.forEach((course, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: `#course-semester1-${index}`,
        triggerHook: 0.8,
      })
        .setClassToggle(`#course-semester1-${index}`, 'show')
        .addTo(controller);
    });

    semester2Courses.forEach((course, index) => {
      const scene = new ScrollMagic.Scene({
        triggerElement: `#course-semester2-${index}`,
        triggerHook: 0.8,
      })
        .setClassToggle(`#course-semester2-${index}`, 'show')
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
<div className="mb-10">
        <h2 className="text-black text-center font-bold text-2xl mb-6">Semestre 1</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {semester1Courses.map((course, index) => (
            <div key={index} id={`course-semester1-${index}`}>
              <Course
                name={course.name}
                CLink={course.CLink}
                tpLink={course.tpLink}
                tdLink={course.tdLink}
                examsLink={course.examsLink}
              />
            </div>
          ))}
        </div>
        </div>
        <h2 className="text-black text-center font-bold text-2xl mb-6">Semestre 2</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {semester2Courses.map((course, index) => (
            <div key={index} id={`course-semester2-${index}`}>
              <Course
                name={course.name}
                tpLink={course.tpLink}
                tdLink={course.tdLink}
                examsLink={course.examsLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courseone;
