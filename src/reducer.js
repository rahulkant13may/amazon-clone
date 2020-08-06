export const initialState = {
    basket: []
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            //ADD to basjket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            //Remove from Basket
            return {state}
            break;
        default:
         return state;
    }

}

export default reducer;