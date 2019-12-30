import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* includes tailwind here */
import '../styles/main.css'

import SecretButton from './../components/SecretButton'
import ReactModal from '../components/ReactModal/ReactModal'

const Home = () => {
	useEffect(() => {
		fetchData()
	})
	const [isOpen, setIsOpen] = useState(false)

	const fetchData = async () => {
		const secrets = await axios.get('http://localhost:4000/api/secret')
		console.log(secrets.data)
	}

	const toggleModal = () =>{
		setIsOpen(!isOpen)
	}

	return (
		<>
			<SecretButton toggleModal={toggleModal}/>
			<ReactModal isOpen={isOpen} toggleModal={toggleModal}/>
		</>
	)
}

export default Home
