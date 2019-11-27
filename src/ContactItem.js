import React from "react";

const ContactItem = ({ avatarUrl, name, phone }) => {
	return (
		<li className='item'>
			<img src={avatarUrl} alt='avatar' className='ui mini rounded image' />
			<div className='content'>
				<h4 className='header'>{name}</h4>
				<div className='description'>{phone}</div>
			</div>
		</li>
	);
};

export default ContactItem;
