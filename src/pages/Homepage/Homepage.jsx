import React from 'react'
import '../Homepage/Homepage.scss';
import SearchBar from '../../components/SearchBar/SearchBar';

function Homepage() {
  return (
    <div className='homepage'>
      <div className="textContainer">
        <div className="wrapper">
          <h1 className='title'>Find Real estate and Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ipsum magni obcaecati debitis itaque hic quasi quia repellat quam suscipit corrupti ex, magnam
            maiores excepturi esse facere earum recusandae, dolor architecto?
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