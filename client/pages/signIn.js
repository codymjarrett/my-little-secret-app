import Layout from '../components/Layout'
import Button from '../components/Button'

import firebase from '../components/Firebase/'

// import { FirebaseContext } from '../components/Firebase'

import { useEffect } from 'react'
// import { firebase } from 'firebase/app'

const SignInPage = () => {


	const signup = provider => {
		let signinProvider = provider === 'facebook' ? new firebase.auth.FacebookAuthProvider() : new firebase.auth.TwitterAuthProvider()
		
		firebase
			.auth()
			.signInWithPopup(signinProvider)
			.then(function(result) {
				// This gives you a Facebook Access Token. You can use it to access the Facebook API.
				var token = result.credential.accessToken
				console.log(token)
				// The signed-in user info.
				var user = result.user
				console.log(user)
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
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<h2>Login using the following:</h2>
			<div>
				<Button
					handleOnClick={signup('twitter')}
					content="Twitter"
					buttonStyles="longYellowButton"
					svg="/svg/twitter.svg"
				></Button>
				<Button
					handleOnClick={signup('facebook')}
					content="Facebook"
					buttonStyles="longYellowButton"
					svg="/svg/facebook.svg"
				></Button>
			</div>
		</div>
	)
}

export default SignInPage
