import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  removeTodo,
  clearTodos,
  checkToDo,
  markAllTodosCompleted,
} from "../components/redux-store/todosSlice";
import { Button, Grid, TextField, Checkbox } from "@mui/material";

function TodoPage() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const listRef = useRef(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const descriptionChangeHandler = (e) => {
    setDescription(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();

    // Trim the values to remove any leading or trailing whitespace
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    // Basic validation: Check if the title or description is empty
    if (!trimmedTitle || !trimmedDescription) {
      alert("Both title and description are required.");
      return; // Stop the function if validation fails
    }

    // Further validation can be added here, such as length checks, etc.
    // For example, ensuring the title is not too long:
    if (trimmedTitle.length > 50) {
      alert("Title should not exceed 50 characters.");
      return;
    }

    // Assuming validation is successful, proceed with creating the new todo object
    const newTodoObj = {
      title: trimmedTitle,
      description: trimmedDescription,
      isCompleted: false,
    };

    // Dispatch the action to add the new todo
    dispatch(
      addTodo({
        todo: newTodoObj,
      })
    );

    // Reset the title and description fields
    setTitle("");
    setDescription("");
  };

  const checkHandler = (todoId) => {
    dispatch(checkToDo(todoId));
  };

  // watch for when new items are added
  useEffect(() => {
    // bring the last item into view
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [todos]);

  const editTodoHandler = (todoId, title, description) => {
    setTitle(title);
    setDescription(description);
    dispatch(removeTodo(todoId));
  };

  return (
    <div className="maintodoContainer">
      <h1 className="todoHeading">Todo Application </h1>
      <form onSubmit={addTodoHandler}>
        <div className="inputContainer">
          <TextField
          className="inputField"
            required
            id="outlined-required"
            label="Enter title"
            size="small"
            value={title}
            onChange={titleChangeHandler}
          />
          <TextField
          className="inputField"
            required
            id="outlined-required"
            label="Enter description"
            size="small"
            value={description}
            onChange={descriptionChangeHandler}
          />
          <Button className="inputField" type="submit" variant="contained">
            Add todo{" "}
          </Button>
        </div>
      </form>
      {/* ----------------------------- */}
      <div className="btngrp">
        <Button className="btnAllAct"
          onClick={() => dispatch(clearTodos())}
          sx={{ background: "red", marginRight: "50px" }}
          variant="contained"
        >
          Clear all todos{" "}
        </Button>
        <Button className="btnAllAct"
          sx={{ background: "green" }}
          onClick={() => dispatch(markAllTodosCompleted())}
          variant="contained"
        >
          Mark all as Completed{" "}
        </Button>
      </div>
      {/* ----------------------------- */}
      <div className="tabletodo">
        <Grid container className="tableheadrow" spacing={2}>
          <Grid item xs={1}>
            Mark
          </Grid>
          <Grid item xs={2}>
            Name
          </Grid>
          <Grid item xs={4}>
            Description
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={6}>
                Status
              </Grid>
              <Grid item xs={6}>
                Action
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {todos.map((todo) => (
          <Grid
            container
            ref={listRef}
            className="tablerow"
            spacing={2}
            key={todo.id}
          >
            <Grid item xs={1}>
              <Checkbox
                onClick={() => checkHandler(todo.id)}
                size="small"
                checked={todo.isCompleted}
              />
            </Grid>
            <Grid item xs={2}>
              {todo.title}
            </Grid>
            <Grid item xs={4}>
              {todo.description}
            </Grid>
            <Grid item xs={5}>
              <Grid className="acionbtncontainer" container>
                <Grid item xs={6}>
                  <Button
                    sx={{ background: todo.isCompleted ? "green" : "grey" }}
                    variant="contained"
                  >
                    {todo.isCompleted ? "Completed" : "Pending"}
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  {/* Assuming you have an editTodo action */}
                  <Button
                    onClick={() =>
                      editTodoHandler(todo.id, todo.title, todo.description)
                    }
                    sx={{ background: "#1976d2", marginRight: "15px" }}
                    variant="contained"
                    className="actionbtn"
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ background: "red" }}
                    variant="contained"
                    className="actionbtn"
                  
                    onClick={() => dispatch(removeTodo(todo.id))}
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default TodoPage;
