// Library imports
import React from 'react';
import { auth0 } from '@/lib/auth0';
import { redirect } from 'next/navigation';

// Hooks imports

// Styles imports
import styles from './home.module.scss';

// Components imports
import LoginButton from './components/auth/LoginButton';

// Context imports

export default async function Home() {
	const session = await auth0.getSession();
	const user = session?.user;

	if (user) {
		redirect('/dashboard');
	}

	return (
		<div className='home-container' role='main' aria-label='Login page'>
			<div className='main-card-wrapper'>
				<section
					className='action-card'
					aria-labelledby='login-heading'
					role='region'
				>
					<div className={styles['login-container']}>
						<h1
							className='action-text'
							id='login-heading'
							aria-label='Welcome message and login prompt'
						>
							Welcome! Please log in to access your protected content.
						</h1>
						<LoginButton />
					</div>
				</section>
			</div>
		</div>
	);
}
