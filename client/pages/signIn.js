import Layout from '../components/Layout'
import Button from '../components/Button'

import { useEffect } from 'react'

import firebase from 'firebase/app'
import firebaseCredentials from '../firebase/firebase'

const SignInPage = () => {
	useEffect(() => {
		firebase.initializeApp(firebaseCredentials)
		console.log(firebase)
	})

	const signInWithPopup = provider => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken
				// The signed-in user info.
				var user = result.user
				// ...
			})
			.catch(function(error) {
				// Handle Errors here.
				var errorCode = error.code
				var errorMessage = error.message
				// The email of the user's account used.
				var email = error.email
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential
				// ...
			})
	}
	return (
		<Layout>
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<h2>Login using the following:</h2>
				<div>
					<Button
						content="Twitter"
						buttonStyles="longYellowButton"
						svg="/svg/twitter.svg"
					></Button>
					<Button
						onClick={() => signInWithPopup(firebaseApp)}
						content="Facebook"
						buttonStyles="longYellowButton"
						svg="/svg/facebook.svg"
					></Button>
				</div>
			</div>
		</Layout>
	)
}

export default SignInPage
