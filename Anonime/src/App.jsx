import { useState } from 'react'
import {data} from './data'
import Explore from './components/Explore'
import NewRelease from './components/NewRelease'
import Banner from '/public/banner.png'
import './App.css'

function App() {
  const [movie, setMovie] = useState({
    image: Banner,
    movieName: 'Weather With You',
    description: ' Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis.'
  })

  return (
    <div className='container'>
      <div className='topFeat'>
        <h1>Anonime</h1>
        <p>Home</p>
        <p>List anime</p>
        <input type="text" placeholder='Search anime or movie'/>
      </div>
      <Explore movie={movie}/>
      <div className='bottomFeat'>
        <h1>New Release</h1>
        <div className='movies'>
          <div>
            <NewRelease movie={data[1]} movieDisplay={setMovie}/>
          </div>
          <div>
            <NewRelease movie={data[2]} movieDisplay={setMovie}/>
          </div>
          <div>
            <NewRelease movie={data[3]} movieDisplay={setMovie}/>
          </div>
          <div>
            <NewRelease movie={data[4]} movieDisplay={setMovie}/>
          </div>
          <div>
            <NewRelease movie={data[5]} movieDisplay={setMovie}/>
          </div>
          <div>
            <NewRelease movie={data[6]} movieDisplay={setMovie}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
