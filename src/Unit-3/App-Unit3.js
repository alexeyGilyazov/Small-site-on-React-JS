import './App.css';
import Header from './Header';
import About from './Unit-3/About';
import Users from './Unit-3/Users';
import Main from './Unit-3/Main';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path='./main' component={Main} />
                    <Route path='./about' component={About} />
                    <Route path='./users' component={Users} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
