const getAverageSpeed = (firstPosition, secondPosition) => {
  var time = secondPosition.time - firstPosition.time;
  var meters = secondPosition.altitude - firstPosition.altitude;
  return Math.round((meters / time) * 10) / 10;
};
