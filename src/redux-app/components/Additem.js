import React, { useState } from 'react';
import { connect } from 'react-redux';
import { additem } from '../redux/action/action';

const Additem = ({addUserInList}) => {
    const [input, setInput] = useState("");
    const handleAdditem = () => {
        addUserInList(input);
        setInput("");
    };
    const handleKeyDown = (event)=> {
        if(event.keyCode === 13) { 
            handleAdditem();
      }
    }

    return (
        <div className="add-item">
            <input
                onChange={e => setInput(e.target.value)}
                value={input} onKeyDown={handleKeyDown}
            />
            <button className="add-todo" onClick={handleAdditem}>
                Add Item
            </button>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    addUserInList: (...params) => dispatch(additem(...params))
})
export default connect(null,mapDispatchToProps)(Additem);