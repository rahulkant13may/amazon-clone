export const initialState = {
    basket: [
        // {
        //     id:"2343432",
        //     title:"(Renewed) Samsung Galaxy A31 (Prism Crush Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        //     price:400,
        //     rating:3,
        //     image:"https://m.media-amazon.com/images/I/61IAJ-z9rLL._AC_UY218_.jpg"
        // },
        // {
        //     id:"323234",
        //     title:"(Renewed) Samsung Galaxy A31 (Prism Crush Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
        //     price:400,
        //     rating:3,
        //     image:"https://m.media-amazon.com/images/I/61IAJ-z9rLL._AC_UY218_.jpg"
        // }
    ]
}

export const getBasketTotal = (basket) => basket.reduce((amount, item) => amount + item.price, 0)

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