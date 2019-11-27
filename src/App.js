import React, { useState, useEffect } from "react";
import ContactList from "./ContactList";
import AppHeader from "./AppHeader";

function App() {
	const [contacts, setContacts] = useState(null);

	useEffect(() => {
		fetch("https://randomuser.me/api/?format=json&results=10")
			.then((res) => res.json())
			.then((json) => setContacts(json.results));
	}, []);

	console.log(contacts);
	return (
		<div className='App'>
			<AppHeader />
			<main>
				{contacts ? <ContactList contacts={contacts} /> : "Ładowanie"}
			</main>
		</div>
	);
}

export default App;
