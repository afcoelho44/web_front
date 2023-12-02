import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/users/Login";
import IndexBooks from "./Pages/books/IndexBooks";
import AddBook from "./Pages/books/AddBook";
import "./App.css";
import Header from "./Components/layout/Header";
import Test from "./Pages/Test";
import Answer from "./Pages/Answer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="routesApp">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/login" element={<Login />} />
          <Route path="/books" element={<IndexBooks />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/test" element={<Test />} />
          <Route path="/answer/:category" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
