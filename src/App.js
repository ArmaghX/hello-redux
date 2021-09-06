import React from "react";
// import HelloWorld from "./HelloWorld";
import UserCard from "./UserCard";
import reducer from "./reducers/index";

// Creating the Redux Store
import { createStore } from "redux";

/* Hello World Example */
// const initialState = { tech: 'React' };

/* Refactor User Card Example */
const initialState = {
	name: "Alex Bakery",
	description: "Software Engineer, Speaker, and Occasional Model",
	likes: "Cats, Wine, and Black dresses",
	location: "localhost",
};

const store = createStore(reducer, initialState);

const App = () => {
	return (
		<div>
			{/* <HelloWorld tech={store.getState().tech} /> */}
			<UserCard store={store.getState()} />
		</div>
	);
};

export default App;
