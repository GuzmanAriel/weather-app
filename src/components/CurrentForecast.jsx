import thunderstorms from "../assets/icons/thunderstorms.svg";
function CurrentForecast () {
    return(
        <div className="wa__view wa__view-current">
            <div className="wa__view-current-top">
                <h1 className="wa__view-location">Austin</h1>
                <p className="wa__view-date">Jan 18</p>
            </div>  
            <div className="wa__view-current-bottom">
                <img className="wa__view-icon" src={thunderstorms} alt="Thunderstorms Icon"/>
                <div className="wa__view-weather">
                    <p className="wa__view-weather-temp">72°</p>
                    <p className="wa__view-weather-desc">Thunderstorms</p>
                </div>
            </div>       
        </div>
    )
}

export default CurrentForecast;