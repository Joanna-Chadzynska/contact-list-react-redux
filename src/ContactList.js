import React from "react";
import ContactItem from "./ContactItem";

const ContactList = (props) => {
	const contactToContactItem = (contact) => {
		const avatarUrl = contact.picture.thumbnail;
		const { title, first, last } = contact.name;
		const name = `${title} ${first} ${last}`.trim();
		const phone = contact.phone;
		const key = contact.login.username;
		return (
			<ContactItem key={key} avatarUrl={avatarUrl} name={name} phone={phone} />
		);
	};
	return (
		<ul className='ui relaxed divided list selection'>
			{props.contacts.map(contactToContactItem)}
		</ul>
	);
};

export default ContactList;
