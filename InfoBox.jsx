import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({Info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1580687774725-4e23db308efc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const RAIN_URL = "https://plus.unsplash.com/premium_photo-1670002344425-f274ee445f76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <div className='infobox'>
      <div className='cardContainer'>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            Info.humidity > 80 
            ? RAIN_URL
            : Info.temp > 15
            ? HOT_URL
            :COLD_URL
            }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {Info.city}{
            Info.humidity > 80 
            ? <ThunderstormIcon/>
            : Info.temp > 15
            ? <WbSunnyIcon/>
            :<AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <div>Temperature = {Info.temp}&deg;C</div>
          <div>Humidity = {Info.humidity}</div>
          <div>Min-Temp = {Info.tempMin}&deg;C</div>
          <div>Min-Temp = {Info.tempMax}&deg;C</div>
          <div>The weather can be described as {Info.weather} and feels like = {Info.feelslike}&deg;C</div>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}
