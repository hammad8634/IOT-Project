import React from 'react';
// Sections
import TopNavbar from '../components/Nav/TopNavbar';
import Header from '../components/Sections/Header';
import Dashboard from '../components/Sections/Dashboard';
import Footer from '../components/Sections/Footer';

export default function Landing() {
	return (
		<>
			<TopNavbar />
			<Header />
			<Dashboard />
			<Footer />
		</>
	);
}
