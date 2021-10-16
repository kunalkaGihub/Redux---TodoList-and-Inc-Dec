export const incNumber = () =>{
    return {
        type:"INCREMENT"
    }
}

export const decNumber = () =>{
    return {
        type:"DECREMENT"
    }
}

export const addTodo = (data) =>{ // yeh data todo me plus me click krne pe aa rha h
    return{
        type:"ADD_TODO",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteTodo = (id) =>{
    return{
        type:"DELETE_TODO",
        id:id  //payload
    }
}

export const removeTodo = () =>{
    return{
        type:"REMOVE_TODO"
    }
}