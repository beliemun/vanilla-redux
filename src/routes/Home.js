import React, { useState } from "react";
import { connect } from "react-redux";

const Home = ({ toDos }) => {
    const [text, setText] = useState();

    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        console.log(text);
    }

    return (
        <>
            <h1>To Do List</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text || ''} />
                <input type="submit" value="ADD" />
            </form>
            <ul>{JSON.stringify(toDos)}</ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return { toDos: state };
}

export default connect(mapStateToProps)(Home); 