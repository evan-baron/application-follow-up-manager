// Library imports
import React from 'react';
import Link from 'next/link';

// Styles imports
import styles from './navigationItem.module.scss';

interface NavigationItemProps {
	href: string;
	label: string;
	isActive?: boolean;
}

export default function NavigationItem({
	href,
	label,
	isActive = false,
}: NavigationItemProps) {
	return (
		<li role='none'>
			<Link
				href={href}
				className={`${styles.navLink} ${isActive ? styles.active : ''}`}
				aria-current={isActive ? 'page' : undefined}
				aria-label={`Navigate to ${label} page`}
			>
				{label}
			</Link>
		</li>
	);
}
