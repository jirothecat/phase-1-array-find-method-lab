// code your solution here
function superbowlWin(record) {
    let win = record.find(object => object.result === "W");
  
    if (win) {
      return win.year;
    } else {
      return undefined;
    }
  }