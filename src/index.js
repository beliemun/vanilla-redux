import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    console.log(action);
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE_TODO:
            return state.filter(toDo => {
                return toDo.id !== action.id
            });
        default:
            return state;
    }
}

const addTodo = text => {
    return {
        type: ADD_TODO,
        text
    };
}

const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        id
    };
}

const dispatchAddTodo = text => {
    store.dispatch(addTodo(text));
}

const dispathchDeleteTodo = event => {
    const id = parseInt(event.target.parentNode.id);
    store.dispatch(deleteTodo(id));
}

const renderToDoList = () => {
    ul.innerHTML = "";
    const toDos = store.getState();
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.addEventListener("click", dispathchDeleteTodo);
        btn.innerText = "DEL";
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li);
    })
}

const store = createStore(reducer);
store.subscribe(renderToDoList);

const onSubmit = (event) => {
    event.preventDefault();
    dispatchAddTodo(input.value);
    input.value = "";
}

const init = () => {
    form.addEventListener("submit", onSubmit);
}

init();