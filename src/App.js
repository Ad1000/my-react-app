import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ControlledFormPage, CounterButtonPage, HomePage, NotFoundPage, 
  PeopleListPage, ProtectedPage, UncontrolledFormPage } from "./pages";
import { NavBar } from "./NavBar";
import "./App.css";

const appLinks = [
  { url: '/', label: 'Home' },
  { url: '/counter', label: 'Counter' },
  { url: '/people-list', label: 'People List' },
  { url: '/forms', label: 'Forms' },
  { url: '/user', label: 'User Profile' },
];

const formLinks = [
  { url: '/forms/controlled', label: 'Controlled' },
  { url: '/forms/uncontrolled', label: 'Uncontrolled' },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar links={appLinks} />

      {/* <Link to="/counter">Go to Counter Page | </Link>
      <Link to="/people-list">Go to People List Page | </Link>
      <Link to="/protected">Go to Protected Page | </Link>
      <Link to="/controlled">Go to Controlled Form Page | </Link>
      <Link to="/controlled">Go to Uncontrolled Form Page</Link> */}

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/counter" exact element={<CounterButtonPage />} />
          <Route path="/people-list" exact element={<PeopleListPage />} />
          <Route path="/protected" exact element={<ProtectedPage />} />

          <Route path="/forms" exact element={<NavBar links={formLinks} />}/>
          <Route path="/forms/controlled" exact element={<ControlledFormPage />} />
          <Route path="/forms/uncontrolled" exact element={<UncontrolledFormPage />} />
          <Route path="*" exact element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
