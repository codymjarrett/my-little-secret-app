import Head from './Head'
import Nav from './Nav'

const Layout = ({ children }) => {
    

	return (
		<div className="container xl:w-6/12 m-auto">
			<Nav />
			<Head />
			{ children }
		</div>
	)
}

export default Layout
