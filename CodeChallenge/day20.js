const confirmReentryPlans = (speed, missionData, checks) => {

  speedCheck = '';
  dataCheck = [];

  if (speed >= checks.minSpeed && speed <= checks.maxSpeed) {
    speedCheck = true;
  } else {
    speedCheck = false;
  }

  for (const property in missionData) {
    if (missionData[property].length === checks["dataEntries"][property]) {
      dataCheck.push(true);
    } else {
      dataCheck.push(false);
    }
  }

  if (speedCheck === true && !dataCheck.includes(false)) {
    return true;
  } else {
      return false;
  }
};
