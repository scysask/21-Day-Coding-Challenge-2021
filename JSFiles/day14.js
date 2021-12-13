const switchAllTogglesOn = (toggleList) => {
  for (i=0; i<toggleList.length; ++i) {
    if (toggleList[i].isOn === false) {
      toggleList[i].isOn = true;
    }
  }
  return toggleList;
};
