const inialState = {
    counter : 0
}
function counterReducer(state=inialState,action){
    if(action.type==="INC"){
        return{...state,count:state.count+1}
    }
    if(action.type==="DEC"){
        return{...state,count:state.count-1}
    }
    if(action.type==="RESET"){
        return{...state,count:inialState.count}
    }
    return state
}
export default counterReducer;