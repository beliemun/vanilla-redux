import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

const Home = ({ toDos, addTodo }) => {
    const [text, setText] = useState();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        setText("");
        addTodo(text);
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text || ''} />
                <input type="submit" value="ADD" />
            </form>
            <ul>
                {toDos.map(toDo => (
                    <Todo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return { toDos: state };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(actionCreators.addTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); 