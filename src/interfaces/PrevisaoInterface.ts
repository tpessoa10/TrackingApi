export interface PrevisaoInterface {
  dt: number;
  dt_txt: string;
  main: Main;
  weather: Weather[];
}

export interface Main {
  humidity: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Weather {
  description: string;
  icon: string;
}