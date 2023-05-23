let listItem = document.getElementsByClassName("listitem")[0];

let toDoList = [];
let counter = 0;
const isMobileDevice = window.innerWidth <= 575;
let maxLimit = isMobileDevice ? 30 : 40;

/**
 *
 * @description this function alerts user for lengthlimit of todo.
 */
function lengthLimitAlert(event) {
  if (event.target.value.length >= maxLimit) {
    document.getElementsByClassName("lengthLimit")[0].innerHTML =
      "<p>* cannot save entity.length limit exceeded!</p>";
    document.getElementById("btn").disabled = true;
  } else {
    document.getElementsByClassName("lengthLimit")[0].innerHTML = "";
    document.getElementById("btn").disabled = false;
  }
}

/**
 * @description this function will add todo's
 */
function addToDo() {
  let toDo = document.getElementById("item").value;
  if (toDo != "") {
    const toDoObj = {
      id: counter,
      toDo,
    };
    toDoList.push(toDoObj);
    counter += 1;
    renderToDo();
  }
}

/**
 *
 * @param {string} discardValue
 * @description this function will remove todo's
 */
function removeTodo(discardValue) {
  toDoList = toDoList.filter((item) => item.id !== discardValue);
  renderToDo();
}
/**
 * @description this function renders todo
 */
function createToDoNode() {
  let finalResult = "";
  toDoList.forEach((item) => {
    finalResult += `<li class="toDo"><input id="checkedItem" type="checkbox"/><span class="itemName">${item.toDo}</span><button class="removeButton" onclick="removeTodo(${item.id})">
    <span>&#9587</span></button></li>`;
  });
  listItem.innerHTML = finalResult;
}
/**
 * @description this function will tell the number of tasks.
 */
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
let day = now.getDay();
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
document.getElementsByClassName("date")[0].innerHTML = date;
let month = now.getMonth();
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
