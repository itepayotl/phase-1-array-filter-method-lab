function findMatching(drivers, string){

    const riders = drivers.filter(function (driver) {return string.toLowerCase() === driver.toLowerCase()});
  
    return riders;
  }
function fuzzyMatch(drivers, string) {
  let match = string.length
  const allDrivers = drivers.filter(function(driver) {return string.toLowerCase() === driver.toLowerCase().substring(0,match) 
  })
return allDrivers
  }
function matchName(drivers, name) {
  const filtered = drivers.filter(function(driver){
    return driver.name.toLowerCase() === name.toLowerCase()
  })
  return filtered 
}



//{
  //return drivers.filter((driver) => {
    //if (driver.name.toLowerCase() === name.toLowerCase()) {
      //return true;
   // }
  //})
//}