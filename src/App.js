import './App.css';
import Header from './components/Header'; //default import
import { Footer } from './components/Footer'; //named import name should match on export and import side
import AddToDo from './components/AddTodo';
import Todos from './components/Todos';
import About from './components/About';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = []
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const OnDelete = (todo) => {
    setTodos(todos.filter(e => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const AddTodo = (title, desc) => {
    let sno
    if (todos.length === 0) {
      sno = 1
    }
    else {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      title: title,
      desc: desc,
      sno: sno
    }
    setTodos([...todos, myTodo])
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const styles = {
    minHeight: `calc(100vh - 70px)`
  }

  return (
    <>
      <Router>
        <div style={styles}>
          <Header title="Todo List" searchBar={true} />
          <Routes>
            <Route exact path='/' element={
              <>
                <AddToDo addTodo={AddTodo} />
                <Todos todos={todos} onDelete={OnDelete} />
              </>
            } />
            <Route exact path='/about' element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
