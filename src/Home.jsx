import React, {
	useEffect,
} from "react";
import { useStateValue } from "./stateProvider";
import { Redirect } from "react-router-dom";

export const Home =
	() => {
		const [
			{ user },
			dispatch,
		] =
			useStateValue();

		if (user) {
			return (
				<div>
					<h2>
						{" "}
						Welcome
						{user
							? ` ${user.email}`
							: ""}{" "}
						you are
						logged
						in
					</h2>
				</div>
			);
		} else {
			return (
				<Redirect to="/login" />
			);
		}
	};
