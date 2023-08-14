import React, { useState } from "react";

const List = (props) => {
  const [listItem, setListItem] = useState("");

  const handleChange = (e) => {
    setListItem(e.target.value);
  };

  const handleAnswerChange = (event) => {
    if (event.keyCode === 13) {
      props.handleClick(listItem);
      setListItem("");
    }
  };

  return (
    <>
    <div className="todo-list">
      <div className="todo-listItem">
        {props.list.map((listItem, index) => {
          return (
            <p key={index} className="listItem">
              {listItem}{" "}
              <button
                className="delbtn"
                onClick={() => props.delItem(listItem)}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </p>
          );
        })}
      </div>

      <div className="add-listItem">
        <input
          type="text"
          className="inputList"
          placeholder="Enter your List Item"
          value={listItem}
          onChange={handleChange}
          onKeyDown={handleAnswerChange}
        />
        <button
          className="addbtn"
          onClick={() => {
            props.handleClick(listItem,props.showWarning);
            setListItem("");
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      
    </div>
    {props.showWarning && (<div className="todo-list box alert"><h3>**Warning</h3>
    <p>This item already Exists in the list.</p></div>)}
  
    </>
    
  );
};

export default List;
