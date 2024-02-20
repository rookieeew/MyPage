import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Body/Home/Home";
import About from "./components/Body/About/About";
import Resume from "./components/Body/Resume/Resume";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Body/Contact/Contact";
import 'normalize.css';

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
