
function dayOfWeek() {
  let d = new Date();
  let wd = new Array(7);
  wd[0] = "Sunday";
  wd[1] = "Monday";
  wd[2] = "Tuesday";
  wd[3] = "Wednesday";
  wd[4] = "Thursday";
  wd[5] = "Friday";
  wd[6] = "Saturday";

  let n = wd[d.getDay()];
  document.getElementById("demo").innerHTML=n;
  console.log = (n);

}

