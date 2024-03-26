import HomePage from "./pages/home-page";
import DetailsPage from "./pages/details-page";
import "./style/style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './services/store';
import React from "react";




function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path='/pokemon/:id' element={<DetailsPage/>} />
          </Routes>
      </Router>
     </Provider> 
  );
}

export default App;
