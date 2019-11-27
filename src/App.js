import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import AppHeader from "./AppHeader";
import { connect } from "react-redux";
import { contactsFetched } from "./redux/actions/index";

function App({ contacts, contactsFetched }) {
	useEffect(() => {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then((res) => res.json())
			.then((json) => contactsFetched(json.results));
	}, []);

	return (
		<div className='App'>
			<AppHeader />
			<main>
				{contacts ? <ContactList contacts={contacts} /> : "Ładowanie"}
			</main>
		</div>
	);
}

const mapState = (state) => {
	console.log(state);
	return {
		contacts: state.contacts
	};
};

const mapDispatch = { contactsFetched };
export default connect(mapState, mapDispatch)(App);
