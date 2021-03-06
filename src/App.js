import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ControlledFormPage, CounterButtonPage, HomePage, NotFoundPage, PeopleListPage, ProtectedPage, UncontrolledFormPage, UserProfilePage } from "./pages";
import { NavBar } from "./NavBar";
import { ThemeContext } from "./ThemeContext";
import { UserDataLoader } from "./UserDataLoader";
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
  // <UserDataLoader>
  //   <UserProfilePage/>
  // </UserDataLoader>

  return (
    <ThemeContext.Provider value="dark">
      <div className="App">
        <BrowserRouter>
        <NavBar links={appLinks} />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/counter" exact element={<CounterButtonPage />} />
            <Route path="/people-list" exact element={<PeopleListPage />} />
            <Route path="/protected" exact element={<ProtectedPage />} />
            <Route path="/user" exact element={<UserProfilePage />} />

            <Route path="/forms" exact element={<NavBar links={formLinks} />}/>
            <Route path="/forms/controlled" exact element={<ControlledFormPage />} />
            <Route path="/forms/uncontrolled" exact element={<UncontrolledFormPage />} />

            <Route path="*" exact element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
