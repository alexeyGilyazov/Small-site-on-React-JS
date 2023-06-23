import './App.css';
import Test1 from './Unit-6/Test1';
import Test2 from './Unit-6/Test2';


function App() {

    return (
        <div className='wrapper'>
            <h1>Жизненный цикл компонента</h1>
            <hr />
            <h1>Class Жизненный цикл</h1>
            {/* <Test1 arg = {77}/> */}
            <hr />
            <Test2 arg = {77}/>
        </div>
    );
}

export default App;
