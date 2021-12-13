const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!
  launchDate = new Date(launchDate);
  var dateDiffEpoch = launchDate.getTime() - today.getTime();
  var dateDiffDays = Math.round(dateDiffEpoch/(1000*60*60*24));
  var countdownObject = {
    missionName: missionName,
    daysRemaining: dateDiffDays
    };
  console.log(countdownObject);
  return countdownObject;
};
