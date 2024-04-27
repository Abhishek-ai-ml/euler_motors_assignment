import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-gradient-to-r from-[#642B73] to-[#C6426E] fixed top-0 left-0 right-0'>
        <div className='w-11/12 h-full mx-auto flex flex-row text-xl text-white font-semibold justify-center items-center gap-x-10'>
          <Link to={'/'}>Home</Link>
          <Link to={'youtubeVideo'}>Video</Link>
          <Link to={'game'}>Game</Link>
        </div>
    </div>
  )
}

export default Navbar