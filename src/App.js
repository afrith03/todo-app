import './App.css';
import SearchAppBar from './components/SearchAppBar';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './components/NoPage';
import React, { useState,useEffect } from 'react'
import AddToDo from './components/AddToDo'


function App() {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [todo, setTodo] = useState([])
  // {
  //     date: "",
  //     title: "go to shop",
  //     description: "go to shop and buy gool"
  // }
  // {
  //     sno: 2,
  //     date: Date,
  //     title: "go to park",
  //     description: "go to shop and buy hall"
  // },
  // {
  //     sno: 3,
  //     date: Date,
  //     title: "go to mall",
  //     description: "go to shop and buy mool"
  // }


  // useEffect(() => {
  //   localStorage.setItem("todo", JSON.stringify(todo));
  // }, [todo])

  useEffect(() => {
    var storedNames = JSON.parse(localStorage.getItem("todo"));        
      setTodo(storedNames);
  },[])


  return (
    <div className='app'>
      <BrowserRouter>
        <SearchAppBar title="ToDO OnTheGO" />
        <Routes>
          <Route path="/" element={<AddToDo todo={todo}
            setTodo={setTodo}
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
          />} />
          <Route path="/mytodo" element={<TodoList todo={todo} setTodo={setTodo} />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
