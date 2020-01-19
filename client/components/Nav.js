import { useEffect, useState } from 'react'
import Button from './Button'
import firebase from './Firebase'
import Link from 'next/link'

const Nav = ({ firebaseAuth }) => {
	const [currentUser, setCurrentUser] = useState({})

	let userLoggedIn = currentUser ? true : false
	let navButtonContent = userLoggedIn ? 'Logout' : 'Login'
	console.log('testing out', firebaseAuth)

	useEffect(() => {
		setCurrentUser(firebaseAuth)
		console.log('testing in effect', firebaseAuth)
	}, [firebaseAuth])
	

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
				{currentUser ? (
					<button onClick={logUserOut}>Logout</button>
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
