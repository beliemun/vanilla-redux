import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

const Todo = ({ text, id, deleteTodo }) => {
    return (
        <li id={id}>
            <Link to={`/${id}`}>
                {text} <button onClick={deleteTodo}>DEL</button>
            </Link>
        </li>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTodo: () => dispatch(actionCreators.deleteTodo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);