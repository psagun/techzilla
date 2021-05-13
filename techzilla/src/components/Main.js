import React, { useReducer, useEffect, useState } from "react";
import Buttons from "./auth/Buttons";
// import Form from "./auth/Form";
import { Hub, Auth } from "aws-amplify";
import { FaSignOutAlt } from "react-icons/fa";
// import "../../App.css";

//-----------------------------
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ".././App.css";
import Home from ".././components/homepage/Home";
import Navbar from ".././components/Navbar";
import Account from "./Account/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from ".././components/homepage/Products";
import Details from ".././components/homepage/Details";
import Cart from ".././components/homepage/Cart";
import UserProfile from ".././components/Account/UserProfile";
import OrderHistory from ".././components/Account/OrderHistory";
import PaymentMethods from ".././components/Account/PaymentMethods";
import Checkout from ".././components/checkout/Checkout";
import { DataProvider } from ".././components/Context";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import Form from "./auth/Form";
//-------------------------------------

const initialUserState = { user: null, loading: true };

const Main = () => {
	const [userState, dispatch] = useReducer(reducer, initialUserState);
	const [formState, updateFormState] = useState("base");
	const [isSignedIn, setIsSignedIn] = useState(false);

	useEffect(() => {
		// set listener for auth events
		Hub.listen("auth", (data) => {
			const { payload } = data;
			if (payload.event === "signIn") {
				setImmediate(() => dispatch({ type: "setUser", user: payload.data }));
				setImmediate(() => window.history.pushState({}, null, "http://localhost:3000"));
				updateFormState("base");
				setIsSignedIn(!isSignedIn);
			}
			// this listener is needed for form sign ups since the OAuth will redirect & reload
			if (payload.event === "signOut") {
				setTimeout(() => dispatch({ type: "setUser", user: null }), 350);
				setIsSignedIn(!isSignedIn);
			}
		});
		// we check for the current user unless there is a redirect to ?signedIn=true
		if (!window.location.search.includes("?signedin=true")) {
			checkUser(dispatch);
		}
	}, []);

	// This renders the custom form
	if (formState === "email") {
		return (
			<div style={styles.appContainer}>
				<Form />
			</div>
		);
	}

	return (
		<div className="App">
			{userState.loading && (
				<div>
					<p>Loading...</p>
				</div>
			)}
			{/* {!userState.user && !userState.loading && <Buttons updateFormState={updateFormState} />} */}
			{userState.user && userState.user.signInUserSession ? (
				<div style={{}} className="Main">
					{/* <h4>Welcome, {userState.user.signInUserSession.idToken.payload.email}</h4> */}
					<button style={{ ...styles.button, ...styles.signOut, float: "right", position: "sticky", top: 0, marginTop: 0 }} onClick={signOut}>
						<FaSignOutAlt color="white" />
						<p style={{ ...styles.text }}>Sign Out</p>
					</button>
					<DataProvider>
						<div className="App">
							<Router>
								<Navbar isSignedIn={isSignedIn} />
								<Switch>
									<Route path="/" exact component={Home} />
									<Route path="/signup" exact component={SignUp} />
									<Route path="/login" exact component={SignIn} />
									<Route path="/products" component={Products} exact />
									<Route path="/product/:id" exact component={Details} />
									<Route path="/cart" component={Cart} />
									<Route path="/account" exact component={Account} />
									<Route path="/Account/UserProfile" exact component={UserProfile} />
									<Route path="/Account/OrderHistory" exact component={OrderHistory} />
									<Route path="/Account/PaymentMethods" exact component={PaymentMethods} />
									<Route path="/checkout/Checkout" exact component={Checkout} />
								</Switch>
							</Router>
						</div>
					</DataProvider>
				</div>
			) : (
				<DataProvider>
					<div className="App">
						<Router>
							<Navbar isSignedIn={isSignedIn} />
							<Switch>
								<Route path="/" exact component={Home} />
								<Route path="/signup" component={() => <Buttons updateFormState={updateFormState} />} />
								<Route path="/login" component={() => <Buttons updateFormState={updateFormState} />} />
								{/* <Route path="/signup" exact component={SignUp} updateFormState={updateFormState} />
								<Route path="/login" exact component={() => <SignIn updateFormState={updateFormState} />} /> */}
								<Route path="/products" component={Products} exact />
								<Route path="/product/:id" exact component={Details} />
							</Switch>
						</Router>
					</div>
				</DataProvider>
			)}
		</div>
	);
};

const reducer = (state, action) => {
	switch (action.type) {
		case "setUser":
			return { ...state, user: action.user, loading: false };
		case "loaded":
			return { ...state, loading: false };
		default:
			return state;
	}
};

const checkUser = async (dispatch) => {
	try {
		const user = await Auth.currentAuthenticatedUser();
		console.log("user: ", user);
		dispatch({ type: "setUser", user });
	} catch (err) {
		console.log("error: ", err);
		dispatch({ type: "loaded" });
	}
};

const signOut = () => {
	Auth.signOut()
		.then((data) => {
			console.log("signed out: ", data);
		})
		.catch((err) => console.log(err));
};

const styles = {
	appContainer: {
		background: "#000000",
		height: "68px",
		display: "flex",
		justifycontent: "center",
		alignitems: "center",
		fontsize: "1.2rem",
		position: "sticky",
		top: 0,
		zindex: 999,
	},
	loading: {},
	button: {
		maxWidth: 200,
		marginBottom: 0,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "0px 16px",
		borderRadius: 0,
		boxShadow: "0px 1px 3px rgba(0, 0, 0, .3)",
		cursor: "pointer",
		outline: "none",
		border: "none",
		minHeight: 68,
	},
	text: {
		color: "white",
		fontSize: 14,
		marginRight: 40,
		fontWeight: "bold",
		marginBottom: -1,
	},
	signOut: {
		backgroundColor: "#000000",
	},
	footer: {
		fontWeight: "600",
		padding: "0px 25px",
		textAlign: "right",
		color: "rgba(0, 0, 0, 0.6)",
	},
	anchor: {
		color: "rgb(255, 153, 0)",
		textDecoration: "none",
	},
	body: {
		padding: "0px 30px",
		height: "78vh",
	},
};

export default Main;
