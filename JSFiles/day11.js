const bookFreePlatform = (platformList, missionDate) => {
 let undefinedChanges = 0;
 for (i = 0; undefinedChanges === 0; ++i)  {
   if (platformList[i].bookDate === undefined) {
     platformList[i].bookDate = missionDate;
     undefinedChanges++;
   }
 }
  return platformList;
};
