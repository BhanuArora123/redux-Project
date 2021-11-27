import { createStore } from "redux";
const initialState = {
    counter : 0,
    isAllowed:true
}

const counterReducer = (state = initialState,action) => {
    if(action.type === "toggled"){
        return {
            counter : state.counter,
            isAllowed:!(state.isAllowed)
        }
    }
    else if(!(state.isAllowed)){
        return state;
    }
    else if(action.type === "increment"){
        return {
            counter:state.counter + 1,
            isAllowed:(state.isAllowed)
        }
    }
    else if(action.type === "increase"){
        return {
            counter:state.counter + (action.amount?action.amount : 1),
            isAllowed:state.isAllowed
        }
    }
    else if(action.type === "decrement"){
        return {
            counter:state.counter - 1,
            isAllowed:(state.isAllowed)
        }
    }
    return state;
}
const store = createStore(counterReducer);

export default store;