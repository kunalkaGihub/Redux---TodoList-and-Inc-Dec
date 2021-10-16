import  {createStore} from "redux";
import rootReducer from "./reducers/index"; //yeh reducers mese index.js se aaya

//ish store ko jo bhi call krega vo data access kr skta h.. store ab state hai
const store = createStore(rootReducer);

export default store;



