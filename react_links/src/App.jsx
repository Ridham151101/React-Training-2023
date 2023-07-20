import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import { NotFound } from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Navigationbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/contactUs" Component={ContactUs} />
          <Route path="/books">
            <Route index Component={BookList} />
            <Route path=":id" Component={Book} />
          </Route>
          {/* <Route path="/books" Component={BookList} />
          <Route path="/books/:id" Component={Book} /> */}
          <Route path="*" Component={NotFound} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
