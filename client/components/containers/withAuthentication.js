import { useState, useEffect } from 'react'
import firebase from '../Firebase/'

export default WrappedComponent => {
	const WithAuthentication = () => {
		const [providerData, setProviderData] = useState([])

		useEffect(() => {
			firebase.auth().onAuthStateChanged(user => {
				console.log('user', user)
				if (user) {
					setProviderData(user.providerData)
				} else {
					console.log('must be authenticated')
				}
			})
		})

		const markup =
			providerData.length > 0 ? (
				<WrappedComponent providerData={providerData} />
			) : (
				<div>Loading...</div>
			)

		return <div>hello</div>
	}
	return WithAuthentication
}
