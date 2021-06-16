import {
  CurrentConditionsDisplay,
  StatisticsDisplay,
  WeatherData,
} from "./classes.ts";

const currentConditionsDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();

const weatherData = new WeatherData();
weatherData.registerObserver(statisticsDisplay);
weatherData.registerObserver(currentConditionsDisplay);

weatherData.setMeasurements({
  humidity: 10,
  pressure: 5,
  temperature: 32,
});

weatherData.setMeasurements({
  humidity: 20,
  pressure: 12,
  temperature: 24,
});
