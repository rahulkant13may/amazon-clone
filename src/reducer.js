export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket.reduce((amount, item) => amount + item.price, 0)

const reducer = (state, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
            //ADD to basjket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case "REMOVE_FROM_BASKET":
            //Remove from Basket
            const newBasket = [...state.basket];
            const index = newBasket.findIndex(basketItems => basketItems.id === action.id)
            newBasket.splice(index, 1)
            return {
                ...state,
                basket: newBasket}
            break;
        default:
         return state;
    }

}

export default reducer;