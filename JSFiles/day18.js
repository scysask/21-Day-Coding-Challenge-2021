const chooseLunchWinner = (listOfChoices) => {
  let option1Count = 0, option2Count = 0;
  let option1Name = "", option2Name = "";
  for (i=0; i<listOfChoices.length; ++i) {
    if (option1Count === 0) {
      option1Count += 1;
      option1Name = listOfChoices[i];
    } else if (listOfChoices[i] === option1Name) {
        option1Count += 1;
    } else {
        option2Count += 1;
        option2Name = listOfChoices[i];
    }
  }
  if (option1Count > option2Count) {
    return option1Name;
  } else {
      return option2Name;
  }
};
