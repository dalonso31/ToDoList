import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/ToDoList';

class App extends React.Component {
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL);
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Routes>
            <Route path='/' element={<TodoList />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
