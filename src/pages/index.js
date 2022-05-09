import * as React from 'react';
import { Navigate, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { NotFound } from '../components/NotFoundPage';
import { Home } from './Home';
import { App } from './App';
import Web3 from 'web3';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers"

function getLibrary(provider) {
  return new Web3(provider);
}

// const getLibrary = (provider, connector) => {
//   const library = new Web3Provider(provider);
//   library.pollingInterval = 12000;
//   return library;
// }

export function Main() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>

        <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/particle" element={<App/>} />
            <Route path="/element" element={<App/>} />
            <Route path="/molecule" element={<App/>} />
            <Route path="/*" element={<NotFound/>} />
            <Route path="/404" exact element={<NotFound/>} />
        </Routes>

    </ Web3ReactProvider>
  );
}

export default Main;
