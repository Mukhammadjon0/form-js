"use strict";
window.addEventListener("load", function () {
  let ismInput = document.getElementsByName("ismInput")[0];
  let emailInput = document.getElementsByName("emailInput")[0];
  let taskBtn = document.getElementById("task-btn");
  let todoList = document.querySelector(".todo_list");
  let todoDatas = [];
  let todoData = {};
  taskBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (ismInput.value && emailInput.value) {
      let task = ismInput.value;
      let time = emailInput.value;
      todoData = {
        task: task,
        time: time,
      };
      todoDatas.push(todoData);
      todoData = {};
      ismInput.value = "";
      emailInput.value = "";
    } else {
      alert("Ism yoki Email kiritilmadi");
    }
    let todoDiv;
    let p;
    let i;
    todoDatas.forEach((element, index) => {
      todoList.style.padding = "10px";
      todoDiv = document.createElement("div");
      p = document.createElement("p");
      i = document.createElement("i");
      todoDiv.classList.add("todo");
      p.textContent = `${index + 1}.${element.task}-${element.time}`;
      i.classList.add("fa-solid", "fa-trash-can");
      todoDiv.appendChild(p);
      todoDiv.appendChild(i);
    });
    todoList.appendChild(todoDiv);
    i.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(todoDiv)
      todoDiv.remove();
      console.log(todoDatas)
    });
    let infos = document.querySelector(".infos");
    let p2;
    todoDatas.forEach((element, index) => {
      p2 = document.createElement("p");
      p2.textContent = `${index + 1}.${element.task}-${element.time}`;
    });
    infos.appendChild(p2);
  });
});
