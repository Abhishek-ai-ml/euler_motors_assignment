import React from 'react'

const Game = () => {
  return (
    <div className='w-full h-screen flex items-center bg-black lg:bg-gradient-to-r from-[#2c3e50] to-[#3498db] pt-20'>
        <div id='game' className='w-full lg:w-10/12 h-full md:h-full lg:h-full mx-auto flex justify-center'>
          <iframe src="https://freehtml5games.org/games/ninja-run-2/index.html" width="100%" height="100%" frameborder="0" scrolling="no"></iframe>
        </div>
    </div>
  )
}

export default Game