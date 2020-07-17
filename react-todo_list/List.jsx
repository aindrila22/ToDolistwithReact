import React, { useState } from 'react';
import ToDo from './ToDo';


const App = () => {
    const[inputList, setInputList] = useState(" ");
    const[Items, setItems] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listOfItems = () => {
        setItems((oldItems) => {
            return[...oldItems, inputList];

        });
        setInputList("");
    };
    const delItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;

            });
        });

    } ;

    return(
        <>
        <div className="main-div">
        <div className="center-div">
        <br/>
        <h1> TO-DO LIST </h1>
        <br/>
        <br/>
        <input type="text" placeholder="Add an item...." value = {inputList}  onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>
        <ol>
       {Items.map((itemval, index) => {
          
        return (<ToDo 
        key ={index} 
        id={index} text = {itemval} onSelect={delItems} />);
       } ) }
        </ol>
        </div>
        </div>
        </>

    );
};

export default App;