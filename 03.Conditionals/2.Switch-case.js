/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: SWITCH-CASE => Example selecting the day of the week
 */


let currentDate = new Date();
let weekDay = currentDate.getDay();

console.log(
  "Today is: " + currentDate.toLocaleString("en-us", { weekday: "long" })
);

switch (weekDay) {
  case 0: // (Sunday) - Continues because has not break;
  case 6:
    console.log("Day type: Weekend!");
    break;

  case 5:
    console.log("Day type: Friday!");
    break;

  default:
    console.log("Day type: Work-Day");
    break;
}
