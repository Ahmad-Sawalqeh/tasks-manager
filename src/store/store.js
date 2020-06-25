import { createStore } from "redux";
import reducer from "../reducer/reducer.js";

const myStore = createStore(reducer);

export default myStore;
