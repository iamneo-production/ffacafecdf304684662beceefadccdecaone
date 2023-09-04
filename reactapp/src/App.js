import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">{/* Write your routing code here */}</div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
