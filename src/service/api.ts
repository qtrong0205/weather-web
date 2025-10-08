import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const forecastApiKey = import.meta.env.VITE_FORECAST_API_KEY;

const getCityCoords = async (city: string) => {
    try {
        const normalizedCity = city.trim().replace(/\s+/g, " ");
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${normalizedCity}&limit=1&appid=${apiKey}`;
        const res = await axios.get(url);
        const data = res.data[0];
        if (!data) throw new Error("Không tìm thấy thành phố");
        return { lat: data.lat, lon: data.lon };
    } catch (err: any) {
        console.error("Lỗi khi lấy tọa độ:", err.message);
        return null;
    }
};

const getWeatherData = async (lat: number, lon: number) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        const res = await axios.get(url);
        return res.data;
    }
    catch (err: any) {
        console.error("Lỗi khi lấy dữ liệu thời tiết:", err.message);
        return null;
    }
}

const getForecastDataAPI = async (city: string) => {
    try {
        const data = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${forecastApiKey}&q=${city}&days=7&aqi=no&alerts=no`)
        return data.data;
    }
    catch (err: any) {
        console.error("Lỗi khi lấy dữ liệu dự báo:", err.message);
        return null;
    }
}

export { getCityCoords, getWeatherData, getForecastDataAPI };

