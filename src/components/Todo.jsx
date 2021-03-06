import React from "react";
import { useState,useEffect} from "react";
import "./style.css";

// get localstorage data back

const getLocalData =()=>{
  const lists =localStorage.getItem("mytodolist");
  if (lists){
  return JSON.parse(lists);
  }
  else{
    return[];
  }
}

const Todo = () => {
    const[inputData,setInputData]=useState("");
    const[items,setItems]=useState(getLocalData());

// add the items using this function 
   const addItems=()=>{
    if(!inputData){
        alert("Please Add atleast any todo Before adding a list");
    }
    else{
        const myNewInpurData={
            id:new Date().getTime().toString(),
            name:inputData,
        }
        setItems([...items,myNewInpurData])
        setInputData("");
    }
   }

  // edit the items
  
  const editItem=(index)=>{

  }
// how to delete item from section 
  const deleteItem =(index)=>{
    const updatedItems=items.filter((curElem)=>{
        return curElem.id!==index;
    });
    setItems(updatedItems)

  };

  //remove all the Elements

  const removeAll=()=>{
    setItems([]);
  }

  //adding local storage

  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items]);





  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="todologo" />
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
                    items.map((curElem)=>{
                        return(
                            <div className="eachItem" key={curElem.id}>  
                             <h3>{curElem.name}</h3>
                          <div className="todo-btn">
                          <i className="far fa-edit add-btn" onClick={()=>editItem(curElem.id)}></i>
                          <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElem.id)}></i>
                            </div>
                         </div>   

                        )
                    })
                }
           


          </div>
          {/* remove all button   */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
