import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/users/AddUser";
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
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/books" element={<IndexBooks />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/test" element={<Test />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
