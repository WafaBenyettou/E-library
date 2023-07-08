import React from 'react';
import { useSpring, animated } from 'react-spring';
import Logo from '../assets/logo2.png';
import SearchBar from './Searchbar';
import Background from './Background';

function Home() {
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
    <Background timeout={50}/>
    <animated.div className="flex flex-col items-center justify-center min-h-screen" style={fadeAnimation}>
     
      <img src={Logo} alt="ITCLOGO" className="w-64 md:w-96" />
      <h1 className="text-black text-4xl font-bold mt-4 text-center">Welcome to My USDBVerse</h1>
      <p className="text-black text-lg text-gray-600 mt-4 mb-5 text-center">Explore and find what you're looking for.</p>
      <SearchBar />
    </animated.div>
    </>
  );
}

export default Home;
