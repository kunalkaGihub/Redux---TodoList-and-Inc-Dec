import React from 'react'
const initialData = {
    list:[]
}

const todoReducers = (state=initialData, action) => {
    switch (action.type){
        
        case "ADD_TODO": 

        const { id, data } = action.payload // yeh action se aa rhi hai
        
        return {
            ...state, //initial data : initial state ko get kr rhe spread operator se
            list:[  // current data ko get krna hai in the form of array
                
                ...state.list, //previous state ka data... ky pta pehle se kuch ho
                {   
                    id:id,      //yeh new data
                    data:data
                }
            ]
            
        }
        
        case "DELETE_TODO":
            
            const newList = state.list.filter((elem)=> elem.id !== action.id)
            return {
                ...state,
                list: newList
              
            }
        
        case "REMOVE_TODO":

        return{
            ...state,
            list:[]
        }


        default: return state; //inital value undefine na ho ishliye default state ki value return krdo
    }
}

export default todoReducers;
