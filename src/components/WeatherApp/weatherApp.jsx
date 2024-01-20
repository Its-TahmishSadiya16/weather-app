
import React, { useState } from 'react';
import './WeatherApp.css';

import search_icon from '../Assets/search-icon.png';
import cloudy_icon from '../Assets/cloudy-icon.png';
import summer_icon from "../Assets/summer-icon.png";
import haze_icon from "../Assets/haze-icon.png";
import rainy_icon from "../Assets/rainy-icon.png";
import snow_icon from "../Assets/snow-icon.png";

function WeatherApp() {
    let api_key="4ffe0a5b578af54f27c79b97a3c7e9d8";

const[wicon,setwicon]=useState(cloudy_icon);

    const search= async()=>{
const element=document.getElementsByClassName("cityInput")
if (element[0].value==="")
{
    return 0;
}
let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
let response=await fetch(url);
let data = await response.json();
const humidity= document.getElementsByClassName("humidity-percent");
const wind = document.getElementsByClassName("wind-rate");
const tempreture=document.getElementsByClassName("weather-temp");
const location=document.getElementsByClassName("weather-location");

humidity[0].innerHTML=data.main.humidity+"%";
wind[0].innerHTML= Math.floor(data.wind.speed)+"km/h";
tempreture[0].innerHTML=Math.floor(data.main.temp)+"&deg;C";
location[0].innerHTML=data.name;


if (data.weather[0].icon==="01d"|| data.weather[0].icon==="01n")
{
    setwicon(summer_icon);
}
else if(data.weather[0].icon==="02d"|| data.weather[0].icon==="02n")
{
    setwicon(cloudy_icon);
}

else if(data.weather[0].icon==="03d"|| data.weather[0].icon==="03n")
{
    setwicon(haze_icon);
}

else if(data.weather[0].icon==="04d"|| data.weather[0].icon==="04n")
{
    setwicon(haze_icon);
}
else if(data.weather[0].icon==="09d"|| data.weather[0].icon==="09n")
{
    setwicon(rainy_icon);
}

else if(data.weather[0].icon==="10d"|| data.weather[0].icon==="10n")
{
    setwicon(rainy_icon);
}
else if(data.weather[0].icon==="13d"|| data.weather[0].icon==="13n")
{
    setwicon(snow_icon);
}else {
   setwicon (summer_icon);
}




    }



    return (
    
        <div className='container'>
            <div className='top-bar'>
            <input type='text' className='cityInput' placeholder='Write city name' />
            <div className="search-icon" onClick={()=>{search()}}>
                <img src={search_icon} alt="Search Icon" />
            </div>          
            </div>
            <div className='weather-image'>
                <img src={wicon} alt=''  className='cloud'></img>
            </div>
            <div className='weather-temp'>25&deg;C</div>
            <div className="weather-location">Mumbai</div>
            <div className="data-container"></div>
            <div className="elements">
                <img src=''alt='' className='icon'></img>
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            
            <div className="elements">
                <img src=''alt='' className='icon'></img>
                <div className="data">
                    <div className="wind-rate">18 km/hr</div>
                    <div className="text">Wind-speed</div>
                </div>
            </div>
        </div>
       
      
    );
}

export default WeatherApp;
