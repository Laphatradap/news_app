import { combineReducers } from "redux";
import articleReducer from "./article/reducer";

const reducer = combineReducers({
  articles: articleReducer,
});

export default reducer;
