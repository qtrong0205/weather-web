import { getForecastDataAPI, getWeatherData } from "../service/api";

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
    getForecastData();
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

const getLocalTime = (dt: number, timezone: number) => {
    const utc = dt * 1000; // thời gian UTC
    const local = utc + timezone * 1000; // thêm offset của địa điểm
    const date = new Date(local);

    // ép toLocale theo UTC để tránh bị cộng thêm timezone máy
    return date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    });
};


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
        time: getLocalTime(weatherData.dt, weatherData.timezone),
        sunrise: getLocalTime(weatherData.sys.sunrise, weatherData.timezone),
        sunset: getLocalTime(weatherData.sys.sunset, weatherData.timezone),

    };
    return generalData;
}

export interface IForecastData {
    date: string;
    text: string
    icon: string;
    minTemp: number;
    maxTemp: number;
}

let forecastData: IForecastData[] = []

const getForecastData = async () => {
    const res = await getForecastDataAPI(weatherData.name);
    res && (forecastData = res.forecast.forecastday.map((day: any) => ({
        date: day.date,
        text: day.day.condition.text,
        icon: day.day.condition.icon,
        minTemp: day.day.mintemp_c,
        maxTemp: day.day.maxtemp_c,
    })));
    console.log("forecast data at helper", forecastData);
    return forecastData
}


export { createData, getGeneralData, getForecastData };