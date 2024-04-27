import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen flex items-center py-20 lg:pt-0'>
      <div className='w-11/12 lg:w-10/12 h-full mx-auto flex flex-row flex-wrap lg:flex-nowrap justify-evenly lg:justify-between items-center gap-x-6 gap-y-6'>
        <Link to={'youtubeVideo'} className=' group w-full lg:w-1/2 text-5xl lg:rounded-3xl hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-105 transition-all duration-200 ease-in-out text-white font-bold flex justify-center items-center px-4 py-16 lg:py-36 bg-purple-400'>
          Play YouTube Video
          {/* <div className='absolute bottom-0 bg-black opacity-60 w-full rounded-3xl transition-all duration-200 ease-in-out h-0 group-hover:h-full'><FaYoutube/></div> */}
        </Link>

        <Link to={'game'} className='w-full lg:w-1/2 text-5xl lg:rounded-3xl hover:shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] hover:scale-105 transition-all duration-200 ease-in-out text-white font-bold flex justify-center items-center px-4 py-16 lg:py-36 bg-teal-400'>
          Play the Video Game
        </Link>
      </div>
    </div>
  )
}

export default Home