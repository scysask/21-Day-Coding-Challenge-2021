const averageWindSpeed = (weatherEntries) => {
  var windSpeeds = [], windSpeedsSum = 0;
  for (i=0; i<weatherEntries.length; ++i) {
    windSpeeds.push(weatherEntries[i]["windSpeed"]);
  }
  for (i=0; i<windSpeeds.length; ++i) {
    windSpeedsSum += windSpeeds[i];
  }
  return Math.round(windSpeedsSum / windSpeeds.length);
};
