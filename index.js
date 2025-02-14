const search = document.querySelector('.search');
const addTask = document.getElementById('add-task');
const tasklist = document.getElementById('task-list');

addTask.addEventListener('click', () => {
if (search.value === ""){
    alert('Please enter a task');
    return;
}
else{
    const li = document.createElement('li');
    li.textContent = search.value;
    tasklist.appendChild(li);
    search.value = '';
    let span = document.createElement('span');
    span.textContent = '\u00d7';
    li.appendChild(span);

}
saveData();
})

tasklist.addEventListener('click', (event) => {
if (event.target.tagName === 'LI'){
  event.target.classList.toggle('checked');
  saveData();
}
else if (event.target.tagName === 'SPAN'){
    event.target.parentElement.remove();
    saveData();
}

}, false);

function saveData() {
    localStorage.setItem("data", tasklist.innerHTML);
}
function loadData() {
    tasklist.innerHTML = localStorage.getItem("data") || "";
}
loadData();

document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTask.click();
    }
  });