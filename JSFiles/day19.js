const organizeData = (receivedData) => {
  let finalOutput = {};
  let types = [];
  for (i=0; i<receivedData.length; ++i) {
    let currentType = receivedData[i].type;
    if (finalOutput[currentType] === undefined) {
      finalOutput[currentType] = [];
      finalOutput[currentType].push(receivedData[i].data);
    } else {
    finalOutput[currentType].push(receivedData[i].data);
    }
  }
  console.log(finalOutput);
  return finalOutput;
};
