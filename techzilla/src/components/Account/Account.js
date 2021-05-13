import React from "react";
import { Link } from "react-router-dom";
import AccountItem from "./AccountItem";
import "./Account.css";
import Footer from "../footer/Footer";

function Account(props) {
	console.log("props in Account.js", props.user);
	return (
		<div className="page-container">
			<div className="account">
				<h1>Your account</h1>
				<div className="account-container">
					<div className="account-wrapper">
						<div className="dashboard">
							<h5>Primary Information</h5>
							<address>
								<div style={{ textStyle: "bold" }}>
									Name: <span style={{ color: "#090" }}>{"Tech Zilla"}</span>
								</div>
								<br />
								<div style={{ textStyle: "bold" }}>
									Email: <span style={{ color: "#090" }}>{props.user.attributes.email}</span>
								</div>
								<br />
								Phone:
								<br />
								Address:
							</address>
							<div className="forum">
								<h5>
									<br />
									View Forum Posts
								</h5>
								<Link className="forum-link" to="/forumposts">
									<img classname="forum-picture" src="logo1.png" alt="" />
								</Link>
							</div>
						</div>
						<ul className="account-items">
							<AccountItem src="images/logo1.png" title="Manage Profile" description="Manage name, address, phone number" path="/Account/UserProfile" />
							<AccountItem src="images/logo1.png" title="Your Orders" description="Track, view orders" path="/Account/OrderHistory" />
							<AccountItem src="images/logo1.png" title="Your Payments" description="Manage payment methods" path="/Account/PaymentMethods" />
						</ul>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Account;
