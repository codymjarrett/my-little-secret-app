import { useEffect } from 'react'
import Head from './Head'
import Nav from './Nav'

import { FirebaseContext } from './Firebase'

const Layout = ({ children }) => (
	<FirebaseContext.Consumer>
		{firebaseAuth => {
			console.log('layout', firebaseAuth)
			return (
				<div className="container xl:w-6/12 m-auto">
					<Nav firebaseAuth={firebaseAuth}/>
					<Head />
					{children}
				</div>
			)
		}}
	</FirebaseContext.Consumer>
)
// useEffect(() => {}, [firesbaseInitialized])

export default Layout
