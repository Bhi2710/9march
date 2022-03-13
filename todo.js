const todos = [];

const render = function(){
    const parent_container = document.getElementById('list_container')
    parent_container.innerHTML ="";
    for(let i = 0; i < todos.length; i +=1 ){
        const single_todo_item = todos[i];
        const new_p = document.createElement('li');
        new_p.innerText = single_todo_item
        parent_container.appendChild(new_p);
    }
}

const add_item = function(){
    const ip = document.getElementById("todo_input");
    const new_todo = ip.value;
    todos.push(new_todo);
    ip.value="";
    render();
}

const btn = document.getElementById("add_btn");
btn.addEventListener('click', add_item);
