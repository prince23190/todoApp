import React, {useState } from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

function Todo() {
  let arr = []
  const [InputValue, setInputValue] = useState("");
  const [Items, setItems] = useState(arr); 
  function AddTodo()
  {
      if (!InputValue) {
          alert("Please Insert The Value.")
      }else{
          setItems((oldItems) => {
              return [...oldItems, InputValue]
          })
          setInputValue('')
      }
  }
  function ClearTodo()
  {
     setItems(()=> {
         return []
     })
  }
  function DeleteTodo(DeleteId)
  {
     const UpdatedItems = Items.filter((val, ind, arr) => {
           return ind !== DeleteId
     })
     setItems(() => {
        return [...UpdatedItems]
     })
  }
  function TextMessages({ userMessage ,  Keys}) {
    return (
        <>
        <MessagesContainer key={Keys}>
          <div  className="box-of-message">
            <p  className="User-Stored-message">{userMessage}</p>
            <div className="crud-button-for-message">
              <FaTrashAlt onClick={() => DeleteTodo(Keys)} className="delete-button" size={20} />
            </div>
          </div>
        </MessagesContainer>
      </>
    );
  }
  return (
    <>
      <Container>
        <main className="main-structure">
          <h1 className="heading-Todo-body">ToDo App</h1>
          <div className="section-of-button-and-input">
            <input
              autoComplete="off"
              id="inputId"
              placeholder="Enter The Entities For Your List."
              className="input-field-for-text"
              type="text"
              value={InputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              className="button-for-adding"
              onClick={() => AddTodo()}
             >
               +
            </button>
          </div>
          <div className="todo-data-box">
          {
             Items.map((currMess, ind, arr)=> {
                  return (
                      <>
                        <TextMessages userMessage={currMess} key={ind} Keys={ind} />
                      </>
                  )
             })
          }
          </div>
          <div className="box-of-footer-descr">
            <p className="text-of-pending-message">
                {Items.length > 0 ?  `You have Pending ${Items.length} Messages` : `No Messages Are There`}
            </p>
            <button
              className="clearing-allData-button"
              onClick={() => ClearTodo()}
            >
              Clear All
            </button>
          </div>
        </main>
      </Container>
    </>
  );
}

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Cormorant+SC:wght@300&family=Edu+SA+Beginner&family=Josefin+Sans:wght@200&display=swap");
  height: 100vh;
  width: 100vw;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(45, 253, 142, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  .main-structure {
    height: 70%;
    width: 40%;
    background: white;
    border-radius: 30px;
    box-shadow: 0 0 0.9rem 0.1rem black;
    .heading-Todo-body {
      font-size: 3vmax;
      font-family: "Cormorant SC", serif;
      margin-left: calc(40% - 2.4vmax);
      margin-top: 2%;
    }
    .section-of-button-and-input {
      width: 80%;
      height: 10%;
      margin-left: calc(40% - 30%);
      margin-top: 3%;
      border: none;
      display: flex;
      flex-direction: row;
      .input-field-for-text {
        width: 80%;
        padding-left: 5%;
        font-size: larger;
        outline: none;
      }
      .button-for-adding {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        font-size: 3vmax;
        background: rgb(34, 193, 195);
        background: linear-gradient(
          0deg,
          rgba(34, 193, 195, 1) 0%,
          rgba(45, 253, 142, 1) 100%
        );
        border: none;

        color: white;
        cursor: pointer;
        &:active {
          opacity: 0.85;
          background: rgb(34, 183, 195);
        }
      }
    }
    .todo-data-box {
      height: calc(60% - 4% - 5%);
      margin-top: 5%;
      margin-left: calc(40% - 25%);
      width: 70%;
      overflow-y: scroll;
      border-radius: 5px;
      font-family: "Josefin Sans", sans-serif;
      &::-webkit-scrollbar {
        width: 0.6vw;
        height: 105%;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background: rgb(34, 193, 195);
        background: linear-gradient(
          0deg,
          rgba(34, 193, 195, 1) 0%,
          rgba(45, 253, 142, 1) 100%
        );
      }
      &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 20px;
      }
    }
    .box-of-footer-descr {
      height: calc(40% - 6% - 10% - 3vmax);
      margin-top: 2%;
      border-radius: 50px;
      display: flex;
      justify-content: space-between;
      .text-of-pending-message {
        margin-left: 6%;
        margin-top: 3%;
        font-family: "Edu SA Beginner", cursive;
      }
      .clearing-allData-button {
        height: 60%;
        margin-right: 5%;
        margin-top: 1.5%;
        width: 10%;
        border-radius: 10px;
        font-size: 11px;
        background: rgb(34, 193, 195);
        background: linear-gradient(
          0deg,
          rgba(34, 193, 195, 1) 0%,
          rgba(45, 253, 142, 1) 100%
        );
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
        &:active {
          background: rgb(34, 183, 195);
          transform: scale(0.95);
        }
      }
    }
  }
`;
const MessagesContainer = styled.div`
  height: 19%;
  .box-of-message {
    height: 100%;
    width: 80%;
    font-weight: bolder;
    background: white;
    box-shadow: 0 0 3px 0 black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: calc(80% - 70%);
    margin-top: 4%;
    .User-Stored-message {
      margin-left: calc(80% - 75%);
    }
    .crud-button-for-message {
      width: 20%;
      display: flex;
      justify-content: space-around;
      .edit-button {
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
      .delete-button {
        cursor: pointer;
        &:hover {
          color: red;
        }
      }
      .edit-button,
      .delete-button {
        &:active {
          transform: scale(0.95);
        }
      }
    }
  }
`;
export default Todo;