import sunny from "../assets/icons/sunny.svg";
import chanceRain from "../assets/icons/chance-rain.svg";
import clearNight from "../assets/icons/clear-night.svg";
import drizzles from "../assets/icons/drizzles.svg";
import fullMoon from "../assets/icons/full-moon.svg";
import hail from "../assets/icons/hail.svg";
import mostlyCloudy from "../assets/icons/mostly-cloudy.svg";
import overcastNight from "../assets/icons/overcast-night.svg";
import overcast from "../assets/icons/overcast.svg";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.svg";
import partlyCloudy from "../assets/icons/partly-cloudy.svg";
import rainy from "../assets/icons/rainy.svg";
import snowy from "../assets/icons/snowy.svg";
import thunderstorms from "../assets/icons/thunderstorms.svg";
import windy from "../assets/icons/windy.svg";


export const iconMap = {
    "clear sky" : sunny,
    "clear sky night": clearNight,
    "few clouds" : partlyCloudy,
    "few clouds night": partlyCloudyNight,
    "scattered clouds": partlyCloudy,
    "scattered clouds night": partlyCloudyNight,
    "broken clouds": partlyCloudy,
    "broken clouds night": partlyCloudyNight,
    "shower rain": rainy,
    "rain": rainy,
    "thunderstorm": thunderstorms,
    "snow": snowy,
    "mist": overcast,
    "mist night": overcastNight
}

export const returnIconMap = () => {
    return iconMap;
}
