import React from 'react'
import './Home.css'

function Home() {
  return (
<>
<div className='home'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQki9Nx7ZcjspzNXKaLeWNK2E3bTCqCuz-F-erjSv7arzvxbGAh8xWTdptxKjopXqxZJV0&usqp=CAU" alt="" />
        <h1><span>I'm Mhd Swalih,</span> fullstack developer</h1>
        <p style={{textAlign:'center'}}>I'm MOHAMMED SWALIH KT.and i bring a diverse background in MEARN stack to contribute to the teams success .
         I am pursing a MEARN stack cource at LUMINAR TECHNOLAB,CALICUT.KERALA To enhance my skills in full stack development.</p>
        <div className='home-action'>
          <div className=" btn btn-success home-connect">
            Connect with me
          </div>
          <div className=" btn  home-resume ">My resume</div>
        </div>
      </div>

</>  )
}

export default Home