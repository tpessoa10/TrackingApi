export type PrevisaoInterface = {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export type ForecastItem = {
  dt: number;
  main: Main;
  weather: Weather[];
  dt_txt: string;
}

export type Main = {
  temp: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export type Weather = {
  description: string;
  icon: string;
}

export type City = {
  name: string;
  country: string;
}
