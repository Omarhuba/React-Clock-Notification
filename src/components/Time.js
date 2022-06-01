import React, {useState} from 'react'

function Time() {
    const [currentTime, setCurrentTime] = useState()
    const updateTime = ()=>{
      const  time = new Date().toLocaleTimeString()
        setCurrentTime(time)
    }
    setInterval(updateTime, 1000)
  return (
    <div>
        <h1>{currentTime}</h1>
    </div>
  )
}

export default Time