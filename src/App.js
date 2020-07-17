import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLibraryLayout from "./LibraryModule/MainLibraryLayout";
import Layout from "./hoc/Layout";

function App() {
  return (
    <div>
        <Layout>
            <MainLibraryLayout />
        </Layout>
    </div>
  );
}

export default App;
