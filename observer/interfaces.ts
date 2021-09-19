export interface WeatherInfo {
  temperature: number
  humidity: number
  pressure: number
}

export interface Observer<T> {
  /**
   * ## Abstract method to update an observer
   * @param data Data parameter to update the observer
   */
  update(data: T): void
}

export interface Subject<T> {
  /**
   * ## Registers a new observer to a subject
   * @param observer Observer do be registered
   */
  registerObserver(observer: Observer<T>): void

  /**
   * ## Unregisters an existing observer from the subject
   * @param observer Observer to be unregistered
   */
  removeObserver(observer: Observer<T>): void

  /**
   * ## Notifies all registered observers with the data
   * @param data Data to notify the observers
   */
  notifyObservers(data: T): void
}

export interface DisplayElement {
  /**
   * ## Abstract method to display onscreen info
   */
  display(): void
}
