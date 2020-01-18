import {useEffect} from 'react'
import Head from './Head'
import Nav from './Nav'

const Layout = ({ children, firesbaseInitialized }) => {
    useEffect(() => {}, [firesbaseInitialized])

	return (
		<div className="container xl:w-6/12 m-auto">
			<Nav firesbaseInitialized={firesbaseInitialized}/>
			<Head />
			{ children }
		</div>
	)
}

export default Layout
