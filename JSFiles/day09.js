const listAstronautJobs = (roster) => {
  var jobList = [];
  for (var i=0; i < roster.length ; ++i) {
    jobList.push(roster[i]["job"]);
  }
  return jobList;
};
