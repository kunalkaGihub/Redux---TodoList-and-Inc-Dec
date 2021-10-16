import React,{useState} from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';

const Todo = () => {
    
    const [inputData, setInputData] = useState("")
    const list = useSelector((state) => state.todoReducers.list)  //store se data kese get krna 
    const dispatch = useDispatch()

    return (
       
        <>
        {/* <div className="main-div container my-5">
            <div className="child-div">
                <figure>
                <figcaption>Add Your List Here ✌️</figcaption>
                </figure>

                <div className="add-items">
                 */}
                {/* inputData k andr sara data h or onChange ki help se get kr rhe h */}
                {/* <input type="text" placeholder="✍️ Add Items..." 
                value={inputData} onChange={(event)=> 
                setInputData(event.target.value)}/>

                <i className="fa fa-plus" onClick={() => dispatch(addTodo(inputData), setInputData(""))}></i>
                </div>

                <div className="container showitems">
                    {
                        list.map((item)=>{
                            return (
                            <div className="eactItem" key={item.id}>
                                <h3>{item.data} */}
                                {/* <i className="fa fa-trash mx-5" onClick={() => dispatch(deleteTodo(item.id))}></i>
                                </h3>
                            </div>
                            )
                        })
                    }
                </div>
                 */}
                {/* <div className="container removeitems">
                    <button className="btn btn-sm btn-primary" onClick={()=> dispatch(removeTodo())}>Remove all</button>
                </div>

            </div>
        </div> */}

        <div className="container my-5">
        <h3>Add Your List Here</h3>
            <div class="mb-3 input-group">
                
                {/* inputData k andr sara data h or onChange ki help se get kr rhe h */}
                <input type="text" className="form-control" placeholder="✍️ Add Items..." 
                value={inputData} onChange={(event)=> 
                setInputData(event.target.value)}/>

                <button className="btn btn-sm btn-success" style={{width:"12%"}} onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
                    <i className="fa fa-plus"></i>
                </button>

               
            </div>
                <div className="container showitems">
                    {
                        list.map((item)=>{
                            return (
                            <div className="eactItem" key={item.id}>
                                <h3>{item.data}
                                <i className="fa fa-trash mx-5" onClick={() => dispatch(deleteTodo(item.id))}></i>
                                </h3>
                            </div>
                            )
                        })
                    }
                </div>
            <button className="btn-sm btn-primary" onClick={()=> dispatch(removeTodo())}>Remove all</button>
        </div>
        </>
    )
}

export default Todo
