export type ClimaInterface = {
    cod: number;
    name: string;
    main: Main;
    weather: Weather[];
    wind: Wind;
}

export type Main = {
    feels_like: number;
    humidity: number;
    temp: number;
    temp_min: number;
    temp_max: number;
}

export type Weather = {
  description: string;
  icon: string;
}


export type Wind = {
    speed: number;
}
