export const initialState = {
    frameone: [],
    frametwo: [],
    framethree: [],
    framefour: [],
    framefive: [],
    framesix: [],
    frameseven: [],
    frameeight: [],
    frameten: [],
}

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type) {
        case "ADD_T0_FRAMEONE":
            return { ...state, frameone: [...state.frameone, action.item] };
        default:
            return state;
    }
}

export default reducer;