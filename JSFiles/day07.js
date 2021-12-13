const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    const weatherConditions = {
      temperature: Math.round((temperature - 32) * 5/9),
      windSpeed: Math.round((windSpeed / 2.237)),
      windDirection: windDirection,
      condition: condition
    };
    return weatherConditions;
};
