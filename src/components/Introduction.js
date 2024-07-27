import React from 'react'

function Introduction() {
  return (

    // the div is the container which contains all the section of the home page
    <div >

      {/* the first section will be in this div */}
      <div className='introduction'>

        {/* descriptions */}
        <div className="text">
          <h1>Sarlahi Photography begins here</h1>

          <p>Discover the beauty of Sarlahi with us...</p>

          <p>Capture moments, tell stories, and create memories that last a lifetime</p>

          <button className='explore-button'>Explore More</button>

        </div>

        {/* images */}
        <div className=''>
          <img  className='introduction-image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Motorboat_Bharat_Taal_Sarlahi.jpg/2560px-Motorboat_Bharat_Taal_Sarlahi.jpg" alt="Sarlahi_image" >
          </img>
        </div>

      </div>

    </div>
  )
}

export default Introduction
