export type ClimaInterface = {
    cod: number;
    name: string;
    main: Main;
    weather: Weather[];

}

export type Main = {
    feels_like: number;
    humidity: number;
    temp: number;
}

export interface Weather {
  description: string;
  icon: string;
}


