import React from 'react'
import ReactPlayer from 'react-player'

const Video = () => {
  return (
    <div className='w-full h-screen flex items-center bg-gradient-to-r from-[#ff9966] to-[#ff5e62]'>
        <div className='w-full lg:w-10/12 h-full md:h-full lg:h-full mx-auto flex justify-center'>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=lvfFipRDlZs`}
            controls
            playing={true}
            width="100%"
            height="100%"
          />
        </div>
    </div>
  )
}

export default Video