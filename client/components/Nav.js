import { useEffect, useState } from 'react'
import Button from './Button'
import firebase from './Firebase'
import Link from 'next/link'

const Nav = ({ firesbaseInitialized }) => {
	const [currentUser, setCurrentUser] = useState({})
	
	useEffect(() => {
		setCurrentUser(firesbaseInitialized)
	}, [firesbaseInitialized])

	const userLoggedIn = currentUser ? true : false
	const navButtonContent = userLoggedIn ? 'Logout' : 'Login'

	const logUserOut = () => {
		if (currentUser) {
				return firebase.auth().signOut()
			
		}
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
				<Button
					handleOnClick={() => logUserOut}
					content={navButtonContent}
					href="/signIn"
					buttonStyles="greenButton"
				/>
			</div>
		</nav>
	)
}

export default Nav
