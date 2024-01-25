export const initialState={
    cart:null,
    total:null,
};
export const actionType={
    SET_CART:"SET_CART",
    SET_TOTAL:"SET_TOTAL",
};
const reducer=(state,action)=>{
    console.log(action);

switch(action.type){
    case actionType.SET_CART:
        return {
            // ...state means we are leaving the state as it is and we are not changing it.
            ...state,
            cart:action.cart,
        };
    case actionType.SET_TOTAL:
        return{
            ...state,
            total:action.total,
        };
    default:
        return state;        
}
};

export default reducer;