export default {
    'endpoint': (city) => `https://api.openweathermap.org/data/2.5/weather?q=${cityVal},IN&appid=1378804aeafe0b631a88802bfd8d17d6`,
    'key' : process.env.WEATHER_API_KEY,
    'redis' : {
        'port': process.env.REDIS_PORT || 6379,
        'host': process.env.REDIS_HOST || '127.0.0.1'
    }
}