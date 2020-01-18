import React, { useState, useEffect } from 'react'




import Posts from '../components/Posts'
import SecretButton from '../components/SecretButton';

const Home = ({firesbaseInitialized}) => {
	
	return (
			<div>
				{ firesbaseInitialized && <SecretButton />}
				<Posts />
			</div>
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
