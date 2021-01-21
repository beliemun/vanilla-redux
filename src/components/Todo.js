import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Todo = ({ text, id, deleteTodo }, key) => {
    return (
        <li id={id} key={key}>
            {text} <button onClick={deleteTodo}>DEL</button>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log("1", ownProps);
    return {
        deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);