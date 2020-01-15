
import Layout from '../components/Layout'
import SecretButton from '../components/SecretButton'
import withAuthentication from '../components/containers/withAuthentication'

const userPage = () => {
	

	const toggleModal = () => {
		setIsOpen(!isOpen)
    }
    
	return (
		<Layout>
			<SecretButton toggleModal={toggleModal} />
		</Layout>
	)
}

export default userPage
