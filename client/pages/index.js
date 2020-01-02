import React, { useState, useEffect } from 'react'

/* includes tailwind here */
import '../styles/main.css'

import Head from './../components/Head'
import SecretButton from './../components/SecretButton'
import Posts from '../components/Posts'


const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<Head />
			<SecretButton toggleModal={toggleModal} />
			<Posts isOpen={isOpen} toggleModal={toggleModal}/>
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
