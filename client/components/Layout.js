import { useState } from 'react';
import Posts from './Posts'
import Head from './Head'

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)

	const toggleModal = () => {
		setIsOpen(!isOpen)
    }

	return (
		<div className="container xl:w-6/12 m-auto">
			<Head />
			{ children }
			<Posts isOpen={isOpen} toggleModal={toggleModal} />
		</div>
	)
}

export default Layout
