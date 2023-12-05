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
import UsersRegister from './Pages/users/UsersRegister';
import SavedBook from './Pages/books/SavedBooks';
import { AuthProvider } from './Providers/AuthContext';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AuthProvider>
        <Header />
        <div className="routesApp">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users/login" element={<Login />} />
              <Route path="/users/register" element={<UsersRegister />} />
              <Route path="/books" element={<IndexBooks />} />
                <Route path="/books/add" element={<AddBook />} />
                <Route path="/books/saved" element={<SavedBook />} />
              <Route path="/test" element={<Test />} />
              <Route path="/answer/:category" element={<Answer />} />
            </Routes>
          </BrowserRouter>
            </div>
      </AuthProvider>
      </div>
  );
}

export default App
