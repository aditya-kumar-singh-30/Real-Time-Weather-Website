import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

export default function WeatherApp() {
    let[weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelslike: 37.11,
        humidity: 16,
        temp: 39.05,
        tempMax: 39.05,
        tempMin: 39.05,
        weather : "haze",
    })
    let updateInfo = (newInfo)=>{
          setWeatherInfo(newInfo);
    }
  return (
    <div style={{textAlign : "center"}}>
      <h1>Weather App by Aditya</h1>
      <SearchBox updateInfo={updateInfo }/>
      <InfoBox Info = {weatherInfo}/>
    </div>
  )
}
