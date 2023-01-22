import React from "react";
import "../components-css/App.css";
import { Link, Outlet } from "react-router-dom";

export function About() {
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <h1>You are at About Directory.</h1>
      <Outlet />
    </div>
  );
}

export function History() {
  return <p>This is some history about the company.</p>;
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <h1>You are at Contact Directory.</h1>
    </div>
  );
}

export function App() {
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
      </nav>
      <h1>You are at Home Directory.</h1>
    </div>
  );
}
