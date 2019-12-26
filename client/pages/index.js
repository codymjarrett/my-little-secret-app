import React, { useState, useEffect } from 'react'
import axios from 'axios'

/* includes tailwind here */
import '../styles/main.css'

const Home = () => {
	useEffect(() => {
		fetchData()
	})

	const fetchData = async () => {
		const secrets = await axios.get('http://localhost:4000/api/secret')
		console.log(secrets.data)
	}

	return <div>Hello home</div>
}

export default Home
