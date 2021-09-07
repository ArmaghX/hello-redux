import React from "react";
import { store } from "./store/index";
import { setTechnology } from "./actions/index";

const ButtonGroup = ({ technologies }) => {
	return (
		<div>
			{technologies.map((tech, i) => (
				<button
					key={`btn-${i}`}
					data-tech={tech}
					className="hello-btn"
					onClick={dispatchBtnAction}
				>
					{tech}
				</button>
			))}
		</div>
	);
};

function dispatchBtnAction(e) {
	const tech = e.target.dataset.tech;
	store.dispatch(setTechnology(tech));
}

export default ButtonGroup;
