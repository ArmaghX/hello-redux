import { createStore } from "redux";
import reducer from "../reducers/index";

/* Exercise 1 - Hello World Example */
const initialState = { tech: "React" };

/* Exercise 2 - Refactor User Card Example */
// const initialState = {
// 	name: "Alex Bakery",
// 	description: "Software Engineer, Speaker, and Occasional Model",
// 	likes: "Cats, Wine, and Black dresses",
// 	location: "localhost",
// };

export const store = createStore(reducer, initialState);
