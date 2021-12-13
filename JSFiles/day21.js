const parseMessage = (origin, message) => {
  return origin + ": " + message;
};

const parseMissionSummary = (exchanges, missionData) => {
  let transcriptArray = [];
  for (i=0; i<exchanges.length; ++i) {
    transcriptArray.push(parseMessage(exchanges[i].origin, exchanges[i].message));
  }
  let missionSummary = {};
  missionSummary.transcript = transcriptArray;
  missionSummary.missionData = missionData;
  return missionSummary;
};
