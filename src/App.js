import React from 'react';

import './App.css';


import Layout from "./hoc/Layout";

import MainLibraryLayout from "./LibraryModule/MainLibraryLayout";
import MainWelcomeModuleLayout from "./WelcomeModule/MainWelcomeModuleLayout";

import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path='/library' component={MainLibraryLayout} />
                  <Route path='/' component={MainWelcomeModuleLayout} />
              </Switch>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
