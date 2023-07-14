import thunderstorms from "../assets/icons/thunderstorms.svg";
import { useEffect, useState
 } from "react";
function CurrentForecast () {
    const [locationName, setLocationName] = useState("");
    const [temp, setTemp] = useState(null);
    const [description, setDescription] = useState("");
    //setCurrentDate(); 

    const returnCurrentDate = () => {
        const today = new Date();
        const month = today.getMonth();
        const date = today.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        return `${monthNames[month]} ${date}`;
    }

    const returnTemp = () => {
        const temperature = Math.trunc(temp);
        

        return temperature;
    }
    
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=30.2672&lon=-97.733330&exclude=hourly,daily,minutely,alerts&units=imperial&appid=5a469e083d65e3be67d4d3cab2da6ec9')
          .then(response => response.json())
          .then(data => {
            setLocationName(data.name);
            setTemp(data.main.temp);
            setDescription(data.weather[0].description);
            console.log('%cCurrentForecast.jsx line:12 data', 'color: #007acc;', data.weather[0].description);
          })
          .catch(error => console.error(error));
      }, []);


    return(
        <div className="wa__view wa__view-current">
            <div className="wa__view-current-top">
                <h1 className="wa__view-location">{locationName}</h1>
                <p className="wa__view-date">{returnCurrentDate()}</p>
            </div>  
            <div className="wa__view-current-bottom">
                <img className="wa__view-icon" src={thunderstorms} alt="Thunderstorms Icon"/>
                <div className="wa__view-weather">
                    <p className="wa__view-weather-temp">{returnTemp()}°</p>
                    <p className="wa__view-weather-desc">{description}</p>
                </div>
            </div>       
        </div>
    )
}

export default CurrentForecast;