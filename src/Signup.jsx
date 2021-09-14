import React from "react";
import "./Signup.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useStateValue } from "./stateProvider";

import {
	Button,
	Form,
	Card,
	Alert,
} from "react-bootstrap";

export const Signup =
	() => {
		const [
			{ user },
			dispatch,
		] =
			useStateValue();
		const [
			error1,
			setError,
		] =
			useState("");
		const [
			email,
			setEmail,
		] =
			useState("");
		const [
			password,
			setPassword,
		] =
			useState("");

		const history =
			useHistory();

		const login = (
			e,
		) => {
			e.preventDefault();
			auth
				.signInWithEmailAndPassword(
					email,
					password,
				)
				.then(
					(
						auth,
					) => {
						history.push(
							"/home",
						);
					},
				)
				.catch(
					(error) =>
						setError(
							error.message,
						),
				);
		};

		const signUp = (
			e,
		) => {
			e.preventDefault();
			auth
				.createUserWithEmailAndPassword(
					email,
					password,
				)
				.then(
					(
						auth,
					) => {
						console.log(
							auth,
						);
						if (
							auth
						) {
							history.push(
								"/home",
							);
						}
					},
				)
				.catch(
					(error) =>
						setError(
							error.message,
						),
				);
		};
		if (user) {
			return (
				<Redirect to="/" />
			);
		} else {
			return (
				<div className="signUp">
					<Card className="w-100">
						<Card.Body>
							<h2 className="text-center mb-4">
								Sign
								Up
							</h2>
							{error1 && (
								<Alert variant="danger">
									{" "}
									{
										error1
									}{" "}
								</Alert>
							)}
							<Form>
								<Form.Group id="email">
									<Form.Label>
										{" "}
										Email{" "}
									</Form.Label>
									<Form.Control
										type="email"
										value={
											email
										}
										onChange={(
											e,
										) =>
											setEmail(
												e
													.target
													.value,
											)
										}
										required
									/>
								</Form.Group>

								<Form.Group id="password-confim">
									<Form.Label>
										{" "}
										Password{" "}
									</Form.Label>
									<Form.Control
										type="password"
										value={
											password
										}
										onChange={(
											e,
										) =>
											setPassword(
												e
													.target
													.value,
											)
										}
										required
									/>
								</Form.Group>
								<Button
									className="btn mt-3 w-100 btn-success"
									type="submit"
									onClick={
										signUp
									}
								>
									{" "}
									Sign
									Up
								</Button>
							</Form>
						</Card.Body>
					</Card>

					<div className="w-100 text-center mt-2">
						{" "}
						Already
						have an
						account
						? Login
						below
					</div>
					<Button
						className="btn mt-3 w-100 btn-success"
						type="submit"
						onClick={
							login
						}
					>
						{" "}
						Login
					</Button>
				</div>
			);
		}
	};

export default Signup;
