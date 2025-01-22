import { useReducer } from "react";
import { initialCardContent, cardReducer } from "./cardReducer";
const Card = () => {
  const [cardState, dispatch] = useReducer(cardReducer, initialCardContent);
  const products = [
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 150 },
    { id: 3, name: "Product C", price: 200 },
  ];
  const totalPrice = (arr) => arr.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  const showProducts = (arr, card = false) => {
    return arr.filter( el => el.quantity !== 0 ).map((el) => {
      return (
        <tr key={el.id}>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.price}</td>
          {!card ? (
            <td>
              <button
                onClick={() => {
                  dispatch({ type: "add", payload: { product: el } });
                }}
                type="button"
              >
                add to card
              </button>
            </td>
          ) : (
            <>
              <td>
                <button onClick={()=>{dispatch({type:"decrement",payload:{id:el.id}})}}>-</button>
                {el.quantity}
                <button onClick={()=>{dispatch({type:"increment",payload:{id:el.id}})}}>+</button>
                </td>
              <td>
                <button
                  onClick={() => {
                    dispatch({ type: "remove", payload: { id: el.id } });
                  }}
                  type="button"
                >
                  remove from card
                </button>
              </td>
            </>
          )}
        </tr>
      );
    });
  };
  return (
    <>
      <h1>Card :</h1>
      {!cardState.length ? (
        "there is no product "
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              {cardState.length ? (
                <>
                  <th>quantity</th>
                  <th>options</th>
                </>
              ) : (
                ""
              )}
            </tr>
          </thead>
          <tbody>
            {showProducts(cardState, true)}
            <tr>
              <td>Total price</td> <td>{totalPrice(cardState)}</td>
            </tr>
          </tbody>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "clear" });
            }}
          >
            clear
          </button>
        </table>
      )}
      <br />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{showProducts(products)}</tbody>
      </table>
    </>
  );
};
export { Card };
