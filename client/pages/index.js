import React, { useState, useEffect } from 'react'

import { FirebaseContext } from '../components/Firebase'

import Posts from '../components/Posts'
import SecretButton from '../components/SecretButton'

const Home = () => (
	<FirebaseContext.Consumer>
		{firebaseAuth => {
			return (
				<div>
					{JSON.stringify(firebaseAuth, null, 2)}
					{firebaseAuth && <SecretButton />}
					<Posts />
				</div>
			)
		}}
	</FirebaseContext.Consumer>
)

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
