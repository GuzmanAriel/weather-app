import './App.css';
import CurrentForecast from './components/CurrentForecast';
import DailyForecast from './components/DailyForecast';
import HourlyForecast from './components/HourlyForecast';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <CurrentForecast/>
        <HourlyForecast/>
        <DailyForecast />
      </div>
    </div>
  );
}

export default App;
