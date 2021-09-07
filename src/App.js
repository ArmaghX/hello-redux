import React from "react";
import { store } from "./store/index";

import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
// import UserCard from "./UserCard";

const App = () => {
	console.log(store.getState());
	return (
		<div>
			<HelloWorld tech={store.getState().tech} />
			<ButtonGroup technologies={["React", "Elm", "React-Redux"]} />
			{/* <UserCard store={store.getState()} /> */}
		</div>
	);
};

export default App;
