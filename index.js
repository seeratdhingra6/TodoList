let listItem = document.getElementsByClassName("listitem")[0];
let toDoList = [];
let counter=0;
/**
 * @description this function will add todo's
 */
function addToDo() {
  let toDo = document.getElementById("item").value;
  const toDoObj={
  id: counter,
  toDo
  };
  toDoList.push(toDoObj);
  counter+=1;
  renderToDo();
}
/**
 *
 * @param {string} discardValue
 * @description this function will remove todo's
 */
function removeTodo(discardValue) {
  toDoList = toDoList.filter((item) => item !== discardValue);
  renderToDo();
}
function createToDoNode() {
  let finalResult = "";
  toDoList.forEach((item) => {
    finalResult += `<li class="toDo"><span class="itemName">${item}</span><button class="removeButton" onclick="removeTodo('${item}')">
    <span>&#9587</span></button></li>`;
  });
  listItem.innerHTML = finalResult;
}
function setPreceeder() {
  let arr = toDoList.length;
  let preceeder = "tasks";
  if (arr <= 1) {
    preceeder = "task";
  }

  document.getElementsByClassName("tasks")[0].innerHTML = `${arr} ${preceeder}`;
}
function renderToDo() {
  createToDoNode();
  setPreceeder();
}
let now = new Date();
console.log(now);
let day = now.getDay();
console.log(day);
function getWeekName(day) {
  switch (day) {
    case 0:
      return "sunday,";

    case 1:
      return "monday,";

    case 2:
      return "tuesday,";

    case 3:
      return "wednesday,";

    case 4:
      return "thursday,";

    case 5:
      return "friday,";

    case 6:
      return "saturday,";
      break;

    default:
      return "invalid";
      break;
  }
}
getWeekName(day);
document.getElementsByClassName("day")[0].innerHTML = getWeekName(day);
let date = now.getDate();
console.log(date);
document.getElementsByClassName("date")[0].innerHTML = date;
let month = now.getMonth();
console.log(month);
let monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];
document.getElementsByClassName("month")[0].innerHTML = monthNames[month];
