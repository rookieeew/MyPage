import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Resume from "./components/Body/Resume/Resume";
import 'normalize.css';
import Contact from "./components/Body/Contact/Contact";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import WhatIDo from "./components/Body/WhatIDo/WhatIDo";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Home/>
            <About/>
            <Resume/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
