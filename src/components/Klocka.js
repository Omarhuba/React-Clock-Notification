import React from 'react'
import style from '../module/index.module.scss'



function Klocka() {
  return (
    <div className={style.Klocka}>
        <p className={style.tolv}>12</p>
        <p className={style.tre}>3</p>
        <p className={style.sex}>6</p>
        <p className={style.nio}>9</p>
        <div className={style.Stor}></div>
        <div className={style.Mellan}></div>
        <div className={style.Liten}></div>
    </div>
  )
}

export default Klocka