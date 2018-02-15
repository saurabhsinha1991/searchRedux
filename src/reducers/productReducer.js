const productReducer = (state = { product: [] }, action) => {

    switch (action.type) {
      case 'PRODUCT_DETAILS':
        return Object.assign({}, state, { product: action.payload });
      default:
        return state
    }
}
  
export default productReducer;