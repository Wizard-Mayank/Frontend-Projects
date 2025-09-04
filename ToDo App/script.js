const input = document.querySelector("#input");
const btn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const clearBtn = document.querySelector("#clear");

btn.addEventListener("click", () => {
  const val = input.value;
  if (val.length > 0) {
    const newLi = document.createElement("li");
    const inputBox = document.createElement("input");
    inputBox.type = "checkbox";

    // new task styling
    newLi.style.border = "1px solid orange";
    newLi.style.margin = "5px";

    // Strike-through task when it gets completed
    inputBox.addEventListener("change", () => {
      newLi.style.textDecoration = inputBox.checked ? "line-through" : "none";
    });

    // delete button styling
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i id="deleteBtn" class="fa-solid fa-trash"></i>';
    deleteBtn.style.marginRight = "10px";
    deleteBtn.style.cursor = "pointer";

    // edit button styling
    const editBtn = document.createElement("button");
    editBtn.innerHTML =
      '<i id="editBtn" class="<i class="fa-solid fa-pen"></i>';
    editBtn.style.marginRight = "10px";
    editBtn.style.cursor = "pointer";

    // create new task (using add button)
    const task = document.createTextNode(val);
    newLi.appendChild(inputBox);
    newLi.appendChild(task);
    newLi.appendChild(editBtn);
    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);

    // update input to blank after adding new task
    input.value = "";

    // delete button logic
    deleteBtn.addEventListener("click", () => {
      const parent = deleteBtn.parentNode;
      parent.remove();
    });

    //edit button logic
    editBtn.addEventListener("click", function () {
      const parent = editBtn.parentNode;
      const oldVal = parent.childNodes[1].nodeValue;

      const newVal = prompt("enter updated task...", oldVal);

      if (newVal != null) parent.childNodes[1].nodeValue = newVal;
    });
  }
});

// clear button logic
clearBtn.addEventListener("click", () => {
  allTasks = Array.from(list.children);

  allTasks.forEach((task) => {
    const checkBox = task.children[0];

    if (checkBox && checkBox.checked) task.remove();
  });
});
