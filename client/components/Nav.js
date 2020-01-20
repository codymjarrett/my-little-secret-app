import { useEffect, useState, useContext } from 'react'
import Button from './Button'
import firebase from './Firebase'
import { FirebaseAuthContext } from '../components/Firebase'
import Link from 'next/link'

const Nav = () => {
	// const [currentUser, setCurrentUser] = useState()

	const authContext = useContext(FirebaseAuthContext)

	let userLoggedIn = authContext === null ? false : true
	let navButtonContent = userLoggedIn ? 'Logout' : 'Login'

	useEffect(() => {
		console.log('useeffect ran')
		console.log('auth', authContext)
		console.log('firebase', firebase.auth())
	})

	const logUserOut = () => {
		return firebase.auth().signOut()
	}

	return (
		<nav className="flex justify-between m-4">
			<div>
				<Link href="/">
					<h1 className="cursor-pointer text-xl">!Keep Schtum</h1>
				</Link>
			</div>
			<div>
				<img className="w-16 h-16" src="/svg/logo.svg" alt="logo" />
			</div>
			<div>
				{userLoggedIn ? (
					<Link href="/">
						<button onClick={logUserOut}>Logout</button>
					</Link>
				) : (
					<Button
						content={navButtonContent}
						href="/signIn"
						buttonStyles="greenButton"
					/>
				)}
			</div>
		</nav>
	)
}

export default Nav
