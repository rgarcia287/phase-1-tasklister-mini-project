document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let f = document.querySelector("form")
  f.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.getElementById('new-task-description').value)
    f.reset()
  })
});

function buildList (myTodos) {
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.addEventListener('click', doDelete)
  btn.textContent = "x"
  p.textContent = `${myTodos}   `
  p.appendChild(btn)
  document.querySelector('#new-task-description').appendChild(p)
}

function doDelete(e) {
  e.target.parentNode.remove()
}