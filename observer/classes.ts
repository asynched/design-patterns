import { Subject, Observer, WeatherInfo, DisplayElement } from './interfaces.ts'

export class WeatherData implements Subject<WeatherInfo> {
  private weatherInfo: WeatherInfo
  private observers: Observer<WeatherInfo>[]

  constructor() {
    this.observers = []
    this.weatherInfo = {
      temperature: 0,
      humidity: 0,
      pressure: 0,
    }
  }

  public registerObserver(observer: Observer<WeatherInfo>): void {
    this.observers = [...this.observers, observer]
  }

  public removeObserver(observer: Observer<WeatherInfo>): void {
    this.observers = this.observers.filter(
      currentObserver => currentObserver !== observer
    )
  }

  public notifyObservers(data: WeatherInfo): void {
    this.observers.forEach(observer => observer.update(data))
  }

  /**
   *
   * @returns Current temperature
   */
  public getTemperature(): number {
    return this.weatherInfo.temperature
  }

  /**
   *
   * @returns Current humidity
   */
  public getHumidity(): number {
    return this.weatherInfo.pressure
  }

  /**
   *
   * @returns Current pressure
   */
  public getPressure(): number {
    return this.weatherInfo.pressure
  }

  /**
   *
   * @param weatherInfo weather info to be stored in the state
   */
  public setMeasurements(weatherInfo: WeatherInfo): void {
    this.weatherInfo = weatherInfo
    this.notifyObservers(this.weatherInfo)
  }
}

export class CurrentConditionsDisplay
  implements Observer<WeatherInfo>, DisplayElement
{
  private weatherInfo: WeatherInfo

  constructor() {
    this.weatherInfo = {
      temperature: 0,
      humidity: 0,
      pressure: 0,
    }
  }

  public update(data: WeatherInfo) {
    this.weatherInfo = data
    this.display()
  }

  public display() {
    console.log(`Temperatura: ${this.weatherInfo.temperature}°C 🌡️`)
    console.log(`Humidade: ${this.weatherInfo.temperature}% 💧`)
    console.log(`Pressão: ${this.weatherInfo.pressure}pa 💨`)
  }
}

export class StatisticsDisplay
  implements Observer<WeatherInfo>, DisplayElement
{
  private weatherInfoArray: WeatherInfo[]

  constructor() {
    this.weatherInfoArray = []
  }

  public update(data: WeatherInfo) {
    this.weatherInfoArray = [...this.weatherInfoArray, data]
    this.display()
  }

  public display(): void {
    const currentWeatherInfo = this.getCurrentWeatherInfo()
    const previousWeatherInfo = this.getPreviousWeatherInfo()

    console.log(
      `A medição atual de temperatura foi de: ${currentWeatherInfo.temperature}°C 🌡️`
    )

    if (previousWeatherInfo) {
      console.log(
        `A medição anterior de temperatura foi de: ${previousWeatherInfo.temperature}°C 🌡️`
      )
    }
  }

  /**
   * ## Getter for the previous weather info `(nth - 2)` stored in the state
   * @returns Previous weather info or undefined
   */
  private getPreviousWeatherInfo(): WeatherInfo | undefined {
    return this.weatherInfoArray[this.weatherInfoArray.length - 2]
  }

  /**
   * ## Getter for the last weather info stored in the state
   * @returns Current weather info
   */
  private getCurrentWeatherInfo() {
    return this.weatherInfoArray[this.weatherInfoArray.length - 1]
  }
}
