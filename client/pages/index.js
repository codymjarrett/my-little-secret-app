import React, { useState, useEffect } from 'react'
import fetch from 'unfetch'
import useSWR from 'swr'

/* includes tailwind here */
import '../styles/main.css'

import SecretButton from './../components/SecretButton'
import ReactModal from '../components/ReactModal/ReactModal'

const fetcher = async () => {
	const data = await fetch('http://localhost:4000/api/secret')
	const json = await data.json()
	return {
		posts: json.data,
	}
}
const Home = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { data, error } = useSWR('/api/secrets', fetcher)

	const renderData = () => {
		if (error) return <div>Failed to load</div>
		if (!data) return <div>Loading...</div>
		return data.posts.map(({ secret, _id }) => {
			return (
				<div className="shadow-lg bg-white-300">
					<div key={_id}>{secret}</div>
				</div>
			)
		})
	}

	const toggleModal = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<SecretButton toggleModal={toggleModal} />
			{renderData()}
			<ReactModal isOpen={isOpen} toggleModal={toggleModal} />
		</>
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
