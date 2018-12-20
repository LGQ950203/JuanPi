const defaultState ={
    list:[]
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    
    return state;
}