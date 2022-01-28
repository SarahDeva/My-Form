import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faTrash, faEdit, faPlus);
function Todo({ todo, index, markTodo, removeTodo, editTodo }) {
  return (
    <div
      className="todo"     
    >
      <div className="container">
        <div className="row">
          <div className="col-md id"> {index + 1} </div>
          <div className="col-md id"> <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span> </div>
          <div className="col-md id"> <Button variant="outline-success" onClick={() => markTodo(index)}>{todo.isDone ? "Completed" : "Pending"}</Button> </div>
          <div className="col-md id"> <Button variant="outline-danger" onClick={() => removeTodo(index)}><FontAwesomeIcon icon="trash"></FontAwesomeIcon></Button>
          <Button variant="outline-dark" onClick={() => editTodo(index)}><FontAwesomeIcon icon="edit"></FontAwesomeIcon></Button></div>
        </div>
      </div>
    </div>
  );
}

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}> 
    <Form.Group>
      <Form.Label><b>Add Todo</b></Form.Label>
      <Form.Control type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new todo" />
    </Form.Group>
    <Button variant="primary mb-3" type="submit">
      Submit
    </Button>
  </Form>
  );
}

function Todolist() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isDone: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = false;
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          <div className="container">
              <div className="row">
              <div className="col-md title">Id</div>
              <div className="col-md title">Tasks</div>
              <div className="col-md title">Status</div>
              <div className="col-md title">Action</div>
              </div>
              </div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
              
                <Todo
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                editTodo={editTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Todolist;
