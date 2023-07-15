import './App.css';
import CurrentForecast from './components/CurrentForecast';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';
import {iconMap} from "./components/IconMap.js";

function App() {
  const appKey =  process.env.REACT_APP_WEATHER_API_KEY;
   console.log('%cApp.js line:8 process.env.REACT_APP_WEATHER_API_KEY', 'color: #007acc;', process.env.REACT_APP_WEATHER_API_KEY);
  console.log('%cApp.js line:8 returnIconMap', 'color: #007acc;', iconMap);
  return (
    <div className="App">
      <div className="app-container">
        <CurrentForecast iconMap={iconMap} appKey={appKey}/>
        <HourlyForecast/>
        <DailyForecast />
      </div>
    </div>
  );
}

export default App;
