import { useEffect, useContext } from 'react'
import Head from './Head'
import Nav from './Nav'

import { FirebaseAuthContext } from './Firebase'

const Layout = ({ children }) => {
	const authContext = useContext(FirebaseAuthContext)
	return (
		<div className="container xl:w-6/12 m-auto">
			<Nav />
			<Head />
			{children}
		</div>
	)
}

export default Layout
