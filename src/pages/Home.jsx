import React from 'react'
import Header from '../components/Header'
import DisplayBooks from '../components/DisplayBooks'

function Home() {
  return (
    <div>

      <div className='section1'>
          <Header/>
      </div>

      <div className='section2'>
          <DisplayBooks/>
      </div>



    </div>
  )
}

export default Home