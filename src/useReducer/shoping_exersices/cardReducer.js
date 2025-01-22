const initialCardContent = []

const cardReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const product = state.find((el) => el.id === action.payload.product.id);
      if (product) {
        // Update the quantity of the existing product
        return state.map((el) =>
          el.id === action.payload.product.id
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
      } else {
        // Add the new product with an initial quantity of 1
        return [...state, { ...action.payload.product, quantity: 1 }];
      }
    }

    case "remove":
      return state.filter(element => element.id != action.payload.id)
    case "clear":
      return []
    case "increment":
      return state.map(
        el => el.id === action.payload.id
          ? { ...el, quantity: el.quantity + 1 }
          : el
      )
    case "decrement": {
      return state.map(
        el => el.id === action.payload.id
          ? { ...el, quantity: el.quantity - 1 }
          : el
      )
    }
    default:
      return state
  }
}
export { initialCardContent, cardReducer }
