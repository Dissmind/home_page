import React from 'react';

import './App.css';


import Layout from "./hoc/Layout";

import MainLibraryLayout from "./LibraryModule/MainLibraryLayout";
import MainWelcomeModuleLayout from "./WelcomeModule/MainWelcomeModuleLayout";

import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Route path='/library' component={MainLibraryLayout} />
              <Route path='/' component={MainWelcomeModuleLayout} />
          </Layout>
      </BrowserRouter>
  );
}

export default App;
