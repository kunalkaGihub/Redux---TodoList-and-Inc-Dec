import './App.css';
import { useSelector, useDispatch} from "react-redux"
import { incNumber, decNumber } from './actions/index';
import Todo from './components/Todo';

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch();
  
  return (
    <>
    <h1 className="text-center">using React and Redux</h1>
    <div className="container my-5">
      <h2>Increment/Decrement Counter</h2>

      <div className="quantity input-group">
        <a onClick={()=> dispatch(decNumber())} className="btn btn-primary" title="Decrement">-</a>
        <input type="text" name="quantity" className="quantity_input text-center" value={myState} readOnly/>
        <a onClick={()=> dispatch(incNumber())} title="Increment" className="btn btn-primary">+</a>
      </div>
    </div>
    
    <Todo/>
    </>
  );
}

export default App;
