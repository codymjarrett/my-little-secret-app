import Layout from '../components/Layout'
import Button from '../components/Button'
import Link from 'next/link'

import firebase from '../components/Firebase/'

const SignInPage = () => {
	const signup = provider => {
		let signinProvider

		switch (provider) {
			case 'facebook':
				signinProvider = new firebase.auth.FacebookAuthProvider()
				break
			case 'twitter':
				signinProvider = new firebase.auth.TwitterAuthProvider()
				break
		}
		try {
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

					// history.push('/')
					// ...
				})
		} catch (error) {
			// Handle Errors here.
			var errorCode = error.code
			var errorMessage = error.message
			// The email of the user's account used.
			var email = error.email
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential
			// ...
		}
	}
	return (
		<div className="text-center mt-20">
			<h2 className="text-xl">Login using the following:</h2>
			<div className="flex justify-around mt-12">
				<Button
					
					handleOnClick={() => signup('twitter')}
					content="Twitter"
					buttonStyles="longYellowButton"
					svg="/svg/twitter.svg"
				></Button>

				<Button
					
					handleOnClick={() => signup('facebook')}
					content="Facebook"
					buttonStyles="longYellowButton"
					svg="/svg/facebook.svg"
				></Button>
			</div>
		</div>
	)
}

export default SignInPage
