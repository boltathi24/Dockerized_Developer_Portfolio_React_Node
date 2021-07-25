import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Contact from './contents/Contact';

import Skills from './contents/Skills';
import Home from './contents/Home';


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
            </div>
        </Router>
    )
}
export default App;