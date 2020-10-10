import React from 'react'
import ReactPlayer from 'react-player'


const Video = () => {
    return(
        <div className = 'player-wrapper mb-4 '>
            <ReactPlayer
            className =' react-player'
            url = 'https://youtu.be/WNz9C_vyIB0'
            width = '100%'
            height = '400px'
            controls = {true}
            />
        </div>
    )
}

export default Video;