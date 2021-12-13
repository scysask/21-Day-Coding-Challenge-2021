const checkAllGauges = (gaugeList) => {
  for (i=0; i<gaugeList.length; ++i) {
    if (gaugeList[i].current < gaugeList[i].min || gaugeList[i].current > gaugeList[i].max) {
      return false;
    }
  }
  return true;
};
