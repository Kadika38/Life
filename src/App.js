import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { useState } from 'react';
import Main from './pages/Main';
import './styles/stylesheet.css';

function App() {

    const renderPage = () => {
        return <Main />;
    };


    return (
        <Router>
            <Routes>
                <Route path="/" element={renderPage()} />
            </Routes>
        </Router>
    );
};

export default App;
