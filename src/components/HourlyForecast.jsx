import thunderstorms from "../assets/icons/thunderstorms.svg";

function HourlyForecast() {
    return (
        <div className="wa__view wa__view-hourly">
            <div className="wa__view-hourly-container">
                <div className="wa__view-hour">
                    <p className="wa__view-hour-degrees">35°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-hour-time">
                        <span className="wa__view-hour-hour">1:00</span>PM
                        </p>
                </div>
                <div className="wa__view-hour">
                    <p className="wa__view-hour-degrees">35°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-hour-time">
                        <span className="wa__view-hour-hour">2:00</span>PM
                        </p>
                </div>
                <div className="wa__view-hour">
                    <p className="wa__view-hour-degrees">35°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-hour-time">
                        <span className="wa__view-hour-hour">3:00</span>PM</p>
                </div>
                <div className="wa__view-hour">
                    <p className="wa__view-hour-degrees">35°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-hour-time"><span className="wa__view-hour-hour">4:00</span>PM</p>
                </div>
                <div className="wa__view-hour">
                    <p className="wa__view-hour-degrees">35°</p>
                    <img className="wa__view-hour-icon" src={thunderstorms} alt="Thunderstorms"/>
                    <p className="wa__view-hour-time"><span className="wa__view-hour-hour">5:00</span>PM</p>
                </div>
            </div>
        </div>
    )
}

export default HourlyForecast;
