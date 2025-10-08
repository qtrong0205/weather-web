import { getWeatherData } from "../service/api";

export interface IWeatherData {
    coord: {
        lon: number;
        lat: number;
    };
    weather: {
        id: number;
        main: string;
        description: string;
        icon: string;
    }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust?: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

let weatherData: IWeatherData = {
    coord: {
        lon: 0,
        lat: 0,
    },
    weather: [
        {
            id: 0,
            main: "",
            description: "",
            icon: "",
        },
    ],
    base: "",
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        pressure: 0,
        humidity: 0,
    },
    visibility: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0,
    },
    clouds: {
        all: 0,
    },
    dt: 0,
    sys: {
        country: "",
        sunrise: 0,
        sunset: 0,
    },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
};

const createData = async (lat: number, lon: number) => {
    const data = await getWeatherData(lat, lon);
    if (data) {
        weatherData = data;
    }
    else {
        return null;
    }
}

interface IGeneralData {
    city: string;
    country: string;
    temperature: number;
    description: string;
    icon: string;
    realFeel: number;
    wind: number;
    pressure: number;
    humidity: number;
    sunrise: string;
    sunset: string;
    time: string;
}

const getGeneralData = () => {
    const generalData: IGeneralData = {
        city: weatherData.name,
        country: weatherData.sys.country,
        temperature: Math.round(weatherData.main.temp),
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        realFeel: Math.round(weatherData.main.feels_like),
        wind: weatherData.wind.speed,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        sunrise: new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sunset: new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    return generalData;
}

export { createData, getGeneralData };