import { createStore } from "redux";

const PLUS = "PLUS";
const MINUS = "MINUS"

const countReducer = (count = 0, action) => {
    switch (action.type) {
        case PLUS:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
}

const countStore = createStore(countReducer);

const onChange = () => {
    countSpan.innerHTML = countStore.getState();
}

countStore.subscribe(onChange);

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const countSpan = document.getElementById("count");

const init = () => {
    countSpan.innerHTML = countStore.getState();
    plusButton.addEventListener("click", () => countStore.dispatch({ type: PLUS }));
    minusButton.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
}

init();