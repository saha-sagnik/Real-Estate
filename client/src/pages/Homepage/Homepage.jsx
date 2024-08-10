import React, { useContext } from 'react'
import '../Homepage/Homepage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useTypewriter } from 'react-simple-typewriter'
import { AuthContext } from '../../context/AuthContext';

function Homepage() {

  const {currentUser} = useContext(AuthContext);
  //console.log(currentUser)

  const [text] = useTypewriter({
    words: ['घर', 'ঘর', 'ಮನೆ', 'வீடு'],
    loop: 0
  })


  return (
    <div className='homepage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Discover Your <br /> Dream {text} <br /> with PrimeEstate </h1>
          <p>
          Welcome to PrimeEstates - where dreams meet reality! Explore our curated collection of homes tailored to your desires. 
          Begin your journey with us today!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>

      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Homepage