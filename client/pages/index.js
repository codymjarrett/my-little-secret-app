import React, { useState, useEffect } from 'react'
import Link from 'next/link';

/* includes tailwind here */
import '../styles/main.css'

import Layout from '../components/Layout'

const Home = () => {
	return (
		<Layout>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<Link href="/userPage">
				<a>Twitter</a>

			</Link>
				<button>Facebook</button>
			</div>
		</Layout>
	)
}

/* 
Keeping this here for future reference. Use this if you want initial data on build
not dynamically on client 
*/

// Home.getInitialProps = async () => {
// 	const data = await fetch('http://localhost:4000/api/secret')
// 	const result = await data.json()

// 	return {
// 		posts: result.data
// 	}
// }

export default Home
