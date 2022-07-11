import React from "react";
import { useState } from "react";
import "./style.css";

const Todo = () => {
    const[inputData,setInputData]=useState("");
    const[items,setItems]=useState([]);
// add the items using this function 
   const addItems=()=>{
    if(!inputData){
        alert("Plz fill the data");
    }
    else{
        setItems([...items,inputData])
    }
   }


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="totologo" />
            <figcaption>Add Your List Here ✍</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(event)=>setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItems}></i>
          </div>
          {/* remove our items  */}
          <div className="showItems">
                {
                    items.map((curElem,index)=>{
                        return(
                            <div className="eachItem" key={index}>  
                             <h3>{curElem}</h3>
                          <div className="todo-btn">
                          <i className="far fa-edit add-btn"></i>
                          <i className="far fa-trash-alt add-btn"></i>
                            </div>
                         </div>   

                        )
                    })
                }
           


          </div>
          {/* remove all button   */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All">
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;