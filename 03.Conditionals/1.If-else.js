/*
 * Author: Marc Ciruelos Santos
 * Date: 13-02-2024
 * Description: IF-ELSE => Example selecting the day of the week 
 */


let currentDate = new Date();
let weekDay = currentDate.getDay();

console.log(
  "Today is: " + currentDate.toLocaleString("en-us", { weekday: "long" })
);

if (weekDay > 0 && weekDay < 5) {
  console.log("Day type: Work-Day");
} else if (weekDay === 5) {
  console.log("Day type: Friday!");
} else {
  console.log("Day type: Weekend!");
}
