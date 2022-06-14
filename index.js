// code your solution here
const superbowlWin = (records) => {
    let wins = records.find((record) => record.result === "W");
    // => {result: "", year: ""} || undefined
  
    //   return undefined if wins is undefined otherwise returns wins.year value
    return wins == undefined ? undefined : wins.year;
  }; 
  
