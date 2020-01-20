import React, { useState, useContext } from 'react'
import { FirebaseAuthContext } from '../components/Firebase'
import axios from 'axios'
import { trigger } from 'swr'

import Posts from '../components/Posts'
import SecretButton from '../components/SecretButton'
import Modal from '../components/ReactModal/ReactModal'


const Home = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [modalInput, setModalInput] = useState('')

	const toggleModal = () => {
		console.log('clicked')
		setIsOpen(!isOpen)
	}

	const handleInputChange = e => {
		setModalInput(e.target.value)
	}
	const sendNewPost = () => {
		axios
			.post('http://localhost:4000/api/secret', {
				secret: modalInput,
			})
			.then(() => trigger('/api/secret'))
		toggleModal()
	}

	const firebaseAuth = useContext(FirebaseAuthContext)
	return (
		<div>
			{/* {JSON.stringify(firebaseAuth, null, 2)} */}
			{firebaseAuth && (
				<>
					<SecretButton onButtonClick={toggleModal} />
					<Modal
						isOpen={isOpen}
						toggleModal={toggleModal}
						onInputChange={handleInputChange}
						onSendNewPost={sendNewPost}
					/>
				</>
			)}
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
