import thunderstorms from "../assets/icons/thunderstorms.svg";
function DailyForecast () {
    return (
        <div className="wa__view wa__view-daily">
            <div className="wa__view-daily-container">
                <div className="wa__view-day">
                    <p className="wa__view-daily-low">L: 24°</p>
                    <p className="wa__view-daily-high">H: 49°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-daily-day">Mon</p>
                </div>
                <div className="wa__view-day">
                    <p className="wa__view-daily-low">L: 24°</p>
                    <p className="wa__view-daily-high">H: 49°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-daily-day">Tues</p>
                </div>
                <div className="wa__view-day">
                    <p className="wa__view-daily-low">L: 24°</p>
                    <p className="wa__view-daily-high">H: 49°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-daily-day">Wed</p>
                </div>
                <div className="wa__view-day">
                    <p className="wa__view-daily-low">L: 24°</p>
                    <p className="wa__view-daily-high">H: 49°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-daily-day">Thurs</p>
                </div>
                <div className="wa__view-day">
                    <p className="wa__view-daily-low">L: 24°</p>
                    <p className="wa__view-daily-high">H: 49°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-daily-day">Fri</p>
                </div>
            </div>
        </div>
    )
}

export default DailyForecast;