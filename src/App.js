import React, { useReducer, useRef, useState, useEffect } from "react";
import { listReducer } from "./listReducer";
import { v4 as uuidv4 } from "uuid";
import {
  AppContainer,
  ListsContainer,
  InputContainer,
  Element,
  TextBlock,
  TasksContainer,
  AppButton,
  InputName,
} from "./StyledComponents";

function App() {
  const [tasks, dispatch] = useReducer(listReducer, []);
  const [inputTask, setInputTask] = useState("");
  const [inputList, setInputList] = useState("");
  const [selectedListId, setSelectedListId] = useState();
  const taskRef = useRef();
  const listRef = useRef();
  let isInitialRender = useRef(true);


  useEffect(() => {
    if(isInitialRender.current){
      dispatch({type: "set-state", stateString: localStorage.getItem("state")});
      console.log("first render");
      isInitialRender.current = false
    } else{
      localStorage.setItem("state", JSON.stringify(tasks))
      console.log("saved localstate");
    }
  }, [tasks])

  const handleListAdd = () => {
    listRef.current.value = "";
    setInputList("");
  };

  const handleTaskAdd = () => {
    taskRef.current.value = "";
    setInputTask("");
  };

  return (
    <AppContainer>
      <ListsContainer>
        <InputContainer>
          <InputName
            ref={listRef}
            onChange={(event) => setInputList(event.target.value)}
            placeholder="List Name"
          />
          <AppButton
            disabled={inputList === "" ? true : false}
            onClick={() => {
              dispatch({ type: "add-list", name: inputList, listId: uuidv4() });
              handleListAdd();
            }}
          />
        </InputContainer>
        {tasks.map((list) => {
          return (
            <Element onClick={() => setSelectedListId(list.id)} key={list.id}>
              <TextBlock>{list.name}</TextBlock>
              <AppButton
                onClick={() =>
                  dispatch({ type: "remove-list", listId: list.id })
                }
              ></AppButton>
            </Element>
          );
        })}
      </ListsContainer>
      <TasksContainer>
        <InputContainer>
          <InputName
            ref={taskRef}
            onChange={(event) => setInputTask(event.target.value)}
            placeholder="Task"
          />
          <AppButton
            disabled={inputTask === "" ? true : false}
            onClick={() => {
              dispatch({
                type: "add-task",
                name: inputTask,
                listId: selectedListId,
                id: uuidv4(),
              });
              handleTaskAdd();
            }}
          />
        </InputContainer>
        {tasks.map((list) => {
          if (list.id === selectedListId) {
            return list.tasks.map((task) => {
              return (
                <Element key={task.id}>
                  <TextBlock>{task.name}</TextBlock>
                  <AppButton
                    onClick={() =>
                      dispatch({
                        type: "remove-task",
                        listId: list.id,
                        id: task.id,
                      })
                    }
                  ></AppButton>
                </Element>
              );
            });
          }
        })}
      </TasksContainer>
    </AppContainer>
  );
}

export default App;
