import { REMOVE_ITEM, RESET_ITEMS, CLEAR_ITEMS } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  switch (action.type) {
    case REMOVE_ITEM:
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
      };
    case RESET_ITEMS:
      return {
        ...state,
        people: data,
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        people: [],
      };
    default:
      throw new Error(`No matching action type - "${action.type}"`);
  }
};
export default reducer;
