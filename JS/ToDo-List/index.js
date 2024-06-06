function fetchAndRenderTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        data.forEach(todo => {
            createTodoElement(todo.title, todo.completed);
        });
    })
    .catch(error => console.error('Error fetching TODOs:', error));
}
  
function createTodoElement(title, completed = false) {
    var li = document.createElement("li");
    var t = document.createTextNode(title);
    li.appendChild(t);
  
    if (completed) {
        li.classList.add('checked');
    }
  
    document.getElementById("myUL").appendChild(li);
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
}
  
window.onload = function() {
    fetchAndRenderTodos();
  
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
  
    document.querySelector('.addBtn').onclick = function() {
      newElement();
    };
};
  
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        createTodoElement(inputValue);
    }
    document.getElementById("myInput").value = "";
}  