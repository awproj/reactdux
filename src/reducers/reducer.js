import {ADD} from "../actions/actions";

const initialState = {number:0};

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD:
            return {...state, number:state.number+1};
        default:
            console.info(action.type,"not a valid action in reducer");
            return state;
    }
}