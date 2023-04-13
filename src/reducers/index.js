import { combineReducers } from "redux";
import content from "reducers/module/content";
import counter from "reducers/module/counter";

import { useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  content,
  counter
});

export default rootReducer;