import React from "react";
import user from "./images/user.png";

const UserCard = ({ store }) => {
	console.log(store);
	const { name, description, likes, location } = store;
	return (
		<div className="App">
			<section className="User__img">
				<img src={user} alt="user" />
			</section>
			<section className="User__info">
				<p>
					{" "}
					<span className="faint">I am</span> a {description}
				</p>
				<p>
					{" "}
					<span className="faint">I like</span> {likes}
				</p>
				<p className="User__info__details User__info__divider faint">
					<span>Name: </span>
					<span>{name}</span>
				</p>
				<p className="User__info__details faint">
					<span>Location: </span>
					<span>{location}</span>
				</p>
			</section>
		</div>
	);
};

export default UserCard;
