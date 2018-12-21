const defaultState ={
    iconPic:[]
}

export default (state=defaultState,action)=>{
    
    switch(action.type){
        case "ICON_TYPE_FULFILLED":
        console.log(action.payload.menu_list)
            let homeIcon = JSON.parse(JSON.stringify(state));
            homeIcon.iconPic = action.payload.menu_list;
            return homeIcon;
            
    }
    return state;
}