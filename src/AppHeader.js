import * as React from "react";

const AppHeader = () => {
	return (
		<header className='ui fixed menu'>
			<nav className='ui container'>
				<a href='/' className='header item'>
					Lista kontaktów
				</a>
				<div className='header item'>
					<button className='ui button'>Dodaj</button>
				</div>
			</nav>
		</header>
	);
};

export default AppHeader;
