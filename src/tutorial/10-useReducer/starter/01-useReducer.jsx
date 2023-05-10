import { useReducer } from "react";
import { data } from "../../../data";
import { REMOVE_ITEM, RESET_ITEMS, CLEAR_ITEMS } from "./actions";
import reducer from "./reducer";

const defaultState = {
  people: data,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const clearItems = () => {
    dispatch({ type: CLEAR_ITEMS });
  };

  const resetItems = () => {
    dispatch({ type: RESET_ITEMS });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          reset items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
